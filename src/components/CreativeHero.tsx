"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface HeroAction {
  label: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
}

interface CreativeHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  actions: HeroAction[];
}

export function CreativeHero({
  badge,
  title,
  subtitle,
  actions,
}: CreativeHeroProps) {
  const fadeUpVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      y: 30,
    }),
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + custom * 0.1,
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <img 
          src="/hero-bg.jpg" 
          alt="Hero background" 
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-purple-600/20 to-transparent" />
        <ElegantShape
          className="left-[10%] top-[20%]"
          width={300}
          height={300}
          rotate={20}
          delay={0.2}
          gradient="from-blue-500/[0.15]"
        />
        <ElegantShape
          className="right-[15%] top-[15%]"
          width={400}
          height={400}
          rotate={-15}
          delay={0.3}
          gradient="from-purple-500/[0.15]"
        />
        <ElegantShape
          className="left-[20%] bottom-[20%]"
          width={350}
          height={350}
          rotate={10}
          delay={0.4}
          gradient="from-indigo-500/[0.15]"
        />
        <ElegantShape
          className="right-[20%] bottom-[15%]"
          width={250}
          height={250}
          rotate={-5}
          delay={0.5}
          gradient="from-pink-500/[0.15]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="container mx-auto px-4 py-32 text-center">
          {badge && (
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-block"
            >
              <span className="inline-flex animate-shimmer items-center rounded-full border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-1.5 text-xs font-medium text-white">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4"
          >
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "default"}
                size="lg"
                asChild
              >
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
