import React, { useRef, useEffect } from "react";

interface HeroProps {
  trustBadge?: { text: string };
  headline: { line1: string; line2: string };
  subtitle: string;
  buttons?: {
    primary?: { text: string; onClick?: () => void };
    secondary?: { text: string; onClick?: () => void };
  };
  className?: string;
}

const goldShader = `#version 300 es
precision highp float;
out vec4 O;
uniform vec2 resolution;
uniform float time;
#define FC gl_FragCoord.xy
#define T time
#define R resolution
#define MN min(R.x,R.y)
float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);} 
float noise(in vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=rnd(i),b=rnd(i+vec2(1,0)),c=rnd(i+vec2(0,1)),d=rnd(i+1.);return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);} 
float fbm(vec2 p){float t=.0,a=1.;mat2 m=mat2(1.,-.5,.2,1.2);for(int i=0;i<5;i++){t+=a*noise(p);p*=2.*m;a*=.5;}return t;}
float clouds(vec2 p){float d=1.,t=.0;for(float i=.0;i<3.;i++){float a=d*fbm(i*10.+p.x*.2+.2*(1.+i)*p.y+d+i*i+p);t=mix(t,d,a);d=a;p*=2./(i+1.);}return t;}
void main(void){
  vec2 uv=(FC-.5*R)/MN, st=uv*vec2(2,1);
  vec3 col=vec3(0);
  float bg=clouds(vec2(st.x+T*.35,-st.y));
  uv*=1.-.3*(sin(T*.2)*.5+.5);
  // molten gold palette: deep bronze -> amber -> honey highlight
  vec3 bronze = vec3(0.18, 0.10, 0.03);
  vec3 amber  = vec3(0.95, 0.62, 0.12);
  vec3 honey  = vec3(1.00, 0.85, 0.45);
  for(float i=1.; i<12.; i++){
    uv+=.1*cos(i*vec2(.1+.01*i,.8)+i*i+T*.5+.1*uv.x);
    vec2 p=uv;
    float d=length(p);
    float sparkle = .00125/d;
    col += sparkle * mix(amber, honey, .5+.5*sin(i+T*.3));
    float b=noise(i+p+bg*1.731);
    col += .002*b/length(max(p,vec2(b*p.x*.02,p.y))) * honey;
    col = mix(col, mix(bronze, amber, bg) * .55, d);
  }
  // boost contrast and clamp toward black background
  col = pow(col, vec3(0.92));
  O = vec4(col, 1.0);
}`;

const vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

const Hero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fallbackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2");
    if (!gl) {
      // Show CSS gold fallback
      if (fallbackRef.current) fallbackRef.current.style.opacity = "1";
      return;
    }

    const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, vertexSrc);
    gl.compileShader(vs);
    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, goldShader);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(fs));
      if (fallbackRef.current) fallbackRef.current.style.opacity = "1";
      return;
    }
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, "resolution");
    const uTime = gl.getUniformLocation(program, "time");

    let raf = 0;
    const loop = (now: number) => {
      gl.clearColor(0.04, 0.035, 0.027, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now * 1e-3);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden bg-matte ${className}`}
    >
      {/* CSS fallback layer (visible if WebGL2 missing) */}
      <div
        ref={fallbackRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(245,158,11,0.45), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(252,211,77,0.35), transparent 65%), #0A0907",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0907]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-32 text-center">
        {trustBadge && (
          <div className="animate-fade-in-down mb-8 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-1.5 text-sm text-amber-100 backdrop-blur-md">
            {trustBadge.text}
          </div>
        )}

        <h1 className="animate-fade-in-up animation-delay-200 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          <span className="text-gold-gradient animate-gradient block bg-clip-text">
            {headline.line1}
          </span>
          <span className="text-gold-gradient animate-gradient mt-2 block bg-clip-text">
            {headline.line2}
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-400 mt-8 max-w-2xl text-base text-amber-100/75 sm:text-lg md:text-xl">
          {subtitle}
        </p>

        {buttons && (
          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center gap-4 sm:flex-row">
            {buttons.primary && (
              <button
                onClick={buttons.primary.onClick}
                className="bg-gold-gradient shadow-gold rounded-full px-8 py-3.5 text-base font-semibold text-[#0A0907] transition-transform hover:scale-105"
              >
                {buttons.primary.text}
              </button>
            )}
            {buttons.secondary && (
              <button
                onClick={buttons.secondary.onClick}
                className="rounded-full border border-amber-300/40 bg-amber-400/5 px-8 py-3.5 text-base font-semibold text-amber-100 backdrop-blur-md transition-colors hover:bg-amber-400/10"
              >
                {buttons.secondary.text}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;