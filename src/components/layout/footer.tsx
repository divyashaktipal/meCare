import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-8 mt-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary">
                Me<span className="text-foreground">Care</span>
              </div>
            </Link>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">
              MeCare is a unified platform for providing interactive medical support and proactive healthcare to everyone around the world.
            </p>
            <div className="space-y-2 mt-6 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">A:</span> 123 Health Ave, NY 10001
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">P:</span> +1 (800) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">E:</span> info@mecare.example.com
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-foreground text-lg">Quick Links</h3>
            <ul className="space-y-4 text-sm text-foreground/80 font-medium">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-foreground text-lg">Useful Links</h3>
            <ul className="space-y-4 text-sm text-foreground/80 font-medium">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Services</Link></li>
              <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-foreground text-lg">Download Our App</h3>
            <ul className="space-y-4 text-sm text-foreground/80 font-medium mb-6">
              <li>Get the app on your mobile device to track your health sessions and appointments easily.</li>
            </ul>
            <div className="flex flex-col gap-3">
              <button className="bg-foreground text-surface px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/80 transition-colors">
                <div className="w-6 h-6 rounded bg-surface/20"></div>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-surface/70">GET IT ON</div>
                  <div className="font-bold text-sm leading-tight">Google Play</div>
                </div>
              </button>
              <button className="bg-foreground text-surface px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/80 transition-colors">
                <div className="w-6 h-6 rounded bg-surface/20"></div>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-surface/70">Download on the</div>
                  <div className="font-bold text-sm leading-tight">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60 gap-4 font-medium">
          <p>© {new Date().getFullYear()} MeCare. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">FB</Link>
            <Link href="#" className="hover:text-primary transition-colors">IG</Link>
            <Link href="#" className="hover:text-primary transition-colors">TW</Link>
            <Link href="#" className="hover:text-primary transition-colors">LI</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
