'use client';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden pt-24 pb-12 mt-20">

            {/* Background Aesthetic Elements */}
            <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-[#082a5e]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#1e4ebd]/5 rounded-full blur-3xl" />

            <div className="text-center max-w-lg space-y-8 relative z-10">

                {/* Creative 404 Identity */}
                <div className="relative inline-block select-none animate-bounce duration-1000">
                    <h1 className="text-9xl font-black tracking-tighter bg-linear-to-b from-[#082a5e] to-[#1e4ebd] bg-clip-text text-transparent opacity-90">
                        404
                    </h1>
                    {/* Glowing Accent Badge */}
                    <span className="absolute -top-2 -right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider shadow-md shadow-emerald-500/20">
                        Lost Idea
                    </span>
                </div>

                {/* Engaging Message */}
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082a5e] tracking-tight">
                        This concept does not exist yet.
                    </h2>
                    <p className="text-sm sm:text-base text-base-content/60 leading-relaxed max-w-md mx-auto">
                        The startup idea or page you are looking for might have been archived, renamed, or not available.
                    </p>
                </div>

                {/* Interactive Glassmorphism Map/Card */}
                <div className="p-6 bg-base-200/40 backdrop-blur-md border border-base-200/60 rounded-3xl shadow-sm text-left space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#082a5e]/70">Suggested Operations</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold">
                        <Link href="/ideas" className="p-3 bg-base-100 hover:bg-[#082a5e]/5 border border-base-200 rounded-xl flex items-center gap-2 text-base-content/80 hover:text-[#082a5e] transition-all">
                            Explore Other Ideas
                        </Link>
                        <Link href="/add-idea" className="p-3 bg-base-100 hover:bg-[#082a5e]/5 border border-base-200 rounded-xl flex items-center gap-2 text-base-content/80 hover:text-[#082a5e] transition-all">
                            Post This as an Idea
                        </Link>
                    </div>
                </div>

                {/* Back to Safety CTA Button */}
                <div className="pt-4">
                    <Link
                        href="/"
                        className="btn bg-[#082a5e] hover:bg-[#051c40] text-white border-none rounded-2xl px-8 shadow-lg shadow-[#082a5e]/20 transition-all duration-300 font-bold group inline-flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NotFound;