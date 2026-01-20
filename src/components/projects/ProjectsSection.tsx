"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

type Category = "FEATURED" | "WORDPRESS" | "NEXTJS" | "REACT" | "GUTENBERG"
type ViewMode = "BENTO" | "TREE"

const CATEGORIES: Category[] = ["FEATURED", "WORDPRESS", "NEXTJS", "REACT", "GUTENBERG"]
const VIEW_MODES: ViewMode[] = ["BENTO", "TREE"]

const TOOLS = [
  {
    title: "WP CLI",
    description: "Command-line interface for WordPress, allowing you to manage installations, plugins, and themes.",
    categories: ["WORDPRESS"] as Category[],
    image: "/projects/avantier.png",
  },
  {
    title: "Next.js API Routes",
    description: "Build API endpoints easily within your Next.js application for seamless full-stack development.",
    categories: ["NEXTJS"] as Category[],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "React DevTools",
    description: "Browser extension for debugging and profiling React applications.",
    categories: ["REACT"] as Category[],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Gutenberg Blocks",
    description: "Create custom blocks for the WordPress Gutenberg editor to extend content creation capabilities.",
    categories: ["GUTENBERG", "WORDPRESS"] as Category[],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Create React App",
    description: "Set up a modern web app by running one command, with all the build tools configured.",
    categories: ["REACT"] as Category[],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Next.js Image Optimization",
    description: "Automatically optimize and serve images in modern formats for improved performance.",
    categories: ["NEXTJS"] as Category[],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function DevToolsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("FEATURED")
  const [activeMode, setActiveMode] = useState<ViewMode>("BENTO")

  const filteredTools = TOOLS.filter((tool) => {
    if (activeCategory === "FEATURED") return true
    return tool.categories.includes(activeCategory)
  })

  return (
    <div className="dev-tools-grid project-section section">
      <div className="dev-tools-grid__container">
        {/* Header */}
        <h1 className="dev-tools-grid__header">Some Things I've Built</h1>

        {/* Navigation */}
        <div className="dev-tools-grid__navigation">
          <div className="dev-tools-grid__category-nav">
            <span className="dev-tools-grid__nav-label">VIEW :</span>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`dev-tools-grid__button ${
                  activeCategory === category ? "dev-tools-grid__button--active" : "dev-tools-grid__button--inactive"
                }`}
              >
                [{activeCategory === category ? "X" : " "}] {category}
              </button>
            ))}
          </div>
          <div className="dev-tools-grid__mode-nav">
            <span className="dev-tools-grid__nav-label">MODE :</span>
            {VIEW_MODES.map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setActiveMode(mode)}
                className={`dev-tools-grid__button ${
                  activeMode === mode ? "dev-tools-grid__button--active" : "dev-tools-grid__button--inactive"
                }`}
              >
                [{activeMode === mode ? "X" : " "}] {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          className={`dev-tools-grid__grid ${
            activeMode === "BENTO" ? "dev-tools-grid__grid--bento" : "dev-tools-grid__grid--tree"
          }`}
        >
          {filteredTools.map((tool) => (
            <div key={tool.title} className="group dev-tools-grid__card">
              <div className="dev-tools-grid__card-content">
                {/* Categories */}
                <div className="dev-tools-grid__categories">
                  {tool.categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className="dev-tools-grid__category"
                    >
                      {category === "WORDPRESS" ? "●" : category === "NEXTJS" ? "△" : category === "REACT" ? "◯" : "⬟"}{" "}
                      {category}
                    </button>
                  ))}
                </div>

                {/* Title */}
                <Link href="#" className="dev-tools-grid__title-wrapper">
                  <h2 className="dev-tools-grid__title">{tool.title}</h2>
                  <ArrowUpRight className="dev-tools-grid__arrow" />
                </Link>

                {/* Description */}
                <p className="dev-tools-grid__description">{tool.description}</p>

                {/* Preview Image */}
                <div className="dev-tools-grid__image-wrapper">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.title}
                    width={400}
                    height={300}
                    className="dev-tools-grid__image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

