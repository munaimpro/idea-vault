import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-base-100 text-base-content border-t border-base-200 mt-auto">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* Column 1: Brand & About */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href={'/'} className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#082a5e]">
                            <span className="p-2 bg-[#082a5e] dark:bg-white text-white dark:text-[#082a5e] rounded-xl shadow-sm text-sm font-black select-none">IV</span>
                            <span className="bg-linear-to-r from-[#082a5e] to-[#1e4ebd] bg-clip-text text-transparent dark:tex-white">IdeaVault</span>
                        </Link>
                        <p className="text-sm text-base-content/70 max-w-sm leading-relaxed">
                            IdeaVault is a next-generation hub for entrepreneurs, creators, and innovators to share, collaborate, and bring groundbreaking startup ideas to life.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" className="btn btn-ghost btn-circle btn-sm hover:bg-base-200 text-[#082a5e] hover:text-[#1e4ebd]" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                            <a href="#" className="btn btn-ghost btn-circle btn-sm hover:bg-base-200 text-[#082a5e] hover:text-[#1e4ebd]" aria-label="Twitter/X">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="btn btn-ghost btn-circle btn-sm hover:bg-base-200 text-[#082a5e] hover:text-[#1e4ebd]" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Platform Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#082a5e] dark:text-white">Platform</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/ideas" className="text-base-content/80 hover:text-[#082a5e] dark:hover:text-white transition-colors">Browse Ideas</Link></li>
                            <li><Link href="/categories" className="text-base-content/80 hover:text-[#082a5e] dark:hover:text-white transition-colors">Categories</Link></li>
                            <li><Link href="/add-idea" className="text-base-content/80 hover:text-[#082a5e] dark:hover:text-white transition-colors">Submit an Idea</Link></li>
                            <li><Link href="/" className="text-base-content/80 hover:text-[#082a5e] dark:hover:text-white transition-colors">Trending Ideas</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#082a5e] dark:text-white">Resources</h3>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/blog" className="text-base-content/80 hover:text-[#082a5e] dark:hover:text-white transition-colors">Startup Blog</Link></li>
                            <li><Link href="/guidelines" className="text-base-content/80 hover:text-[#082a5e] dark:hover:text-white transition-colors">Community Rules</Link></li>
                            <li><Link href="/faq" className="text-base-content/80 hover:text-[#082a5e] dark:hover:text-white transition-colors">Help & FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#082a5e] dark:text-white">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-base-content/80">
                            <li className="flex items-start gap-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#082a5e] dark:text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:support@ideavault.com" className="hover:text-[#082a5e] dark:hover:text-white transition-colors">support@ideavault.com</a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#082a5e] dark:text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Chittagong, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Footer: Copyright */}
            <div className="border-t border-base-200 bg-base-200/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-base-content/60">
                    <p>© {new Date().getFullYear()} IdeaVault. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-[#082a5e] dark:hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#082a5e] dark:hoover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;