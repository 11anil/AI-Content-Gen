"use client";

import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Editor = dynamic(() => import("@toast-ui/react-editor").then((mod) => mod.Editor), { ssr: false });

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editorRef: any = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-xs overflow-hidden transition-colors duration-200">
      
      {/* Header Container */}
      <div className="flex justify-between items-center p-5 border-b border-slate-100 dark:border-slate-800/60">
        <h2 className="font-bold text-lg text-slate-850 dark:text-slate-100">
          Your Result
        </h2>
        
        {/* Copy Button with micro-interaction */}
        <Button
          variant="outline"
          onClick={handleCopy}
          className={`flex gap-2 rounded-xl transition-all duration-200 ${
            copied
              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30"
              : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </Button>
      </div>

      {/* Editor Content Area */}
      <div className="dark:editor-dark-mode">
        <Editor
          ref={editorRef}
          initialValue="Your result will appear here"
          initialEditType="wysiwyg"
          height="600px"
          useCommandShortcut={true}
          onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
        />
      </div>
    </div>
  );
}

export default OutputSection;