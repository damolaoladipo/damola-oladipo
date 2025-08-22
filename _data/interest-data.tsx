
// Import icons from lucide-react. You may need to add more.
import {
  Accessibility,
  Laptop,
  Moon,
  Braces,
  Bolt,
  Rocket,
  LucideIcon
} from "lucide-react"

// Define the structure for a single feature card
interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

// Data for each feature card, including the icon component
const features: FeatureCardProps[] = [
  {
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliant, made with best ally practices",
    icon: Accessibility,
  },
  {
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
    icon: Laptop,
  },
  {
    title: "Light and dark mode",
    description: "Seamless switching between color schemes, 6 themes included",
    icon: Moon,
  },
  {
    title: "Easy to customize",
    description: "Flexible options to match your product or brand",
    icon: Braces,
  },
  {
    title: "Top-level performance",
    description: "Made for lightning-fast load times and smooth interactions",
    icon: Bolt,
  },
  {
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared",
    icon: Rocket,
  },
]

export default features