"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import { projects } from "@/constants/projects"
import { ProjectCategory, ProjectMode } from "@/types/project"

const CATEGORIES: ProjectCategory[] = ["FEATURED", "WORDPRESS", "BRICKS", "ELEMENTOR", "GUTENBERG", "WOOCOMMERCE", "REACT", "NEXTJS"]
const VIEW_MODES: ProjectMode[] = ["BENTO", "TREE"]

interface ProjectsSectionProps {
  featuredOnly?: boolean
  showFilters?: boolean
}

export default function DevToolsGrid({ featuredOnly = false, showFilters = true }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("FEATURED")
  const [activeMode, setActiveMode] = useState<ProjectMode>("BENTO")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredProjects = featuredOnly
    ? projects.filter((project) => project.categories.includes("FEATURED")).slice(0, 6)
    : projects.filter((project) => {
        if (activeCategory === "FEATURED") return project.categories.includes("FEATURED")
        return project.categories.includes(activeCategory)
      })

  // On mobile, always use TREE mode
  const currentMode = isMobile ? "TREE" : activeMode

  return (
    <div className="dev-tools-grid project-section section">
        {/* Header */}
        <h1 className="dev-tools-grid__header">Some Things I&apos;ve Built</h1>

        {/* Navigation */}
        {showFilters && (
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
            {/* Hide mode selector on mobile */}
            {!isMobile && (
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
            )}
          </div>
        )}

        {/* Grid */}
        <div
          className={`dev-tools-grid__grid ${
            currentMode === "BENTO" ? "dev-tools-grid__grid--bento" : "dev-tools-grid__grid--tree"
          }`}
        >
          {filteredProjects.map((project) => (
            <div key={project.title} className="group dev-tools-grid__card">
              <div className="dev-tools-grid__card-content">
                {/* Categories */}
                <div className="dev-tools-grid__categories">
                  {(isMobile ? project.categories.slice(0, 3) : project.categories).map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className="dev-tools-grid__category"
                    >
                      {category === "WORDPRESS" ? "●" : category === "BRICKS" ? "◆" : category === "ELEMENTOR" ? "◇" : category === "GUTENBERG" ? "⬟" : category === "WOOCOMMERCE" ? "◈" : category === "REACT" ? "◯" : category === "NEXTJS" ? "△" : "■"}{" "}
                      {category}
                    </button>
                  ))}
                </div>

                {/* Title */}
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="dev-tools-grid__title-wrapper">
                  <h2 className="dev-tools-grid__title">{project.title}</h2>
                  <ArrowUpRight className="dev-tools-grid__arrow" />
                </Link>

                {/* Description */}
                <p className="dev-tools-grid__description">{project.description}</p>

                {/* Preview Image */}
                <div className="dev-tools-grid__image-wrapper">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    quality={90}
                    className="dev-tools-grid__image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more button */}
        {featuredOnly && (
          <div className="dev-tools-grid__see-more">
            <Link href="/projects" className="dev-tools-grid__see-more-btn">
              See more projects <ArrowUpRight className="w-5 h-5 inline-block ml-1" />
            </Link>
          </div>
        )}
    </div>
  )
}
