import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface pt-20 pb-8 mt-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary">
                <span className="text-foreground">MeCare</span>
              </div>
            </Link>
            <p className="text-sm text-foreground/80 leading-relaxed max-w-xs">
              MeCare is a unified platform for providing interactive medical support and proactive healthcare to everyone around the world.
            </p>
            <div className="space-y-2 mt-6 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">A:</span> Pratap Nagar, Udaipur 313001
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">P:</span> +91 987654321
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">E:</span> divyashaktipal@gmail.com
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
              <li><Link href="blogs" className="hover:text-primary transition-colors">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-foreground text-lg">Useful Links</h3>
            <ul className="space-y-4 text-sm text-foreground/80 font-medium">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Services</Link></li>
              {/* <li><Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li> */}
              {/* <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li> */}
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
                <div className="w-6 h-6 rounded"><img src="./googlePlayIcon.png" alt="Google Play" /></div>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-surface/70">GET IT ON</div>
                  <div className="font-bold text-sm leading-tight">Google Play</div>
                </div>
              </button>
              <button className="bg-foreground text-surface px-4 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-foreground/80 transition-colors">
                <div className="w-6 h-6 rounded"><img src="./applePlaystoreIcon.png" alt="App Store" /></div>
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
            <Link href="#" className="hover:text-primary transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#525B5A" />
            </svg>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.93945 5.001C6.93919 5.53143 6.72822 6.04004 6.35296 6.41492C5.9777 6.78981 5.46889 7.00027 4.93845 7C4.40802 6.99974 3.89942 6.78877 3.52453 6.41351C3.14965 6.03825 2.93919 5.52943 2.93945 4.999C2.93972 4.46857 3.15069 3.95996 3.52595 3.58508C3.90121 3.21019 4.41002 2.99974 4.94045 3C5.47089 3.00027 5.97949 3.21123 6.35437 3.58649C6.72926 3.96175 6.93972 4.47057 6.93945 5.001ZM6.99945 8.481H2.99945V21.001H6.99945V8.481ZM13.3195 8.481H9.33945V21.001H13.2795V14.431C13.2795 10.771 18.0495 10.431 18.0495 14.431V21.001H21.9995V13.071C21.9995 6.901 14.9395 7.131 13.2795 10.161L13.3195 8.481Z" fill="#525B5A" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="#525B5A" />
            </svg>
            </Link>
            <Link href="#" className="hover:text-primary transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" fill="#525B5A" />
            </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
