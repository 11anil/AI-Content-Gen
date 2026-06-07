"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, ArrowRight, Sparkles, Zap, Shield, FileText, Code2, Mail } from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-violet-500" />,
      title: "20+ Premium Templates",
      description: "From blog posts and emails to code bug detection and social media tags, generate everything you need instantly.",
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-500" />,
      title: "History & Export",
      description: "Every piece of content generated is saved automatically. Copy, edit, or export in rich text with one click.",
    },
  ];

  const mockTemplates = [
    { name: "Write Email", icon: <Mail className="h-4 w-4 text-violet-500" />, desc: "Draft high-converting emails." },
    { name: "Blog Content", icon: <FileText className="h-4 w-4 text-amber-500" />, desc: "Viral-worthy blog posts." },
    { name: "Explain Code", icon: <Code2 className="h-4 w-4 text-emerald-500" />, desc: "Understand complex logic." },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Grid Pattern & Glowing Orbs */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-violet-400/20 blur-[100px] dark:bg-violet-600/10" />
      <div className="absolute top-20 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-blue-400/20 blur-[80px] dark:bg-blue-600/10" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/85 bg-slate-50/85 backdrop-blur-md dark:border-slate-800/85 dark:bg-slate-950/85">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-650 text-white shadow-sm shadow-violet-500/10">
                  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="font-black text-lg tracking-tight text-slate-850 dark:text-white">
                  Scribe<span className="text-violet-650 dark:text-violet-400">AI</span>
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              href="/dashboard"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-violet-600 px-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-violet-50/50 px-3 py-1 text-sm font-medium text-violet-700 dark:border-violet-900/30 dark:bg-violet-950/30 dark:text-violet-300">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Introducing ScribeAI 2.0</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            Supercharge Your Workflow With{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-indigo-400">
              AI-Powered Creation
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Revolutionize your content creation with our AI-powered suite, delivering engaging, high-quality, and SEO-optimized copies in seconds.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard"
              className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Start Generating Free
            </Link>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-slate-950 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Dashboard Preview Card Mockup */}
        <div className="mt-16 sm:mt-24">
          <div className="relative rounded-xl border border-slate-200/80 bg-white/70 p-2 shadow-2xl backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/70">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-600 opacity-10 blur-xl dark:opacity-20" />
            
            {/* Mock Editor Window */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-100/50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">ScribeAI Dashboard</div>
                <div className="w-12" />
              </div>

              {/* Window Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 md:h-[450px] h-auto">
                {/* Sidebar Mock */}
                <div className="border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/30 flex flex-col gap-2">
                  <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Templates</div>
                  {mockTemplates.map((t, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-2.5 rounded-lg border text-sm transition-all ${idx === 0 ? "border-violet-500/30 bg-violet-500/5 dark:bg-violet-500/10" : "border-slate-100 bg-slate-50/50 dark:border-slate-800/30 dark:bg-slate-900/10"}`}>
                      {t.icon}
                      <div className="text-left">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">{t.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{t.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Form Mock */}
                <div className="border-r border-slate-200 p-6 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/50 flex flex-col gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Write Email</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Draft professional emails in seconds.</p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Topic</label>
                    <input
                      type="text"
                      className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900"
                      value="Welcome onboarding email for new premium SaaS users"
                      disabled
                    />
                  </div>
                  <button className="mt-2 w-full rounded-lg bg-violet-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-violet-500 transition-all cursor-default">
                    Generate Content
                  </button>
                </div>

                {/* Output Mock */}
                <div className="p-6 bg-white dark:bg-slate-900/20 flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-3 dark:border-slate-800">
                    <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">Generated Copy</span>
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      Copy Ready
                    </span>
                  </div>
                  <div className="text-left text-sm text-slate-600 dark:text-slate-300 leading-relaxed overflow-y-auto pr-2">
                    <strong className="text-slate-950 dark:text-white">Subject: Welcome to the future of content generation! 🚀</strong>
                    <p className="mt-3">Hi there,</p>
                    <p className="mt-2">We are thrilled to welcome you to ScribeAI! Your account is active, and you are ready to start supercharging your content creation workflow.</p>
                    <p className="mt-2">Here is a quick tip to get started: choose a template from the sidebar, fill in your details, and hit Generate. You will get production-ready copy in seconds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div id="features" className="mt-32 sm:mt-40 border-t border-slate-200 pt-24 dark:border-slate-800">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Built for Professional Creators
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              ScribeAI delivers clean, conversion-oriented copy with features designed to keep your output organized.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 max-w-4xl mx-auto">
              {features.map((feature, idx) => (
                <div key={idx} className="relative flex flex-col gap-3 rounded-2xl border border-slate-200/60 bg-white/50 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                    {feature.icon}
                  </div>
                  <dt className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                    {feature.title}
                  </dt>
                  <dd className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-32 sm:mt-40 rounded-3xl border border-violet-200/50 bg-gradient-to-r from-violet-600/5 to-indigo-600/5 px-6 py-16 text-center sm:px-16 dark:border-violet-800/20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Boost Your Writing Efficiency Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Sign up for free and experience the easiest way to generate top-tier copy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard"
              className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-violet-500 transition-all"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">ScribeAI &copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
              Handcrafted for modern content creators. Powered by Gemini.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
