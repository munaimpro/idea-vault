import ProfileUpdateForm from '@/components/ProfileUpdateForm';

export const metadata = {
 title: "Profile | IdeaVault"
}

const ProfileUpdatePage = () => {

    return (
        <div className="min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative">

            {/* Main Central Settings Container (Vercel & Stripe Dashboard Inspired) */}
            <div className="w-full max-w-2xl bg-base-100 border border-base-200 rounded-[24px] p-6 sm:p-10 lg:p-12">

                {/* Section Header Text */}
                <div className="mb-8 pb-6 border-b border-base-200">
                    <h2 className="text-xl sm:text-2xl font-black text-[#082a5e] tracking-tight">
                        Update Your Profile
                    </h2>
                    <p className="text-xs sm:text-sm text-base-content/60 mt-1">
                        Adjust your system metadata parameters broadcasted to the network.
                    </p>
                </div>

                <div className="bg-transparent shadow-none border-none p-0">
                    {/* Profile Update Form */}
                    <ProfileUpdateForm></ProfileUpdateForm>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdatePage;