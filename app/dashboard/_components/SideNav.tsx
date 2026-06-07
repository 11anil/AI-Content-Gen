"use client";

import { FileClock, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen p-5 border-r border-slate-200/85 bg-white dark:border-slate-800/85 dark:bg-slate-900/50 backdrop-blur-sm flex flex-col justify-between transition-colors duration-200">
      <div className="flex flex-col">
        {/* Logo Section */}
        <div className="flex items-center justify-start py-4 mb-2 pl-2">
          <Link href="/" className="hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-650 text-white shadow-sm shadow-violet-500/10">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-black text-lg tracking-tight text-slate-850 dark:text-white">
                Scribe<span className="text-violet-650 dark:text-violet-400">AI</span>
              </span>
            </div>
          </Link>
        </div>
        
        <hr className="my-5 border-slate-200 dark:border-slate-800" />
        
        {/* Menu Items */}
        <div className="flex flex-col gap-1.5 mt-2">
          {MenuList.map((menu, index) => {
            const isActive = path === menu.path;
            return (
              <Link href={menu.path} key={index}>
                <div
                  className={`flex gap-3 px-4 py-3 rounded-xl cursor-pointer items-center transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400 font-semibold shadow-sm border border-violet-500/10"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/50 border border-transparent"
                    }
                  `}
                >
                  <menu.icon
                    className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110
                      ${isActive ? "text-violet-600 dark:text-violet-400" : "text-slate-500 dark:text-slate-400"}
                    `}
                  />
                  <span className="text-sm font-medium">{menu.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideNav;