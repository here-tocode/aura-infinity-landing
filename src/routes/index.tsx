import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/ui/animated-shader-hero";
import Navbar from "@/components/sections/Navbar";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Labs — Ship AI-Native Products" },
      {
        name: "description",
        content:
          "AI Labs builds high-converting landing pages, custom websites, AI agents, and AI automations — engineered at the speed of Claude Code & OpenAI Codex.",
      },
      { property: "og:title", content: "AI Labs — Ship AI-Native Products" },
      {
        property: "og:description",
        content:
          "Landing pages, websites, AI agents & automations — by Claude Code and Codex power users.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} id="top" className="bg-matte min-h-screen">
      <Navbar />
      <Hero
        trustBadge={{ text: "✨ Built by Claude Code & Codex power users" }}
        headline={{ line1: "AI Labs.", line2: "Ship AI-Native Products." }}
        subtitle="We design conversion-grade landing pages, full websites, and deploy custom AI agents & automations — engineered at the speed of Claude Code."
        buttons={{
          primary: {
            text: "Start Your Project",
            onClick: () =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
          },
          secondary: {
            text: "See Our Work",
            onClick: () =>
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }),
          },
        }}
      />
      <Services />
      <Stack />
      <Process />
      <Work />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
