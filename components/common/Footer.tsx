import Link from "next/link";

const linkClass =
  "text-muted-foreground hover:text-foreground transition-colors";

export function Footer() {
  return (
    <footer className="py-8 md:py-10 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-8 md:gap-12 justify-between">
          {/* Brand */}
          <div className="space-y-2">
            <h2 className="font-semibold text-foreground">Portfolio</h2>
            <p className="text-sm text-muted-foreground">
              Poblacion, Cordova, Cebu
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className={linkClass}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:09756345163"
                  className={linkClass}
                  aria-label="Phone"
                >
                  Phone: 0975634563
                </a>
              </li>
              <li>
                <a
                  href="mailto:chiksahaduken@gmail.com"
                  className={linkClass}
                  aria-label="Email"
                >
                  chiksahaduken@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Cheska-Mae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  aria-label="GitHub"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
