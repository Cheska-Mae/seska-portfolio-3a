import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import homeProfile from "../../homeprofile.jpg";

export default function HomePage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 items-center">

          <div className="space-y-6">
            <p className="tracking-[0.25em] text-xs font-semibold text-pink-600 uppercase">
              Cheska Nunez · Cebu
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Frontend developer
              <span className="block">focused on clear, calm</span>
              <span className="block">commerce interfaces.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              I design and build soft, minimal, and easy-to-use interfaces that feel calm
              instead of chaotic—perfect for small businesses, creators, and online shops.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <Link href="/projects">Projects</Link>
              </Button>

            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-pink-200/80 via-fuchsia-200/80 to-purple-200/80 blur-3xl opacity-70 dark:opacity-90"
                aria-hidden="true"
              />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl border border-pink-100 dark:border-pink-800">
                <Image
                  src={homeProfile}
                  alt="Cheska Nunez"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
