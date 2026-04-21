import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ShaderAnimationProps {
  className?: string;
  /** Speed multiplier for the animation. Default 1. */
  speed?: number;
  /** Intensity multiplier for line brightness. Default 1. */
  intensity?: number;
}

const vertexShader = /* glsl */ `
  void main() { gl_Position = vec4(position, 1.0); }
`;

// Gold-tinted version of the original shader-lines shader.
// Original RGB swizzle replaced with a warm gold gradient mix.
const fragmentShader = /* glsl */ `
  precision highp float;
  uniform vec2  resolution;
  uniform float time;
  uniform float intensity;

  float random(in float x){ return fract(sin(x)*1e4); }
  float random(vec2 st){
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main(void){
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);

    vec2 fMosaicScal = vec2(4.0, 2.0);
    vec2 vScreenSize = vec2(256.0, 256.0);
    uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
    uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);

    float t = time * 0.06 + random(uv.x) * 0.4;
    float lineWidth = 0.0008;

    // Three "channels" — we use them as weights to mix gold tones.
    vec3 ch = vec3(0.0);
    for (int j = 0; j < 3; j++) {
      for (int i = 0; i < 5; i++) {
        ch[j] += lineWidth * float(i*i)
               / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 1.0 - length(uv));
      }
    }

    // Map the three channel intensities into a warm gold palette.
    vec3 bronze = vec3(0.45, 0.22, 0.04);   // deep warm
    vec3 amber  = vec3(1.00, 0.65, 0.12);   // mid amber
    vec3 honey  = vec3(1.00, 0.88, 0.50);   // bright highlight

    vec3 col = bronze * ch.x + amber * ch.y + honey * ch.z;
    col *= intensity;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function ShaderAnimation({
  className = "",
  speed = 1,
  intensity = 1,
}: ShaderAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const camera = new THREE.Camera();
    camera.position.z = 1;
    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
      intensity: { value: intensity },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const onResize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      uniforms.resolution.value.x = renderer.domElement.width;
      uniforms.resolution.value.y = renderer.domElement.height;
    };
    onResize();
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      uniforms.time.value += 0.05 * speed;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [speed, intensity]);

  return <div ref={containerRef} className={`h-full w-full ${className}`} />;
}

export default ShaderAnimation;
