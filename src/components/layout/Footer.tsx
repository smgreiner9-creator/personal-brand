import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6">
        <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted">{footer.copyright}</p>
          <div className="flex gap-6">
            {footer.socials.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <a href="/privacy" className="text-xs text-muted transition-colors hover:text-text">
            Privacy Policy
          </a>
          <a href="/terms" className="text-xs text-muted transition-colors hover:text-text">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
