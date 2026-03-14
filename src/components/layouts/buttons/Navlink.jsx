"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children, className = "" }) => {
    const pathname = usePathname();

    // যদি লিঙ্কটি হোম হয় ('/'), তবে পুরোপুরি মিলতে হবে (Exact match)
    // অন্য পেজগুলোর জন্য startsWith চেক করবে (যাতে সাব-পেজে গেলেও প্যারেন্ট লিঙ্ক একটিভ থাকে)
    const isActive = href === "/" 
        ? pathname === "/" 
        : pathname.startsWith(href);

    return (
        <Link 
            href={href} 
            className={`link no-underline transition-all duration-300 ${
                isActive 
                ? 'text-orange-500 underline underline-offset-8' // একটিভ কালার আপনার থিম অনুযায়ী অরেঞ্জ দিলাম
                : 'text-slate-300 hover:text-white'
            } font-bold ${className}`}
        >
            {children}
        </Link>
    );
};

export default Navlink;