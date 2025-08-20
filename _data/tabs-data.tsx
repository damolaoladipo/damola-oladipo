interface Tab {
  id: string
  label: string
  icon: string
  content: React.ReactNode
}

const tabs: Tab[] = [
  {
    id: "sections",
    label: "Choose your sections",
    icon: "📋",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-foreground mb-4">Choose your sections</h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Choose among 100+ components to build a landing page suited to the needs of your product.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-6 rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Hero Sections</h4>
            <p className="text-sm text-muted-foreground">Compelling headers that capture attention</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Feature Blocks</h4>
            <p className="text-sm text-muted-foreground">Showcase your product capabilities</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Testimonials</h4>
            <p className="text-sm text-muted-foreground">Build trust with social proof</p>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Call to Action</h4>
            <p className="text-sm text-muted-foreground">Convert visitors into customers</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "content",
    label: "Add your content",
    icon: "✏️",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-foreground mb-4">Add your content</h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Fill pre-built components with copy, videos, and other content featuring your product.
        </p>
        <div className="space-y-6 mt-8">
          <div className="flex items-start space-x-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-foreground text-lg">Rich Text Editor</h4>
              <p className="text-muted-foreground">Write compelling copy with our intuitive editor</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-3 h-3 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-foreground text-lg">Media Library</h4>
              <p className="text-muted-foreground">Upload and manage images, videos, and assets</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-foreground text-lg">Dynamic Content</h4>
              <p className="text-muted-foreground">Connect to APIs and databases for live data</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "customize",
    label: "Customize",
    icon: "🎨",
    content: (
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-foreground mb-4">Customize</h3>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Make designs yours in no time by changing the variables that control colors, typography, and other styles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg mx-auto mb-4"></div>
            <h4 className="font-bold text-lg text-foreground mb-2">Colors</h4>
            <p className="text-muted-foreground text-sm">Brand colors and themes</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mx-auto mb-4"></div>
            <h4 className="font-bold text-lg text-foreground mb-2">Typography</h4>
            <p className="text-muted-foreground text-sm">Fonts and text styles</p>
          </div>
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg mx-auto mb-4"></div>
            <h4 className="font-bold text-lg text-foreground mb-2">Layout</h4>
            <p className="text-muted-foreground text-sm">Spacing and structure</p>
          </div>
        </div>
      </div>
    ),
  },
]

export default tabs