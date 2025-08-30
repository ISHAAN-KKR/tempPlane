import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { CookieBanner } from "./cookie-banner";

export default function SiteFooter() {
  return (
    <>
      <footer className="container py-12">
        <div className="glass rounded-3xl p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold">AeroPulse</h4>
              <p className="text-sm text-muted-foreground mt-2">Flight delay intelligence for India.</p>
            </div>
            <div>
              <h5 className="font-medium">Product</h5>
              <ul className="mt-2 space-y-1 text-sm">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/dashboard">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Company</h5>
              <ul className="mt-2 space-y-1 text-sm">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium">Follow</h5>
              <div className="mt-2 flex gap-3">
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-6">© {new Date().getFullYear()} AeroPulse</p>
        </div>
      </footer>
      <CookieBanner />
    </>
  );
}
