import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={"/dashboard/content/" + item?.slug} className="group h-full">
      <div className="relative p-6 rounded-2xl border border-slate-200/80 bg-white shadow-xs hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 hover:-translate-y-1 hover:border-violet-500/35 dark:hover:border-violet-500/25 transition-all duration-300 flex flex-col justify-between h-full group">
        
        {/* Card Header: Icon */}
        <div className="mb-4">
          <div className="p-3 w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/80 flex items-center justify-center transition-transform group-hover:scale-105 duration-200 flex-shrink-0">
            <Image
              src={item.icon}
              alt={item.name}
              width={26}
              height={26}
              className="object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Card Body */}
        <div className="flex-grow flex flex-col gap-2">
          <h3 className="font-bold text-base md:text-lg text-slate-850 dark:text-slate-100 flex items-center gap-1 group-hover:text-violet-650 dark:group-hover:text-violet-400 transition-colors">
            {item.name}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
            {item.desc}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default TemplateCard;