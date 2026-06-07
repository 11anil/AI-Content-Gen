import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen p-6 md:p-8 max-w-7xl mx-auto transition-colors duration-200">
      
      {/* Settings Header */}
      <div className="mb-8">
        <h1 className="font-extrabold text-3xl text-slate-850 dark:text-white tracking-tight">
          Account Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Manage your account profile, connected social accounts, and password details.
        </p>
      </div>

      {/* Styled Clerk Container */}
      <div className="flex justify-center items-center py-4">
        <div className="w-full max-w-4xl border border-slate-200/85 bg-white shadow-2xs rounded-3xl overflow-hidden dark:border-slate-800/85 dark:bg-slate-900/30 backdrop-blur-md p-2 md:p-4">
          <UserProfile
            appearance={{
              elements: {
                card: "shadow-none border-none bg-transparent w-full dark:text-slate-100",
                navbar: "border-r border-slate-100 dark:border-slate-800/80 bg-transparent pr-4",
                navbarButton: "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-xl",
                navbarButtonActive: "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400 font-semibold",
                headerTitle: "text-slate-850 dark:text-white font-extrabold",
                headerSubtitle: "text-slate-500 dark:text-slate-400",
                profileSectionTitleText: "text-slate-850 dark:text-white font-bold border-b border-slate-100 dark:border-slate-800/50 pb-2",
                profileSectionPrimaryButton: "text-violet-600 dark:text-violet-400 hover:text-violet-700 font-medium",
                formButtonPrimary: "bg-violet-650 hover:bg-violet-600 text-white rounded-xl py-2 px-4 shadow-sm transition-all font-semibold",
                formButtonReset: "text-slate-650 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl",
                formFieldLabel: "text-slate-700 dark:text-slate-300 font-semibold text-xs",
                formFieldInput: "rounded-xl border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/20 text-slate-850 dark:text-slate-100 focus:ring-violet-500/15 focus:border-violet-500",
                breadcrumbsItem: "text-slate-500 dark:text-slate-400",
                breadcrumbsItemActive: "text-slate-850 dark:text-white font-semibold",
                userPreviewMainIdentifier: "text-slate-850 dark:text-white font-bold",
                userPreviewSecondaryIdentifier: "text-slate-500 dark:text-slate-400",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;