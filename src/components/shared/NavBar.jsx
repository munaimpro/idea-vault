'use client';
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const NavBar = () => {
    const links = (
        <>
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink href={'/ideas'}>Ideas</NavLink></li>
            <li><NavLink href={'/add-idea'}>Add Idea</NavLink></li>
            <li><NavLink href={'/my-ideas'}>My Ideas</NavLink></li>
            <li><NavLink href={'/interactions'}>My Interactions</NavLink></li>

            {/* Dropdown Link */}
            <li className="dropdown dropdown-end lg:dropdown-hover">
                <div tabIndex={0} role="button" className="flex items-center gap-1 text-[#082a5e] text-[15px] font-medium px-4 py-2 hover:bg-base-200/60 rounded-lg transition-colors cursor-pointer">
                    Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-base-100 rounded-xl w-52 z-50 border border-base-200 mt-1">
                    <li>
                        <NavLink href={'/profile'} className="hover:bg-base-200">
                            Profile Management
                        </NavLink>
                    </li>
                </ul>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100/90 backdrop-blur-md border-b border-base-200/80 fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex items-center justify-between">

                {/* Navbar Start: Logo & Mobile Menu */}
                <div className="flex items-center gap-2">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-[#082a5e] hover:bg-base-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-md dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-64 p-3 shadow-2xl border border-base-200 gap-1.5 animated-dropdown">
                            {links}
                        </ul>
                    </div>

                    {/* Brand Logo */}
                    <Link href={'/'} className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#082a5e] hover:opacity-90 transition-opacity">
                        <span className="p-2 bg-[#082a5e] text-white rounded-xl shadow-sm text-sm font-black">IV</span>
                        <span className="hidden sm:inline bg-linear-to-r select-none from-[#082a5e] to-[#1e4ebd] bg-clip-text text-transparent">IdeaVault</span>
                    </Link>
                </div>

                {/* Navbar Center: Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <ul className="menu menu-horizontal p-0 gap-1.5 items-center">
                        {links}
                    </ul>
                </div>

                {/* Navbar End: User Actions */}
                <div className="flex items-center gap-3">
                    {/* User Profile Avatar (Optional View) */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-offset-2 ring-base-200 hover:ring-[#082a5e]/30 transition-all">
                            <div className="w-9 rounded-full">
                                <Image
                                    alt="User Profile"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    width={36}
                                    height={36}
                                />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow-xl bg-base-100 rounded-xl w-52 border border-base-200">
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/settings">Settings</Link></li>
                            <hr className="my-1 border-base-200" />
                            <li><span className="text-error font-medium">Logout</span></li>
                        </ul>
                    </div>

                    {/* Login Button */}
                    <Link className="btn bg-[#082a5e] hover:bg-[#061e45] text-white border-none rounded-xl px-5 shadow-sm shadow-[#082a5e]/20 transition-all font-medium text-sm btn-sm md:btn-md" href={'/login'}>
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NavBar;