import IdeaList from '@/components/IdeaList';
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
    title: "Ideas | IdeaVault"
}

const IdeasPage = async () => {
    
    // Find all ideas
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea`)
    const ideas = await response.json();
    console.log(ideas);

    return (
        <div className="min-h-screen bg-base-100 pb-20 pt-24 relative overflow-hidden">

            {/* Background overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-100 bg-[radial-gradient(ellipse_at_top,rgba(8,42,94,0.04),transparent_50%)] pointer-events-none" />

            {/* 1. Page Title */}
            <div className="w-full border-b border-base-200/60 bg-base-200/20 backdrop-blur-sm py-12 md:py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#082a5e] bg-[#082a5e]/5 px-3 py-1 rounded-md">
                            Ecosystem Feed
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-[#082a5e] tracking-tight">
                            Explore Disruptive Concepts
                        </h1>
                        <p className="text-sm text-base-content/60 leading-relaxed">
                            Discover premium, community-validated startup blueprints posted by next-generation founders.
                        </p>
                    </div>

                    {/* Search Input */}
                    <div className="w-full md:max-w-xs relative">
                        <input
                            type="text"
                            placeholder="Search concepts, tags..."
                            className="w-full bg-base-100 hover:bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl h-11 pl-10 pr-4 text-sm transition-all shadow-sm"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3.5 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* 2. Page Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {ideas.length === 0 ? (
                    <div className="w-full py-20 text-center border-2 border-dashed border-base-200 rounded-3xl space-y-4">
                        <p className="font-medium text-base-content/50 text-sm">No idea available right now. You can <Link href={'/add-idea'}>share</Link> some ideas</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <Suspense fallback={<span className="text-gray-500 my-25 loading loading-bars loading-lg"></span>}>
                            <IdeaList ideas={ideas} />  
                        </Suspense>
                    </div>
                )}
            </div>

        </div>
    );
};

export default IdeasPage;