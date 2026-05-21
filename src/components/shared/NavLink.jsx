'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link
            className={`relative px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 block w-full lg:w-auto
                ${isActive
                    ? "text-[#082a5e] dark:text-white bg-base-200/50 lg:bg-transparent"
                    : "text-base-content/80 hover:text-[#082a5e] dark:hover:text-white hover:bg-base-200/60"
                }`}
            href={href}
        >
            {children}
            {/* Active Indicator Bar for Desktop Layout */}
            {isActive && (
                <span className="hidden lg:block absolute bottom-0 left-4 right-4 h-0.5 bg-[#082a5e] dark:bg-white rounded-full animate-fade-in" />
            )}
        </Link>
    );
};

export default NavLink;