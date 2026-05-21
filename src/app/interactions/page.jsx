import InteractedIdeaList from '@/components/MyIdeaList';
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import { Suspense } from 'react';

export const metadata = {
 title: "Interations | IdeaVault"
}

const InteractionsPage = async () => {

    // Getting user id from the session
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user
    console.log(user);
    const userId = user?.id;
    console.log(userId);
    
    // Getting Token
    const { data: tokenData } = await authClient.token();
    console.log(tokenData);

    // Find ideas posted by the session user
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/commented-idea/${userId}`)
    const ideas = await response.json();
    console.log(ideas);

    return (
        <div className="min-h-screen bg-base-100 pb-24 pt-24 relative overflow-hidden">

            {/* Background Overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-100 bg-[radial-gradient(ellipse_at_top,rgba(8,42,94,0.05),transparent_50%)] pointer-events-none" />

            {/* Page Header */}
            <div className="w-full border-b border-base-200/60 bg-base-200/20 backdrop-blur-sm py-12 md:py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                    {/* Left Meta Side */}
                    <div className="space-y-3 max-w-xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#082a5e] dark:text-white bg-[#082a5e]/5 px-3 py-1 rounded-md">
                            Engagement Hub
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-black text-[#082a5e] dark:text-white tracking-tight">
                            My Interactions
                        </h1>
                        <p className="text-sm text-base-content/60 leading-relaxed">
                            Review and track all the innovative concepts you have participated in. Keep up with discussions, feedback, and updates on shared ideas.
                        </p>
                    </div>

                    {/* Right Meta Side */}
                    <div className="flex items-center gap-4 sm:gap-6 bg-base-100 p-4 rounded-2xl border border-base-200/80 shadow-sm self-start lg:self-auto">
                        <div className="px-2">
                            <p className="text-[10px] uppercase font-bold text-base-content/30 tracking-widest mb-0.5">Commented On</p>
                            <p className="text-2xl font-black text-[#082a5e] dark:text-white">{ideas.length} {ideas.length === 1 ? 'Idea' : 'Ideas'}</p>
                        </div>
                        <div className="w-px h-10 bg-base-200" />
                        <div className="px-2">
                            <p className="text-[10px] uppercase font-bold text-base-content/30 tracking-widest mb-0.5">Activity Type</p>
                            <p className="text-md font-bold text-[#082a5e] dark:text-white bg-[#082a5e]/5 px-2.5 py-1 rounded-lg mt-0.5">Discussions</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Page Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {ideas.length > 0 ? (
                    <div className="w-full py-20 text-center border-2 border-dashed border-base-200 rounded-3xl space-y-3">
                        <p className="font-medium text-base-content/50 text-sm">No interactions found. You have not joined any discussions or left comments on any ideas yet.</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <Suspense fallback={<span className="text-gray-500 my-25 loading loading-bars loading-lg"></span>}>
                            <InteractedIdeaList ideas={ideas} />
                        </Suspense>
                    </div>
                )}
            </div>

        </div>
    );
};

export default InteractionsPage;