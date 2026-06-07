import { Search } from "lucide-react";
import React from "react";

interface SearchSectionProps {
  onSearchInput: (value: string) => void;
}

function SearchSection({ onSearchInput }: SearchSectionProps) {
  return (
    <div className="relative py-14 md:py-20 px-6 overflow-hidden bg-gradient-to-b from-slate-50/70 to-white dark:from-slate-950/40 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300 flex flex-col justify-center items-center">
      
      {/* Decorative Grid Overlay for premium depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Soft Glow Circles */}
      <div className="absolute -top-12 left-1/3 w-72 h-72 rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-3xl" />
      <div className="absolute -bottom-12 right-1/3 w-64 h-64 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Browse All Templates
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
          What would you like to create today?
        </p>
        
        {/* Search input container */}
        <div className="mt-8 w-full flex justify-center px-2">
          <div className="flex gap-3 items-center px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-xs focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-500/10 focus-within:shadow-md w-full transition-all duration-200">
            <Search className="h-5 w-5 text-slate-400 dark:text-slate-500 transition-colors" />
            <input
              type="text"
              placeholder="Search templates..."
              onChange={(event) => onSearchInput(event.target.value)}
              className="bg-transparent outline-none text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 w-full text-sm font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;