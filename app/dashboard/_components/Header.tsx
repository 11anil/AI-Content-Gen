"use client";

import { UserButton } from "@clerk/nextjs";
import { Search, Menu, X, Sun, Moon, Home, FileClock, Settings } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: FileClock, path: "/dashboard/history" },
    { name: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-250/60 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85 transition-colors duration-200 px-6 py-4">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
          
          {/* Left Side: Mobile Menu Button & Search Bar */}
          <div className="flex items-center gap-3 flex-1 max-w-lg">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:text-slate-250 dark:hover:bg-slate-800"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Mobile-only Logo Emblem */}
            <Link href="/" className="flex items-center gap-1.5 md:hidden hover:scale-[1.01] transition-transform">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-650 text-white shadow-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-extrabold text-sm tracking-tight text-slate-855 dark:text-white">
                Scribe<span className="text-violet-650 dark:text-violet-400">AI</span>
              </span>
            </Link>

            {/* Premium Styled Search Container */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 text-slate-400 focus-within:ring-2 focus-within:ring-violet-500/10 focus-within:border-violet-500 focus-within:bg-white dark:border-slate-800 dark:bg-slate-900/30 dark:focus-within:bg-slate-900/60 dark:focus-within:border-violet-500 transition-all duration-200">
              <Search className="h-4 w-4 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Quick search..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder-slate-550"
              />
            </div>
          </div>

          {/* Right Side: Theme Toggle & User Account Button */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 transition-all duration-200"
              aria-label="Toggle theme color"
            >
              {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Clerk User Button Wrapper */}
            <div className="flex items-center pl-1 border-l border-slate-200/80 dark:border-slate-800/80 h-6">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8 rounded-xl border border-slate-100 dark:border-slate-800",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      {/* Overlay Background */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 bottom-0 left-0 z-50 flex w-full max-w-xs flex-col bg-white p-6 shadow-2xl dark:bg-slate-900 border-r border-slate-250/60 dark:border-slate-800/80 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-650 text-white shadow-sm">
              <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="font-black text-lg tracking-tight text-slate-855 dark:text-white">
              Scribe<span className="text-violet-650 dark:text-violet-400">AI</span>
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links inside drawer */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link href={item.path} key={index} onClick={() => setIsMobileMenuOpen(false)}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-450 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Header;