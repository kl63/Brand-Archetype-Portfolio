"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  name: string;
  url: string;
}

interface NavBarProps {
  logo?: {
    url: string;
    title: string;
  };
  navItems: NavItem[];
  ctaButton?: {
    text: string;
    url: string;
  };
  className?: string;
}

export function PortfolioNavBar({
  logo = {
    url: "/",
    title: "Build with Brilliance",
  },
  navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/#about" },
    { name: "Projects", url: "/#projects" },
    { name: "Contact", url: "/#contact" },
  ],
  ctaButton = {
    text: "Let's Connect",
    url: "/#contact",
  },
  className,
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-5",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={logo.url}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            {logo.title}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild>
              <Link href={ctaButton.url}>{ctaButton.text}</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-white">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {logo.title}
                    </span>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.url}
                      className="text-white/70 py-2 text-base font-medium hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Button asChild className="w-full">
                      <Link href={ctaButton.url}>{ctaButton.text}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
