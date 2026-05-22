import Image from 'next/image';
import userAvater from '@/assets/avater.webp';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export const metadata = {
 title: "Profile | IdeaVault"
}

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    });
    const user = session?.user;

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-36 pb-16 relative">

            {/* Clean Premium Profile Card (Responsive Width: Larger on LG screens) */}
            <div className="w-full max-w-md lg:max-w-2xl bg-base-100 border border-base-200 rounded-[32px] relative group transition-all duration-300 hover:border-base-300 mt-14">

                {/* Profile Picture perfectly aligned at the top-center border line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="p-1.5 rounded-full bg-base-100 border border-base-200 shadow-sm group-hover:scale-105 transition-transform duration-500 ease-out">
                        <div className="w-28 h-28 rounded-full overflow-hidden bg-base-300 relative">
                            <Image
                                className="object-cover transition-transform duration-700 group-hover:scale-105" src={user?.image || userAvater} alt={user?.name || "N/A"} width={100} height={100}
                            />
                        </div>
                    </div>
                </div>

                {/* Card Body content */}
                <div className="mt-15 p-8 sm:p-12 pt-20 flex flex-col items-center text-center">

                    {/* Information Grid */}
                    <div className="space-y-3 w-full mb-8">
                        <h2 className="text-2xl font-black text-[#082a5e] dark:text-white tracking-tight sm:text-3xl lg:text-4xl">
                            {user?.name || "N/A"}
                        </h2>

                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-base-200/50  rounded-xl max-w-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#39557e]/60 dark:text-white shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <span className="text-xs sm:text-sm lg:text-base font-medium text-[#39557e] dark:text-white truncate block">
                                {user?.email}
                            </span>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="w-full h-px bg-linear-to-r from-transparent via-base-400 to-transparent mb-8" />

                    {/* Action Button */}
                    <Link href="/profile/update" className="w-full max-w-xs block">
                        <button className="cursor-pointer w-full bg-[#082a5e] hover:bg-[#061f47] text-white font-bold h-12 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 active:scale-[0.99]">
                            Update Profile Settings
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;