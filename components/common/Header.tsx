"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <header className="py-5 border-b border-border relative">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold">Portfolio</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-5">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3 items-center relative">
          <ThemeToggle />

          {/* Contact Button */}
          <div className="relative">
            <Button onClick={handleToggle}>Contact</Button>

            {/* Dropdown Menu */}
            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border shadow-lg rounded-lg text-left z-10 overflow-hidden">
                <div className="px-3 py-2 border-b border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Contact
                  </p>
                </div>
                <ul className="py-1">
                  <li>
                    <a
                      href="mailto:chiksahaduken@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      chiksahaduken@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Cheska-Mae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:0975634563"
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Phone: 0975634563
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
