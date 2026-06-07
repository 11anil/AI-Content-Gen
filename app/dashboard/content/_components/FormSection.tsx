"use client";

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-6 rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800/80 dark:bg-slate-900/40 shadow-xs flex flex-col transition-colors duration-200">
      
      {/* Template Icon Wrapper */}
      {selectedTemplate?.icon && (
        <div className="p-3 w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center">
          <Image
            src={selectedTemplate?.icon}
            alt="icon"
            width={38}
            height={38}
            className="object-contain"
          />
        </div>
      )}

      {/* Title & Description */}
      <h2 className="font-extrabold text-xl md:text-2xl mt-4 text-slate-850 dark:text-slate-100 tracking-tight">
        {selectedTemplate?.name}
      </h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 leading-relaxed">
        {selectedTemplate?.desc}
      </p>

      {/* Form Fields */}
      <form className="mt-6 flex flex-col gap-6" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-350">
              {item.label}
              {item.required && <span className="text-rose-500 ml-0.5">*</span>}
            </label>
            
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="rounded-xl border-slate-200 bg-slate-50/30 px-3 py-2 text-sm shadow-2xs dark:border-slate-800 dark:bg-slate-950/20 focus-visible:ring-violet-500/15 focus-visible:border-violet-500 transition-all focus-visible:bg-white dark:focus-visible:bg-slate-950"
              />
            ) : item.field === "textarea" ? (
              <>
                <Textarea
                  name={item.name}
                  required={item?.required}
                  rows={5}
                  maxLength={2000}
                  onChange={handleInputChange}
                  className="rounded-xl border-slate-200 bg-slate-50/30 px-3 py-2 text-sm shadow-2xs dark:border-slate-800 dark:bg-slate-950/20 focus-visible:ring-violet-500/15 focus-visible:border-violet-500 transition-all focus-visible:bg-white dark:focus-visible:bg-slate-950 resize-y min-h-[120px]"
                />
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  Note: Max 2000 words.
                </span>
              </>
            ) : null}
          </div>
        ))}

        {/* Generate Button */}
        <Button
          type="submit"
          className="w-full py-6 rounded-xl font-bold bg-gradient-to-r from-violet-650 to-indigo-650 hover:from-violet-600 hover:to-indigo-600 dark:from-violet-600 dark:to-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2Icon className="h-5 w-5 animate-spin mr-1 text-white" />
              <span>Generating...</span>
            </>
          ) : (
            <span>Generate Content</span>
          )}
        </Button>
      </form>
    </div>
  );
}

export default FormSection;