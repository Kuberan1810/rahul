import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full relative overflow-hidden bg-white pt-16 pb-12 border-t border-gray-100 select-none">

            {/* Top Container: Heading - Full Width with Side Padding */}
            <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
                <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 tracking-tight max-w-3xl leading-[1.15]">
                    That’s it! Now it’s your turn to say hi.
                </h2>
            </div>

            {/* Main Section with Huge Edge-to-Edge "RAHUL" Watermark & Floating Footer Meta */}
            <div className="relative w-full px-6 sm:px-12 md:px-16 lg:px-24 mt-12 min-h-[300px] sm:min-h-[420px] flex flex-col justify-end">

                {/* Huge "RAHUL" Gradient Typography Watermark - Edge-to-Edge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                    <span
                        className="font-semibold tracking-normal leading-none uppercase bg-gradient-to-b from-[#D3D3D3] to-white bg-clip-text text-transparent text-[28vw] lg:text-[428px] whitespace-nowrap opacity-90 -ml-2 sm:-ml-4"
                        style={{ fontWeight: 600 }}
                    >
                        RAHUL
                    </span>
                </div>

                {/* Footer Right Metadata & Social Links */}
                <div className="relative z-10 flex flex-col items-end text-right space-y-2 pb-4 self-end ml-auto">
                    {/* Social Links */}
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-900 mb-1">
                        <span className="text-gray-700 font-medium mr-1">Get in touch:</span>

                        {/* Facebook Icon */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-900 hover:text-blue-600 transition-colors p-1"
                            aria-label="Facebook"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>

                        {/* Instagram Icon */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-900 hover:text-pink-600 transition-colors p-1"
                            aria-label="Instagram"
                        >
                            <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>

                        {/* LinkedIn Icon */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-900 hover:text-blue-700 transition-colors p-1"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                        </a>

                        {/* X Logo */}
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-900 hover:text-black transition-colors p-1"
                            aria-label="X"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>

                    {/* Copyright line */}
                    <p className="text-[11px] sm:text-xs text-gray-700 font-medium">
                        © 2026 Rahul Rajan. All rights reserved.
                    </p>

                    {/* Tagline */}
                    <p className="text-[11px] sm:text-xs text-gray-600 font-normal">
                        Designed with Purpose. Built with Passion.
                    </p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
