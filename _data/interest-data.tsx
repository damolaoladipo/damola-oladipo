
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
    title: "Open Source Softwares",
    description: "I believe in the power of shared knowledge. I'm passionate about contributing to OSS products. ",
    icon: Accessibility,
  },
  {
    title: "AI-Assisted Learning",
    description: "I love exploring how AI/ML can be used to create personalized and engaging educational tools.",
    icon: Laptop,
  },
  {
    title: "Machine Learning",
    description: "Products that use natural language generation and understanding to sovle customer problems.",
    icon: Moon,
  },
  {
    title: "Media and Internet Literacy",
    description: "Contribute to tools that help people navigate the digital space critically and safely.",
    icon: Braces,
  },
  {
    title: "Redemptive Technologies",
    description: "Build systems that are beyound-ethical, and designed to improve rather than exploit.",
    icon: Bolt,
  },
  {
    title: "Blockchaain Technologies",
    description: "Build products that leverages decentralized systems for a more transparent abd secure planet.",
    icon: Rocket,
  },
]

export default features