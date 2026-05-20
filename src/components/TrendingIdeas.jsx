'use client'
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TrendingIdeas = ({ trendingIdeas = [] }) => {
    return (
        <section className="py-20 bg-linear-to-b from-transparent via-base-200/20 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Modern Header Concept */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-md">
                                Whats Hot Right Now
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#082a5e] tracking-tight">
                            Trending Innovation Hub
                        </h2>
                        <p className="text-sm text-base-content/60 max-w-xl">
                            Explore the most upvoted and highly anticipated startup mechanics built by creators worldwide this week.
                        </p>
                    </div>
                    <Button
                        variant="flat"
                        className="bg-[#082a5e]/5 text-[#082a5e] hover:bg-[#082a5e] hover:text-white font-bold rounded-xl transition-all self-start md:self-auto"
                    >
                        Explore All Trends
                    </Button>
                </div>

                {/* Dynamic Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Loop sample or mock data */}
                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-base-100 border border-base-200/80 rounded-3xl p-6 transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_20px_50px_rgba(245,158,11,0.05)] flex flex-col justify-between overflow-hidden"
                        >
                            {/* Dynamic Rank Badge - Theme Forest Style */}
                            <div className="absolute top-0 right-0 bg-linear-to-bl from-amber-500 to-orange-500 text-white font-black text-sm px-4 py-2 rounded-bl-2xl shadow-xs z-10">
                                #{index + 1}
                            </div>

                            <div className="space-y-4">
                                {/* Creator Meta */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-base-200 overflow-hidden border border-base-300">
                                        <Image width={100} height={100} src={`https://i.pravatar.cc/100?img=${index + 10}`} alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-base-content/80">Alex Carter</h4>
                                        <p className="text-[10px] text-base-content/40">2 hours ago</p>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold text-base-content group-hover:text-[#082a5e] transition-colors line-clamp-1">
                                        AI-Driven Micro-SaaS Ecosystem
                                    </h3>
                                    <p className="text-xs sm:text-sm text-base-content/60 line-clamp-2 min-h-10">
                                        Automating workflow bottlenecks for individual creators using specialized lightweight agent setups.
                                    </p>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex items-center gap-4 pt-2">
                                    <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold bg-amber-500/5 px-2.5 py-1 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 00.458 1.275l1.83 2.193a1 1 0 001.523-.04l.554-.693a2.425 2.425 0 00.074-2.822L9.333 13.5H16a2 2 0 002-2V9.412a2 2 0 00-.554-1.338l-2.06-2.133A2 2 0 0013.912 5.5H8.333a2 2 0 00-2 2v2.833z" /></svg>
                                        <span>1.2k Likes</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-base-content/50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                        <span>84 Comments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action */}
                            <div className="mt-6 pt-4 border-t border-base-200/60 flex items-center justify-between">
                                <div>
                                    <span className="text-[9px] uppercase font-bold text-base-content/30 block tracking-wider">Est. Cost</span>
                                    <span className="text-xs font-bold text-[#082a5e]">$3,500</span>
                                </div>
                                <Button size="sm" className="bg-base-200 hover:bg-[#082a5e] text-[#082a5e] hover:text-white font-bold rounded-lg transition-all text-xs">
                                    Inspect Blueprint
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrendingIdeas;