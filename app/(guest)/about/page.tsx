import Image from "next/image";

const skills = ["HTML", "CSS", "JavaScript", "Bootstrap", "Next.js", "React"];

export default function AboutPage() {
  return (
    <main className="bg-background">
      <section className="container mx-auto px-6 py-16 md:py-20 space-y-12">
        {/* Top section - About layout */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-[0.2em] text-pink-600 uppercase">
              About
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-pink-50">
              Hi, I&apos;m Cheska.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              I&apos;m a creative frontend developer and visual storyteller based in Cebu.
              I love turning ideas into clean, gentle interfaces that feel soft, modern,
              and a little bit dreamy.
            </p>
            <p className="text-base text-muted-foreground max-w-xl">
              Outside of code, I spend a lot of time editing videos, playing with color
              palettes, and experimenting with layouts that feel calm but still full of
              personality.
            </p>
          </div>

          {/* Profile with glow */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-pink-200/80 via-fuchsia-200/80 to-purple-200/80 blur-3xl opacity-70 dark:opacity-90"
                aria-hidden="true"
              />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl border border-pink-100 dark:border-pink-800">
                <Image
                  src="/profile.jpg"
                  alt="Cheska Nunez"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <section className="border border-pink-100 dark:border-pink-900 rounded-3xl p-8 md:p-10 bg-white/70 dark:bg-pink-950/40 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-pink-50 mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Tools I keep close every day.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-pink-100 text-pink-800 text-sm font-medium border border-pink-200 dark:bg-pink-900/60 dark:text-pink-50 dark:border-pink-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}