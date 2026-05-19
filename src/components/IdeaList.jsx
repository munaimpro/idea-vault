"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const IdeaList = ({ ideas }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ideas.map((idea) => (
                <div
                    key={idea._id}
                    className="group relative bg-base-100 border border-base-200/80 rounded-3xl transition-all duration-300 hover:border-[#082a5e]/30 shadow-sm hover:shadow-[0_20px_45px_rgba(8,42,94,0.04)] flex flex-col justify-between overflow-hidden"
                >
                    {/* Hover Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-[#082a5e] to-[#1e4ebd] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <div>
                        {/* 1. Card Image */}
                        <div className="h-48 w-full bg-base-200 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                            {/* Fallback pattern if image is missing */}
                            <Image
                                src={idea.imageURL || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop"}
                                alt={idea.title}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Dark Vignette Overlay for Text Legibility */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20" />

                            {/* Idea Category */}
                            <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-[#082a5e]/90 backdrop-blur-md px-3 py-1 rounded-full">
                                {idea.category}
                            </span>

                            {/* Idea Liks */}
                            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold border border-white/10 group-hover:bg-amber-500 group-hover:border-transparent transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 00.458 1.275l1.83 2.193a1 1 0 001.523-.04l.554-.693a2.425 2.425 0 00.074-2.822L9.333 13.5H16a2 2 0 002-2V9.412a2 2 0 00-.554-1.338l-2.06-2.133A2 2 0 0013.912 5.5H8.333a2 2 0 00-2 2v2.833z" />
                                </svg>
                                <span>{idea.likes}</span>
                            </div>
                        </div>

                        {/* 2. Card Content*/}
                        <div className="p-6 pb-2 space-y-2">
                            <h3 className="text-lg font-bold text-base-content group-hover:text-[#082a5e] transition-colors tracking-tight line-clamp-1">
                                {idea.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-base-content/60 leading-relaxed line-clamp-2 min-h-10">
                                {idea.shortDescription}
                            </p>

                            {/* Meta Tags List */}
                            <div className="flex flex-wrap gap-1.5 pt-2">
                                {Array.isArray(idea.tags) &&
                                    idea.tags.map((tag, tag_id) => (
                                        <span
                                            key={tag_id}
                                            className="text-[10px] font-medium text-base-content/40 bg-base-200/60 px-2 py-0.5 rounded-md"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* 3. Budget & Button */}
                    <div className="p-6 pt-0 mt-2 space-y-4">
                        <div className="pt-4 border-t border-base-200/60 grid grid-cols-2 gap-2 text-left">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-base-content/30 tracking-wider">Est. Budget</p>
                                <p className="text-xs font-bold text-[#082a5e]">{idea.estimatedBudget}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] uppercase font-bold text-base-content/30 tracking-wider">Founder</p>
                                <p className="text-xs font-semibold text-base-content/70 line-clamp-1">{idea?.userName || "Not Available"}</p>
                            </div>
                        </div>

                        {/* Card Button */}
                        <Link href={`/ideas/${idea._id}`} className="block w-full">
                            <Button
                                className="w-full bg-base-200 hover:bg-[#082a5e] text-[#082a5e] hover:text-white font-bold h-11 rounded-xl transition-all duration-300 text-xs flex items-center justify-center gap-1.5 border border-transparent group/btn"
                            >
                                View Details
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IdeaList;