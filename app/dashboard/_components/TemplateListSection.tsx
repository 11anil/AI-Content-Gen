"use client";

import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import { SearchX } from "lucide-react";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: { userSearchInput: string | undefined }) {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase()) ||
        item.category.toLowerCase().includes(userSearchInput.toLowerCase()) ||
        item.desc.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950/20 py-8 px-6 md:px-8 lg:px-10 min-h-[400px]">
      {templateList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templateList.map((item: TEMPLATE, index: number) => (
            <TemplateCard key={index} {...item} />
          ))}
        </div>
      ) : (
        /* Enhanced Empty State */
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-white dark:bg-slate-900/20 max-w-lg mx-auto">
          <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-450 dark:text-slate-500 mb-4">
            <SearchX className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">No templates found</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            We couldn't find any templates matching "{userSearchInput}". Try searching for something else or browse categories.
          </p>
        </div>
      )}
    </div>
  );
}

export default TemplateListSection;