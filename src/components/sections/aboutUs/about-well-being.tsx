export function AboutWellBeing() {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Committed to Your Well-Being<br />at Every Stage</h2>
          <p className="text-muted max-w-2xl mx-auto">We provide comprehensive care and support tailored to your unique healthcare needs.</p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-4xl overflow-hidden group shadow-xl mb-12">
          <img src="./servicesImg1.png" alt="Glowing Heart Hands" className="w-full aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center transition-colors group-hover:bg-black/30">
            <button className="w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
              <span className="ml-1 text-2xl">▶</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#E6F8F6] rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"><svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7 16.4537C6.75466 16.3683 6.52337 16.2756 6.31023 16.1748C5.97723 16.0175 5.58741 15.7938 5.25489 15.4688C4.91926 15.1407 4.5 14.5613 4.5 13.75C4.5 12.9387 4.91926 12.3593 5.25489 12.0312C5.58741 11.7062 5.97723 11.4826 6.31023 11.3251C6.98572 11.0057 7.84346 10.7675 8.75316 10.5856C10.6035 10.2155 13.0762 10 15.75 10C18.4237 10 20.8965 10.2155 22.7469 10.5856C23.6565 10.7675 24.5143 11.0057 25.1898 11.3251C25.5228 11.4826 25.9127 11.7062 26.2451 12.0312C26.5807 12.3593 27 12.9387 27 13.75C27 14.5613 26.5807 15.1407 26.2451 15.4688C25.9127 15.7938 25.5228 16.0175 25.1898 16.1748C24.9767 16.2756 24.7453 16.3683 24.5 16.4538V23.75C24.5 24.5183 24.0648 25.1258 23.5561 25.5587C23.0439 25.9947 22.3578 26.3451 21.5917 26.6208C20.0518 27.1752 17.9864 27.5 15.75 27.5C13.5136 27.5 11.4481 27.1752 9.90818 26.6208C9.14222 26.3451 8.45613 25.9947 7.9438 25.5587C7.43523 25.1258 7 24.5183 7 23.75V16.4537ZM23.6652 14.7552L23.6693 14.7539C24.5912 14.4637 25.125 14.1193 25.125 13.75C25.125 13.3807 24.5912 13.0363 23.6693 12.746L23.6652 12.7448C22.0017 12.2219 19.0784 11.875 15.75 11.875C12.4216 11.875 9.49836 12.2219 7.83477 12.7448L7.83069 12.746C6.90886 13.0363 6.375 13.3807 6.375 13.75C6.375 14.1193 6.90886 14.4637 7.83069 14.7539L7.83477 14.7552C9.49836 15.2781 12.4216 15.6249 15.75 15.6249C19.0784 15.6249 22.0017 15.2781 23.6652 14.7552Z" fill="#DF7E7E" />
              <path d="M17.6909 2.36893C17.9212 1.90828 18.5786 1.90828 18.8089 2.36893C19.4285 3.60818 19.6426 3.82225 20.8819 4.44188C21.3425 4.67221 21.3425 5.32958 20.8819 5.55991C19.6426 6.17954 19.4285 6.39361 18.8089 7.63286C18.5786 8.09351 17.9212 8.09351 17.6909 7.63286C17.0713 6.39361 16.8572 6.17954 15.6179 5.55991C15.1573 5.32958 15.1573 4.67221 15.6179 4.44188C16.8572 3.82225 17.0713 3.60818 17.6909 2.36893Z" fill="#DF7E7E" />
              <path d="M11.4409 4.86894C11.6712 4.40827 12.3286 4.40827 12.5589 4.86894C12.7768 5.30463 12.9462 5.47404 13.3819 5.69188C13.8425 5.92221 13.8425 6.57958 13.3819 6.80992C12.9462 7.02777 12.7768 7.19718 12.5589 7.63287C12.3286 8.09352 11.6712 8.09352 11.4409 7.63287C11.223 7.19718 11.0536 7.02777 10.6179 6.80992C10.1573 6.57958 10.1573 5.92221 10.6179 5.69188C11.0536 5.47404 11.223 5.30463 11.4409 4.86894Z" fill="#DF7E7E" />
            </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Resident Care</h4>
            <p className="text-sm text-muted">A dedicated professional team always available to provide you personalized treatment.</p>
          </div>

          <div className="bg-[#FFF0EF] rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.0625 17.5C4.0625 16.9822 4.48223 16.5625 5 16.5625H8.75C8.90798 16.5625 9.0634 16.6024 9.20183 16.6786L12.1158 18.2814H13.125C14.673 18.2814 15.9555 19.0731 16.6431 20.1305L12.5 22.1366L9.04646 20.9854L8.45353 22.7642L12.2035 24.0142C12.396 24.0783 12.604 24.0783 12.7965 24.0142L18.4956 21.2247V19.513L21.2164 18.606C22.9431 18.0305 24.8191 18.9006 25.4951 20.5905L25.8696 21.5268C26.0507 21.9795 25.8545 22.4955 25.4184 22.7135L14.1684 28.3385C13.9594 28.443 13.7188 28.4657 13.4939 28.4021L4.7448 25.927C4.34116 25.8128 4.0625 25.4444 4.0625 25.0249V17.5Z" fill="#DF7E7E" />
              <path d="M14.6679 1.95006C15.0496 2.11468 15.3707 2.30958 15.6235 2.48906C15.8763 2.30958 16.1974 2.11468 16.5791 1.95007C17.6292 1.49713 19.1155 1.28972 20.7848 2.18999C22.9029 3.33233 23.8764 6.01466 23.2439 8.69233C22.5984 11.4254 20.3201 14.1692 15.9551 15.8126L15.6235 15.9375L15.2919 15.8126C10.9269 14.1692 8.64862 11.4254 8.00302 8.69233C7.3705 6.01467 8.34398 3.33233 10.4621 2.18999C12.1314 1.28971 13.6178 1.49713 14.6679 1.95006Z" fill="#DF7E7E" />
            </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Quality Healthcare</h4>
            <p className="text-sm text-muted">A dedicated professional team always available to provide you personalized treatment.</p>
          </div>

          <div className="bg-[#FFF9E6] rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.0625 17.5C4.0625 16.9822 4.48223 16.5625 5 16.5625H8.75C8.90798 16.5625 9.0634 16.6024 9.20183 16.6786L12.1158 18.2814H13.125C14.673 18.2814 15.9555 19.0731 16.6431 20.1305L12.5 22.1366L9.04646 20.9854L8.45353 22.7642L12.2035 24.0142C12.396 24.0783 12.604 24.0783 12.7965 24.0142L18.4956 21.2247V19.513L21.2164 18.606C22.9431 18.0305 24.8191 18.9006 25.4951 20.5905L25.8696 21.5268C26.0507 21.9795 25.8545 22.4955 25.4184 22.7135L14.1684 28.3385C13.9594 28.443 13.7188 28.4657 13.4939 28.4021L4.7448 25.927C4.34116 25.8128 4.0625 25.4444 4.0625 25.0249V17.5Z" fill="#DF7E7E" />
              <path d="M14.6679 1.95006C15.0496 2.11468 15.3707 2.30958 15.6235 2.48906C15.8763 2.30958 16.1974 2.11468 16.5791 1.95007C17.6292 1.49713 19.1155 1.28972 20.7848 2.18999C22.9029 3.33233 23.8764 6.01466 23.2439 8.69233C22.5984 11.4254 20.3201 14.1692 15.9551 15.8126L15.6235 15.9375L15.2919 15.8126C10.9269 14.1692 8.64862 11.4254 8.00302 8.69233C7.3705 6.01467 8.34398 3.33233 10.4621 2.18999C12.1314 1.28971 13.6178 1.49713 14.6679 1.95006Z" fill="#DF7E7E" />
            </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
            <p className="text-sm text-muted">A dedicated professional team always available to provide you personalized treatment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
