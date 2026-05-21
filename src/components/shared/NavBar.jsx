'use client';
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import ThemeSwitch from "../ThemeSwitch";

const NavBar = () => {

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user

    const handleLogout = () => {
        authClient.signOut();
    }

    const links = (
        user ? <>
            <li><NavLink href={'/'}>Home</NavLink></li>
            <li><NavLink href={'/ideas'}>Ideas</NavLink></li>
            <li><NavLink href={'/add-idea'}>Add Idea</NavLink></li>
            <li><NavLink href={'/my-ideas'}>My Ideas</NavLink></li>
            <li><NavLink href={'/interactions'}>My Interactions</NavLink></li>
            <li>
                <details>
                    <summary className="relative px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 block w-full lg:w-auto text-base-content/80 hover:text-[#082a5e] dark:hover:text-white hover:bg-base-200/60">
                        Profile
                    </summary>

                    <ul className="p-2 bg-base-100 rounded-xl shadow-xl w-52 z-9999">
                        <li>
                            <NavLink href="/profile">
                                Profile Management
                            </NavLink>
                        </li>
                    </ul>
                </details>
            </li>
        </> : <>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/ideas'}>Ideas</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100/90 backdrop-blur-md border-b border-base-200/80 fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 overflow-visible">
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
                        <span className="p-2 bg-[#082a5e] dark:bg-white text-white dark:text-[#082a5e] rounded-xl shadow-sm text-sm font-black">IV</span>
                        <span className="hidden sm:inline bg-linear-to-r select-none from-[#082a5e] to-[#1e4ebd] bg-clip-text text-transparent">IdeaVault</span>
                    </Link>
                </div>

                {/* Navbar Center: Desktop Menu */}
                <div className="hidden lg:flex items-center">
                    <ul className="menu menu-horizontal p-0 gap-1.5 items-center overflow-visible">
                        {links}
                    </ul>
                </div>

                {/* Navbar End: User Actions */}
                <div className="flex items-center gap-3">
                    {
                        user ? (
                            <>
                                <Avatar>
                                    <Avatar.Image alt={user?.name || "User"} src={user?.image || ""} />
                                    <Avatar.Fallback>{user?.name?.[0] || "U"}</Avatar.Fallback>
                                </Avatar>
                                <Button onClick={handleLogout} className="btn bg-[#082a5e] hover:bg-[#061e45] text-white border-none rounded-xl px-5 shadow-sm shadow-[#082a5e]/20 transition-all font-medium text-sm btn-sm md:btn-md" href={'/login'}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <Link className="btn bg-[#082a5e] hover:bg-[#061e45] text-white border-none rounded-xl px-5 shadow-sm shadow-[#082a5e]/20 transition-all font-medium text-sm btn-sm md:btn-md" href={'/login'}>
                                Login
                            </Link>
                        )
                    }

                    <ThemeSwitch></ThemeSwitch>
                </div>
            </div>
        </div>
    );
};

export default NavBar;