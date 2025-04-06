"use client";

import { CreativeHero } from "@/components/CreativeHero";
import { PortfolioNavBar } from "@/components/PortfolioNavBar";
import { ProjectGrid } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { SocialContentGenerator } from "@/components/SocialContentGenerator";
import { ZapierChatbot } from "@/components/ZapierChatbot";

export default function Home() {
  // Sample project data
  const projects = [
    {
      title: "AI Media Generator",
      description: "An AI-powered tool that generates creative bios, visuals, taglines, and more for creative professionals.",
      image: "/project-1.jpg",
      tags: ["AI", "Next.js", "React"],
      link: "/ai-generator",
      github: "https://github.com/example/ai-generator",
    },
    {
      title: "Creative Portfolio",
      description: "A modern portfolio website for designers and creative professionals with custom animations.",
      image: "/project-2.jpg",
      tags: ["Design", "Framer Motion", "TailwindCSS"],
      link: "/portfolio",
    },
    {
      title: "Brand Archetype Engine",
      description: "Tool that helps identify and develop your brand's unique creative identity and voice.",
      image: "/project-3.jpg",
      tags: ["Branding", "TypeScript", "API"],
      link: "/brand-engine",
      github: "https://github.com/example/brand-engine",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <PortfolioNavBar 
        navItems={[
          { name: "Home", url: "/" },
          { name: "About", url: "#about" },
          { name: "Projects", url: "#projects" },
          { name: "Contact", url: "#contact" },
        ]}
        logo={{
          url: "/",
          title: "Build with Brilliance"
        }}
        ctaButton={{
          text: "Let's Connect",
          url: "#contact"
        }}
      />
      
      <CreativeHero
        badge="Creative Portfolio"
        title="Build with Brilliance"
        subtitle="A platform for creatives and visionaries to showcase their story, connect through rich media, and spark new collaborations."
        actions={[
          {
            label: "View Portfolio",
            href: "#projects",
            variant: "default"
          },
          {
            label: "Contact Me",
            href: "#contact",
            variant: "outline"
          }
        ]}
      />

      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">The Creator's Journey</h2>
            <p className="text-lg text-white/70">
              As a creative innovator, I blend technology and artistry to build meaningful digital experiences that inspire and transform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-blue-500/30 transition-all">
              <div className="w-14 h-14 bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Visionary Design</h3>
              <p className="text-white/60">
                Creating bold, expressive visuals that communicate your unique story and captivate your audience.
              </p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-purple-500/30 transition-all">
              <div className="w-14 h-14 bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovative Solutions</h3>
              <p className="text-white/60">
                Leveraging cutting-edge AI and automation to solve complex problems and enhance creative workflows.
              </p>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-pink-500/30 transition-all">
              <div className="w-14 h-14 bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Collaborative Process</h3>
              <p className="text-white/60">
                Working together to transform ideas into reality through an engaging and transparent creative process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Creative Portfolio</h2>
            <p className="text-lg text-white/70">
              Explore a collection of innovative projects that showcase the power of creative collaboration.
            </p>
          </div>
          
          <ProjectGrid projects={projects} />
        </div>
      </section>

      <SocialContentGenerator />

      <ContactSection />
      
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Build with Brilliance
              </span>
              <p className="mt-2 text-white/60 max-w-md">
                Creating innovative digital experiences powered by AI and human creativity.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40">
            <p> 2025 Build with Brilliance. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      <ZapierChatbot />
    </main>
  )
}
