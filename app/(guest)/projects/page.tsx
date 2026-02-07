"use client";

import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>

      <p className="text-muted-foreground mb-8 leading-relaxed">
        Here are some of the projects I've been working on as I explore front-end development.
        I enjoy creating clean, minimal, and easy-to-use interfaces that feel calm and intuitive for users.
      </p>

      <Button
        onClick={() => window.open("https://github.com/Cheska-Mae?tab=repositories", "_blank")}
        className="rounded-full"
      >
        View My GitHub Repository
      </Button>
    </div>
  );
}
