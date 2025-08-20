"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import tabs from "@/_data/tabs-data";

export default function PlaygroundTabs() {
  return (
    <>
      <div className="text-left mb-0 mt-24">
        <h1 className="text-5xl font-bold text-foreground mb-4 font-sans">
          Make the right impression
        </h1>
        <p className="text-xl text-muted-foreground font-sans max-w-2xl">
          Launch UI makes it easy to build an unforgettable website that
          resonates with professional design-centric audiences.
        </p>
      </div>

      <div className="flex mt-10 items-center justify-center bg-background text-foreground">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-0">
          <Tabs
            defaultValue="sections"
            className="w-full flex flex-col md:flex-row gap-4"
          >
            {/* Left Tab Navigation */}
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="glass-container rounded-2xl p-3 backdrop-blur-md border shadow-xl">
                <TabsList className="flex flex-col h-auto w-full justify-start items-start p-0">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={cn(
                        "w-full text-left justify-start px-6 py-4 rounded-xl font-medium text-sm transition-all duration-300 ease-out",
                        "hover:scale-[1.02] hover:shadow-lg flex items-center space-x-3 data-[state=active]:bg-transparent",
                        "data-[state=active]:bg-accent/50 data-[state=active]:backdrop-blur-sm data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-border",
                        "data-[state=active]:text-foreground data-[state=active]:font-bold data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground data-[state=inactive]:hover:bg-accent/20",
                        "relative"
                      )}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      <span className="relative z-10">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1">
              <div className="glass-container rounded-2xl p-8 backdrop-blur-md border shadow-2xl min-h-[500px]">
                {tabs.map((tab) => (
                  <TabsContent
                    key={tab.id}
                    value={tab.id}
                    className={cn(
                      "transition-all duration-500 ease-out mt-0",
                      "data-[state=active]:opacity-100 data-[state=active]:translate-x-0",
                      "data-[state=inactive]:opacity-0 data-[state=inactive]:translate-x-4 data-[state=inactive]:absolute data-[state=inactive]:inset-8 data-[state=inactive]:pointer-events-none"
                    )}
                  >
                    {tab.content}
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
