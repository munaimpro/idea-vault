'use client'
import { Card } from "@heroui/react";
import Link from "next/link";

// Category Data
const categories = [
    {
        id: "saas",
        title: "SaaS",
        count: 24,
        description: "B2B infrastructure, micro-SaaS utilities, and workflow automation engines.",
        icon: (
            <svg className="w-6 h-6 text-[#082a5e] dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
            </svg>
        ),
    },
    {
        id: "fintech",
        title: "FinTech",
        count: 12,
        description: "Decentralized payment protocols, micro-accounting apps, and secure ledgers.",
        icon: (
            <svg className="w-6 h-6 text-[#082a5e] dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        id: "tech",
        title: "Tech",
        count: 19,
        description: "Hardware mechanics, IoT networks, system tools, and core engineering solutions.",
        icon: (
            <svg className="w-6 h-6 text-[#082a5e] dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21l3.5-2.5L16 21l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: "edtech",
        title: "EdTech",
        count: 15,
        description: "Interactive skill platform environments, curriculum management, and smart grading.",
        icon: (
            <svg className="w-6 h-6 text-[#082a5e] dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        id: "ai",
        title: "AI",
        count: 18,
        description: "Intelligent autonomous agents, LLM integrations, and custom generative pipelines.",
        icon: (
            <svg className="w-6 h-6 text-[#082a5e] dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.483-4.725L9.813 15.904z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L4 12l5.813-3.904" />
            </svg>
        ),
    }
];

const FeaturedCategories = () => {
    return (
        <div className="py-20 bg-linear-to-b from-transparent via-base-200/10 to-transparent border-t border-base-200/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                                Structural Taxonomy
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#082a5e] dark:text-white tracking-tight">
                            Featured Categories
                        </h2>
                        <p className="text-sm text-base-content/60 max-w-xl">
                            Filter the globally synchronized structural database by target market vectors and micro-niches.
                        </p>
                    </div>
                </div>

                {/* Section Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <Link key={category.id} href={`/idea?category=${category.id}`} className="group block">
                            <Card 
                                isPressable
                                className="w-full h-full bg-base-100 dark:bg-zinc-900/40 border border-base-200 dark:border-zinc-800 rounded-3xl transition-all duration-300 group-hover:border-[#082a5e]/30 dark:group-hover:border-blue-500/30 shadow-xs group-hover:shadow-[0_15px_35px_rgba(8,42,94,0.03)] dark:group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] overflow-hidden">
                                
                                <div className="p-6 flex flex-col justify-between items-start gap-4">
                                    {/* Icon & Count Badge */}
                                    <div className="w-full flex items-center justify-between">
                                        <div className="p-3 bg-[#082a5e]/5 dark:bg-blue-950/40 rounded-2xl group-hover:bg-[#082a5e] dark:group-hover:bg-blue-600 transition-colors duration-300">
                                            {/* Injecting Icon and making it white on hover */}
                                            <div className="group-hover:text-white transition-colors duration-300">
                                                {category.icon}
                                            </div>
                                        </div>
                                        <span className="text-xs font-bold text-base-content/40 bg-base-200 dark:bg-zinc-800 px-2.5 py-1 rounded-lg group-hover:text-[#082a5e] dark:group-hover:text-blue-400 transition-colors">
                                            {category.count} Blueprints
                                        </span>
                                    </div>

                                    {/* Descriptions */}
                                    <div className="space-y-1.5 text-left">
                                        <h3 className="text-lg font-bold text-base-content group-hover:text-[#082a5e] dark:group-hover:text-blue-400 transition-colors tracking-tight">
                                            {category.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-base-content/60 leading-relaxed line-clamp-2 min-h-10">
                                            {category.description}
                                        </p>
                                    </div>

                                    <div className="w-full flex items-center justify-end text-[#082a5e]/40 dark:text-zinc-600 group-hover:text-[#082a5e] dark:group-hover:text-blue-400 font-bold text-xs gap-1 transition-colors mt-2">
                                        <span>Explore Vector</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategories;