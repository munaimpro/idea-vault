'use client'
import { ArrowChevronRight } from "@gravity-ui/icons";
import { Card, CardBody, Button } from "@heroui/react";

const features = [
    {
        title: "AI-Powered Validation Engine",
        desc: "Instantly stress-test your architecture against real-world market vectors and programmatic bottlenecks.",
        badge: "Core Latency",
        gradient: "from-blue-500/10 to-[#082a5e]/5"
    },
    {
        title: "Synchronized Tech Stacks",
        desc: "Get automatically generated ecosystem configurations matching Next.js, Laravel, or hardware architectures.",
        badge: "Automated",
        gradient: "from-emerald-500/10 to-teal-500/5"
    },
    {
        title: "Granular Unit Economics",
        desc: "Deep-dive into cost analysis frameworks, programmatic cloud spend estimates, and micro-SaaS pricing layers.",
        badge: "Financials",
        gradient: "from-violet-500/10 to-fuchsia-500/5"
    }
];

const Features = () => {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#082a5e] dark:text-white tracking-tight">
                        Engineered for High-Velocity Founders
                    </h2>
                    <p className="text-sm text-base-content/60">
                        Stop guessing validation patterns. Leverage structural tools built to transform abstract systems into absolute production code.
                    </p>
                </div>

                {/* Section Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {features.map((feat, index) => (
                        <Card
                            key={index}
                            className="group relative bg-base-100 border border-base-200/80 rounded-3xl transition-all duration-300 hover:border-[#082a5e]/30 shadow-sm hover:shadow-[0_20px_45px_rgba(8,42,94,0.04)]"
                        >
                            <div className="p-8 flex flex-col justify-between items-start gap-6 min-h-64 relative">
                                <div className={`absolute inset-0 bg-linear-to-br ${feat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                                <div className="space-y-4">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-base-content/50 bg-base-200/60 dark:bg-dark-800 px-2.5 py-1 rounded-md">
                                        {feat.badge}
                                    </span>
                                    <h3 className="text-[#082a5e] dark:text-white text-xl font-bold tracking-tight">
                                        {feat.title}
                                    </h3>
                                    <p className="text-sm text-base-content/60 leading-relaxed">
                                        {feat.desc}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;