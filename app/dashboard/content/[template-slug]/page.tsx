"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { generateAIContentAction, saveInDbAction } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

interface PROPS {
  params: Promise<{
    "template-slug": string;
  }>;
}

const callWithRetry = async (fn: () => Promise<any>, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (error: any) {
    const errorStr = String(error?.message || error || "");
    const isTemporaryError = 
      error?.status === 503 || 
      errorStr.includes("503") ||
      errorStr.includes("high demand") ||
      errorStr.includes("temporary") ||
      errorStr.includes("overloaded") ||
      errorStr.includes("Rate limit");
      
    if (retries > 0 && isTemporaryError) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return callWithRetry(fn, retries - 1, delay * 2);
    }
    throw error;
  }
};

function CreateNewContent(props: PROPS) {
  const params = React.use(props.params);
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();

  /**
   * Used to generate content from AI
   * @param formData
   * @returns
   */
  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    setError("");
    try {
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt =
        JSON.stringify(formData) +
        ", " +
        SelectedPrompt +
        ". Format the output in standard Markdown format (do not output RTF or raw RTF tags).";
      
      const result = await callWithRetry(() => generateAIContentAction(FinalAIPrompt));
      const textOutput = String(result?.text || "");

      setAiOutput(textOutput);
      await SaveInDb(
        JSON.stringify(formData),
        selectedTemplate?.slug,
        textOutput
      );
    } catch (err: any) {
      console.error("AI Generation failed:", err);
      const errorStr = String(err?.message || err || "");
      let userFriendlyMessage = "An unexpected error occurred. Please try again.";
      if (errorStr.includes("high demand") || errorStr.includes("503")) {
        userFriendlyMessage = "The AI service is experiencing extremely high demand. We retried, but the service is temporarily unavailable. Please try again in a few moments.";
      } else if (errorStr.includes("API key") || errorStr.includes("403")) {
        userFriendlyMessage = "Configuration error: Invalid API credentials. Please check your setup.";
      } else if (errorStr.includes("Rate limit") || errorStr.includes("429")) {
        userFriendlyMessage = "Rate limit reached. Please wait a moment before trying again.";
      }
      setError(userFriendlyMessage);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    try {
      await saveInDbAction({
        formData: formData,
        slug: slug,
        aiResp: aiResp,
        email: user?.primaryEmailAddress?.emailAddress || "",
      });
    } catch (dbErr) {
      console.error("Failed to save generation in database:", dbErr);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen p-6 md:p-8 max-w-7xl mx-auto transition-colors duration-200">
      
      {/* Back Button Container */}
      <div className="mb-6">
        <Link href={"/dashboard"}>
          <Button
            variant="outline"
            className="flex items-center gap-2 rounded-xl border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all shadow-2xs"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Templates
          </Button>
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl border border-rose-200 bg-rose-50/50 dark:border-rose-900/30 dark:bg-rose-950/10 text-rose-700 dark:text-rose-400 text-sm font-medium flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex items-center gap-2.5">
            <svg className="h-5 w-5 text-rose-500 dark:text-rose-455 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{error}</span>
          </div>
          <button
            onClick={() => setError("")}
            className="text-rose-450 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-350 p-1.5 rounded-lg hover:bg-rose-100/30 transition-colors animate-all"
            aria-label="Dismiss error"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Form Input Section */}
        <div className="lg:col-span-1">
          <FormSection
            selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
            loading={loading}
          />
        </div>
        
        {/* Output Section */}
        <div className="lg:col-span-2 h-full">
          <OutputSection aiOutput={aiOutput} />
        </div>
        
      </div>
    </div>
  );
}

export default CreateNewContent;
