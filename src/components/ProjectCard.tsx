"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
  github,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-2 bg-black text-white transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={onMouseMove}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-0" />
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100"
          style={style}
        />
      </div>

      <CardContent className="relative z-10 flex h-full flex-col p-6">
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-white/20 bg-black/50 text-white backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm text-white/70">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            View Project
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
