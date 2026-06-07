import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "../_components/TemplateListSection";
import CopyButton from "./_components/CopyButton";
import Link from "next/link";
import { History as HistoryIcon } from "lucide-react";

export interface HISTORY {
  id: number;
  formData: string | null;
  aiResponse: string | null;
  templateSlug: string | null;
  createdBy: string | null;
  createdAt: string | null;
}

async function History() {
  const user = await currentUser();

  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress || ""))
    .orderBy(desc(AIOutput.id));

  const GetTemplateName = (slug: string | null) => {
    if (!slug) return null;
    const template: TEMPLATE | any = Templates?.find((item) => item.slug == slug);
    return template;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen p-6 md:p-8 max-w-7xl mx-auto transition-colors duration-200">
      
      {/* Title & Stats Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-extrabold text-3xl text-slate-850 dark:text-white tracking-tight">
            Generation History
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Browse and copy your previously generated AI content.
          </p>
        </div>
      </div>

      {HistoryList.length > 0 ? (
        <>
          {/* Desktop View: Grid Table (Hidden on small screens) */}
          <div className="hidden md:block rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-900/30 shadow-2xs overflow-hidden backdrop-blur-md">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-7 bg-slate-50/75 dark:bg-slate-900/50 border-b border-slate-200/85 dark:border-slate-800/85 font-semibold text-xs text-slate-500 dark:text-slate-400 tracking-wider uppercase py-4 px-6 items-center">
              <span className="col-span-2">Template</span>
              <span className="col-span-2">AI Response</span>
              <span className="col-span-1">Date</span>
              <span className="col-span-1 text-center">Words</span>
              <span className="col-span-1 text-right">Action</span>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {HistoryList.map((item: HISTORY, index: number) => {
                const template = GetTemplateName(item?.templateSlug);
                return (
                  <div
                    key={index}
                    className="grid grid-cols-7 py-5 px-6 items-center hover:bg-slate-50/45 dark:hover:bg-slate-800/10 transition-colors"
                  >
                    {/* Template Info (Icon + Name) */}
                    <div className="col-span-2 flex gap-3 items-center pr-3">
                      {template?.icon && (
                        <div className="p-2 w-9 h-9 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={template?.icon}
                            width={20}
                            height={20}
                            alt="icon"
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="font-semibold text-sm text-slate-800 dark:text-slate-200 line-clamp-1">
                        {template?.name || "Unknown Template"}
                      </span>
                    </div>

                    {/* AI Response Preview */}
                    <div className="col-span-2 pr-6">
                      <p className="text-slate-600 dark:text-slate-350 text-sm line-clamp-2 leading-relaxed">
                        {item?.aiResponse || ""}
                      </p>
                    </div>

                    {/* Created Date */}
                    <div className="col-span-1">
                      <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                        {item.createdAt || ""}
                      </span>
                    </div>

                    {/* Word Count (using character count from original code `length`) */}
                    <div className="col-span-1 text-center">
                      <span className="inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {item?.aiResponse?.length || 0}
                      </span>
                    </div>

                    {/* Copy Action */}
                    <div className="col-span-1 flex justify-end">
                      <CopyButton aiResponse={item.aiResponse || ""} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View: Stacked Cards (Visible only on small screens) */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {HistoryList.map((item: HISTORY, index: number) => {
              const template = GetTemplateName(item?.templateSlug);
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-slate-250 bg-white dark:border-slate-800/80 dark:bg-slate-900/30 shadow-2xs flex flex-col gap-3.5"
                >
                  {/* Header: Icon, Name & Action */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2.5 items-center">
                      {template?.icon && (
                        <div className="p-1.5 w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={template?.icon}
                            width={18}
                            height={18}
                            alt="icon"
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="font-bold text-sm text-slate-850 dark:text-slate-200">
                        {template?.name || "Unknown Template"}
                      </span>
                    </div>
                    <CopyButton aiResponse={item.aiResponse || ""} />
                  </div>

                  {/* AI Response Preview */}
                  <p className="text-slate-600 dark:text-slate-350 text-xs line-clamp-3 leading-relaxed">
                    {item?.aiResponse || ""}
                  </p>

                  {/* Footer details: Date & Words */}
                  <div className="flex justify-between items-center pt-2.5 border-t border-slate-100 dark:border-slate-800/50 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    <span>Date: {item.createdAt || ""}</span>
                    <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-semibold text-slate-600 dark:text-slate-450">
                      {item?.aiResponse?.length || 0} chars
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        /* Empty State Component */
        <div className="flex flex-col items-center justify-center py-24 px-4 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900/20 max-w-lg mx-auto">
          <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-450 dark:text-slate-500 mb-4">
            <HistoryIcon className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-lg text-slate-850 dark:text-slate-200">
            No history found
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-xs mx-auto">
            You haven't generated any AI content yet. Head over to templates and start writing!
          </p>
          <Link href="/dashboard" className="mt-6">
            <Button className="rounded-xl font-semibold bg-violet-650 hover:bg-violet-600 text-white shadow-md">
              Browse Templates
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default History;