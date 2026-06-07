"use client";

import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="md:w-64 hidden md:block fixed h-screen z-30">
        <SideNav />
      </div>
      <div className="md:ml-64 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;