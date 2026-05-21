'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

const IdeaFilterBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const handleFilterChange = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        startTransition(() => {
            router.push(`/ideas?${params.toString()}`, { scroll: false });
        });
    };

    return (
        <div className="w-full flex flex-col gap-4 items-center">
            <div className="flex gap-4 w-full">
                {/* Search Input */}
                <div className="w-full relative">
                    <input
                        type="text"
                        defaultValue={searchParams.get('search') || ''}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                        placeholder="Search concepts..."
                        className="w-full bg-base-100 hover:bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl h-11 pl-10 pr-4 text-sm transition-all shadow-sm"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3.5 top-3.5 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Category Filter */}
                <div className="w-full">
                    <select
                        defaultValue={searchParams.get('category') || ''}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="w-full bg-base-100 hover:bg-base-200/50 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl h-11 px-3 text-sm transition-all shadow-sm"
                    >
                        <option value="">All Categories</option>
                        <option value="saas">SaaS</option>
                        <option value="fintech">FinTech</option>
                        <option value="ai">AI</option>
                        <option value="tech">Tech</option>
                        <option value="edtech">EdTech</option>
                    </select>
                </div>
            </div>

            {/* Date Range Filters */}
            <div className="w-full flex items-center gap-2">
                <input type="date" defaultValue={searchParams.get('startDate') || ''} onChange={(e) => handleFilterChange('startDate', e.target.value)} className="w-full bg-base-100 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl h-11 px-3 text-sm transition-all shadow-sm text-base-content/70"/>
                <span className="text-xs text-base-content/40 font-bold">to</span>
                <input
                    type="date" defaultValue={searchParams.get('endDate') || ''}
                    onChange={(event) => handleFilterChange('endDate', event.target.value)} className="w-full bg-base-100 border border-base-200 focus:border-[#082a5e] focus:outline-none rounded-xl h-11 px-3 text-sm transition-all shadow-sm text-base-content/70"/>
            </div>

            {isPending && <span className="loading loading-spinner loading-xs text-base-content/40"></span>}
        </div>
    );
};

export default IdeaFilterBar;