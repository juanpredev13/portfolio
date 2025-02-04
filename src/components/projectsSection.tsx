"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

type Category = "FEATURED" | "WORDPRESS" | "NEXTJS" | "REACT" | "GUTENBERG"

const CATEGORIES: Category[] = ["FEATURED", "WORDPRESS", "NEXTJS", "REACT", "GUTENBERG"]

const VIEW_MODES = ["BENTO", "TREE"]

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
  const [activeMode, setActiveMode] = useState("BENTO")

  const filteredTools = TOOLS.filter((tool) => {
    if (activeCategory === "FEATURED") return true
    return tool.categories.includes(activeCategory)
  })

  return (
    <div className="project-section section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 font-mono text-white">
          Some Things I've Built
        </h1>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-[#7af42a]">VIEW :</span>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2 py-1 text-xs font-mono border transition-all ${activeCategory === category
                    ? "border-[#7af42a] bg-[#7af42a]/10 text-[#7af42a]"
                    : "border-white/20 text-white hover:border-[#7af42a] hover:text-[#7af42a]"
                  }`}
              >
                [{activeCategory === category ? "X" : " "}] {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-[#7af42a]">MODE :</span>
            {VIEW_MODES.map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-2 py-1 text-xs font-mono border transition-all ${activeMode === mode
                    ? "border-[#7af42a] bg-[#7af42a]/10 text-[#7af42a]"
                    : "border-white/20 text-white hover:border-[#7af42a] hover:text-[#7af42a]"
                  }`}
              >
                [{activeMode === mode ? "X" : " "}] {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          className={`grid gap-4 ${activeMode === "BENTO" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
        >
          {filteredTools.map((tool) => (
            <Link
              key={tool.title}
              href="#"
              className="card-wrapper group p-6 bg-black/40 border border-white/10 hover:border-[#7af42a]/50 rounded-sm transition-all"
            >
              <div className="card-content">
                {/* Categories */}
                <div className="flex gap-2 mb-4">
                  {tool.categories.map((category) => (
                    <span
                      key={category}
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveCategory(category)
                      }}
                      className="inline-flex items-center text-xs font-mono text-[#7af42a] cursor-pointer hover:underline"
                    >
                      {category === "WORDPRESS" ? "●" : category === "NEXTJS" ? "△" : category === "REACT" ? "◯" : "⬟"}{" "}
                      {category}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-xl font-bold font-mono text-white group-hover:text-[#7af42a]">{tool.title}</h2>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#7af42a]" />
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm mb-6 font-mono">{tool.description}</p>

                {/* Preview Image */}
                <div className="aspect-video bg-black/60 rounded-sm overflow-hidden border border-white/10">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

