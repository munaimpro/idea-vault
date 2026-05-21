import IdeaList from '@/components/IdeaList';
import IdeaFilterBar from '@/components/IdeaFilterBar'; // নতুন কম্পোনেন্টটি ইমপোর্ট করুন
import Link from 'next/link';
import { Suspense } from 'react';

export const metadata = {
    title: "Ideas | IdeaVault"
}

// Next.js অ্যাপ রাউটারে searchParams প্রপস হিসেবে সরাসরি পাওয়া যায়
const IdeasPage = async ({ searchParams }) => {
    // searchParams রিজলভ করা (Next.js নিয়মানুযায়ী অবজেক্ট আকারে আনা)
    const resolvedParams = await searchParams;
    const search = resolvedParams?.search || '';
    const category = resolvedParams?.category || '';
    const startDate = resolvedParams?.startDate || '';
    const endDate = resolvedParams?.endDate || '';

    // কুয়েরি স্ট্রিং তৈরি করা
    const query = new URLSearchParams({
        search,
        category,
        startDate,
        endDate
    }).toString();

    // ফিল্টারসহ ডাইনামিক কুয়েরি রিকোয়েস্ট (প্রথমে কোনো কুয়েরি না থাকলে ডিফল্ট সব আইডিয়াই আসবে)
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/idea?${query}`, {
        cache: 'no-store' // ডাইনামিক ফিল্টারিং ডেটার জন্য ক্যাশ অফ রাখা নিরাপদ
    });
    const ideas = await response.json();
    console.log(ideas);

    return (
        <div className="min-h-screen bg-base-100 pb-20 pt-24 relative overflow-hidden">

            {/* Background overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-100 bg-[radial-gradient(ellipse_at_top,rgba(8,42,94,0.04),transparent_50%)] pointer-events-none" />

            {/* Page Header */}
            <div className="w-full border-b border-base-200/60 bg-base-200/20 backdrop-blur-sm py-12 md:py-16 mb-12">
                {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-6"> */}
                    <div className="space-y-3 max-w-xl px-4 sm:px-6 lg:px-8">
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

                    {/* Filter and Search Bar */}
                <div className="w-full relative px-4 sm:px-6 lg:px-8">
                        <Suspense fallback={<div className="h-11 w-full bg-base-200 animate-pulse rounded-xl" />}>
                            <IdeaFilterBar />
                        </Suspense>
                    </div>
                {/* </div> */}
            </div>

            {/* Page Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {ideas.length === 0 ? (
                    <div className="w-full py-20 text-center border-2 border-dashed border-base-200 rounded-3xl space-y-4">
                        <p className="font-medium text-base-content/50 text-sm">No idea available right now. You can <Link href={'/add-idea'} className="text-[#082a5e] underline">share</Link> some ideas</p>
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