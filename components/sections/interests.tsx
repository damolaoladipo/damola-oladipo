"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import features from "@/_data/interest-data"


// The main component that renders the grid of feature cards
export default function InterestCards() {
  return (
    <div className="w-full items-start justify-start text-foreground overflow-hidden relative m-auto max-w-4xl">
      <div className="container py-24 px-6 md:py-20 lg:py-32 relative">
        {/* Title and Subtitle Section */}
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-800/30 border border-zinc-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="p-3 bg-zinc-700/50 rounded-lg">
                  <feature.icon className="h-6 w-6 text-zinc-300" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
