import React from 'react';
import Image from 'next/image';
import IdeaComment from '@/components/IdeaComment';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata = {
    title: "Idea Details | IdeaVault"
}

const IdeaDetailsPage = async ({ params }) => {
    const { ideaId } = await params;
    console.log("Idea id: ", ideaId);

    // Get Token
    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    // Find idea details
    const ideaResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea/${ideaId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const idea = await ideaResponse.json();
    const {_id, userName, title, shortDescription, detailedDescription, createdAt, category, imageURL, estimatedBudget, tags, targetAudience } = idea;
    console.log("Idea details", idea);

    // Find all comment for this idea
    const commentResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comment/${ideaId}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const comments = await commentResponse.json();
    console.log("Comment for this idea: ", comments);

    // Find Session User
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    const currentUserId = user?.id;
    const currentUserName = user?.name;
    console.log('Current User id: ', currentUserId);
    console.log('Current User name: ', currentUserName);

    return (
        <div className="min-h-screen bg-base-100 pb-24 pt-24 relative overflow-hidden">

            {/* Background Styles */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#082a5e]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1e4ebd]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Page Header */}
            <div className="w-full border-b border-base-200/60 bg-base-200/20 backdrop-blur-sm py-12 md:py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#082a5e] px-3 py-1 rounded-full">
                                {category}
                            </span>
                            <span className="text-xs font-medium text-base-content/40">
                                Broadcasted on {new Date(createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#082a5e] tracking-tight max-w-4xl leading-tight">
                            {title}
                        </h1>
                        <p className="text-sm sm:text-base text-base-content/70 font-medium max-w-3xl leading-relaxed">
                            {shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Left Side: Idea Details */}
                <div className="lg:col-span-8 space-y-8">

                    {/* Hero Image Section */}
                    <div className="w-full h-64 sm:h-96 bg-base-200 rounded-3xl overflow-hidden border border-base-200 shadow-sm relative group">
                        <Image
                            src={imageURL}
                            alt={title}
                            width={1200}
                            height={600}
                            priority
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-white flex items-center gap-2 text-sm font-semibold">
                            {idea.likes} Endorsements
                        </div>
                    </div>

                    {/* Problem & Solution Panels */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-base-200/40 border border-base-200 p-6 rounded-2xl space-y-3">
                            <div className="flex items-center gap-2 text-error font-bold text-xs uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                                The Problem Statement
                            </div>
                            <p className="text-sm text-base-content/80 leading-relaxed font-medium">
                                {idea.problemStatement}
                            </p>
                        </div>

                        <div className="bg-base-200/40 border border-base-200 p-6 rounded-2xl space-y-3">
                            <div className="flex items-center gap-2 text-success font-bold text-xs uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-success"></span>
                                Proposed Solution
                            </div>
                            <p className="text-sm text-base-content/80 leading-relaxed font-medium">
                                {idea.proposedSolution}
                            </p>
                        </div>
                    </div>

                    {/* Detail Description */}
                    <div className="bg-base-100 border border-base-200 p-6 sm:p-8 rounded-2xl space-y-4">
                        <h3 className="text-lg font-bold text-[#082a5e] tracking-tight">Full Narrative & Architecture</h3>
                        <p className="text-sm text-base-content/70 leading-relaxed whitespace-pre-line">
                            {detailedDescription}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                        <h4 className="text-xs font-bold text-base-content/40 uppercase tracking-widest">Discovery Tags</h4>
                        <div className="flex flex-wrap gap-2">
                        {Array.isArray(idea.tags) &&
                            idea.tags.map((tag, tag_id) => (
                                <span
                                    key={tag_id} className="text-xs font-semibold text-[#082a5e] bg-[#082a5e]/5 px-3 py-1 rounded-xl hover:bg-[#082a5e]/10 transition-colors cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Comment Box */}
                    <IdeaComment comments={comments} currentUserId={currentUserId} currentUserName={currentUserName} ideaId={_id}></IdeaComment>
                </div>

                {/* Right Side: Metadata */}
                <div className="lg:col-span-4 lg:sticky lg:top-24 bg-base-100 border border-base-200 rounded-3xl p-6 shadow-sm space-y-6">
                    <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/30 block mb-1">Target Capitalization</span>
                        <h3 className="text-3xl font-black text-[#082a5e]">
                            ${estimatedBudget} <span className="text-xs font-bold text-base-content/40 uppercase tracking-normal">USD</span>
                        </h3>
                    </div>

                    <div className="h-px bg-base-200" />

                    <div className="space-y-4">
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/30 block mb-1">Target Audience</span>
                            <p className="text-sm font-bold text-base-content/80">{targetAudience}</p>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/30 block mb-1">Concept Architecture</span>
                            <p className="text-sm font-bold text-base-content/80">{category} Framework</p>
                        </div>
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-base-content/30 block mb-1">Originator Identity</span>
                            <div className="flex items-center gap-2 pt-1">
                                <div className="w-6 h-6 rounded-full bg-[#082a5e] text-white flex items-center justify-center font-bold text-[10px]">
                                    {userName?.charAt(0) || 'U'}
                                </div>
                                <span className="text-sm font-bold text-base-content/70">{idea.userName}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default IdeaDetailsPage;