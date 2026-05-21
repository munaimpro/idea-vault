import Link from "next/link";
import TrendingIdeaItems from "./TrendingIdeaItems";

const TrendingIdeas = async ({ideas}) => {

    return (
        <div className="py-20 bg-linear-to-b from-transparent via-base-200/20 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-2.5 py-1 rounded-md">
                                Whats Hot Right Now
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#082a5e] tracking-tight">
                            Trending Ideas
                        </h2>
                        <p className="text-sm text-base-content/60 max-w-xl">
                            Explore the most upvoted and highly anticipated startup mechanics built by creators worldwide this week.
                        </p>
                    </div>
                    <Link href={'/idea'} className="py-2 px-4 bg-[#082a5e]/5 text-[#082a5e] hover:bg-[#082a5e] dark:bg-[#082a5e]/5 dark:text-white dark:hover:text-white font-bold rounded-xl transition-all self-start md:self-auto"> Explore All Trends </Link>
                </div>

                {/* Section Content */}
                <TrendingIdeaItems ideas={ideas}></TrendingIdeaItems>

            </div>
        </div>
    );
};

export default TrendingIdeas;