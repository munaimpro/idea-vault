import SigninForm from '@/components/SigninForm';
import Link from 'next/link';

export const metadata = {
    title: "Login | IdeaVault"
}

const SigninPage = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-12 relative overflow-hidden">

            {/* Background Aesthetic Blur Blobs */}
            <div className="absolute top-1/4 right-1/12 w-80 h-80 bg-[#082a5e]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/12 w-96 h-96 bg-[#1e4ebd]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Main Container Card */}
            <div className="w-full max-w-5xl bg-base-100/60 backdrop-blur-xl border border-base-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[650px]">

                {/* Left Side: Dynamic Interactive HeroUI Form */}
                <div className="col-span-1 lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="bg-transparent shadow-none border-none p-0">

                        {/* Header Text */}
                        <div className="mb-6 space-y-1 mx-1">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082a5e] dark:text-wite tracking-tight">
                                Welcome Back
                            </h2>
                            <p className="text-xs sm:text-sm text-base-content/60">
                                New to the IdeaVault? <Link href="/signup" className="text-[#082a5e] dark:text-white font-semibold hover:underline">Create an Account</Link>
                            </p>
                        </div>

                        {/* Signin Form */}
                        <SigninForm></SigninForm>
                    </div>
                </div>

                {/* Right Side: Brand Pitch & Aesthetics (Flipped to Right on Desktop via ordering) */}
                <div className="hidden lg:flex lg:col-span-5 bg-linear-to-br from-[#082a5e] to-[#123e7f] p-12 flex-col justify-between text-white relative lg:order-last">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)] pointer-events-none" />

                    {/* Brand Identity */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-white text-[#082a5e] font-black flex items-center justify-center rounded-xl text-xs">
                            IV
                        </div>
                        <span className="font-bold tracking-tight text-lg">IdeaVault</span>
                    </div>

                    {/* Pitching Content Optimized for Returning Founders */}
                    <div className="space-y-4 my-auto">
                        <span className="text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full text-emerald-300">
                            Welcome Back
                        </span>
                        <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                            Track and scale your business visions.
                        </h2>
                        <p className="text-sm text-white/70 leading-relaxed">
                            Log back in to review community validation, manage your active concepts, and catch up with global startup trends.
                        </p>
                    </div>

                    {/* Micro Footer */}
                    <p className="text-xs text-white/50">
                        © {new Date().getFullYear()} MediaVault Inc.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SigninPage;