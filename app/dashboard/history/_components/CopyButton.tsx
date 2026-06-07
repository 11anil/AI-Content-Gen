"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

function CopyButton({ aiResponse }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <Button
        variant="ghost"
        onClick={handleCopy}
        className={`rounded-xl flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 transition-all
          ${
            copied
              ? "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/20"
              : "text-violet-600 hover:text-violet-700 hover:bg-slate-100 dark:text-violet-400 dark:hover:text-violet-300 dark:hover:bg-slate-800"
          }
        `}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            <span>Copy</span>
          </>
        )}
      </Button>
    </div>
  );
}

export default CopyButton;