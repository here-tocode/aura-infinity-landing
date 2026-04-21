import React from "react";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import Logo from "@/components/ui/logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-matte border-t border-amber-300/15 px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-amber-100/65">
            AI-native landing pages, websites, agents, and automations — built by Claude Code & Codex operators.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-amber-100/70">
            <li><a href="#services" className="hover:text-amber-200">Landing Pages</a></li>
            <li><a href="#services" className="hover:text-amber-200">Websites & Web Apps</a></li>
            <li><a href="#services" className="hover:text-amber-200">AI Agents</a></li>
            <li><a href="#services" className="hover:text-amber-200">AI Automations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-amber-100/70">
            <li><a href="#stack" className="hover:text-amber-200">Stack</a></li>
            <li><a href="#work" className="hover:text-amber-200">Work</a></li>
            <li><a href="#pricing" className="hover:text-amber-200">Pricing</a></li>
            <li><a href="#contact" className="hover:text-amber-200">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200">Connect</h4>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Mail, href: "mailto:hello@aurainfinitylabs.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-300/20 text-amber-300 transition-colors hover:border-amber-300/50 hover:bg-amber-400/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-amber-300/10 pt-6 text-xs text-amber-100/55 sm:flex-row">
        <span>© 2026 AI Labs · www.aurainfinitylabs.com</span>
        <span>Crafted with Claude Code & OpenAI Codex.</span>
      </div>
    </footer>
  );
};

export default Footer;