'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Edit3, Layers, Wind, Box, Server, ChevronRight, Code } from "lucide-react"

const tools = {
  wordpress: [
    { name: "themes", description: "customize the look and feel of your website." },
    { name: "plugins", description: "extend functionality with thousands of options." },
    { name: "wp-cli", description: "manage your WordPress site from the command line." },
  ],
  gutenberg: [
    { name: "blocks", description: "create reusable content components." },
    { name: "block patterns", description: "pre-designed layouts for quick page building." },
    { name: "block editor", description: "intuitive drag-and-drop interface for content creation." },
  ],
  elementor: [
    { name: "widgets", description: "drag-and-drop elements for page building." },
    { name: "templates", description: "pre-designed layouts for quick site creation." },
    { name: "theme builder", description: "create custom headers, footers, and site parts." },
  ],
  tailwind: [
    { name: "utility classes", description: "rapidly build custom designs without leaving your HTML." },
    { name: "responsive design", description: "easily create adaptive layouts." },
    { name: "dark mode", description: "effortlessly implement dark mode in your designs." },
  ],
  bricks: [
    { name: "visual builder", description: "create layouts with a drag-and-drop interface." },
    { name: "dynamic data", description: "integrate content from various sources." },
    { name: "custom elements", description: "create reusable components for your designs." },
  ],
  nextjs: [
    { name: "server-side rendering", description: "improve performance and SEO." },
    { name: "api routes", description: "build API endpoints as part of your Next.js app." },
    { name: "static site generation", description: "pre-render pages at build time for faster load times." },
  ],
}

export default function Component() {
  const [activeView, setActiveView] = useState('featured')
  const [activeMode, setActiveMode] = useState('bento')
  const [activeTool, setActiveTool] = useState('')

  const bentoProjects = [
    {
      title: "WordPress",
      description: "Create and manage content-rich websites with ease.",
      icon: <Globe className="h-6 w-6" />,
      category: "CMS",
    },
    {
      title: "Gutenberg",
      description: "Modern block-based editing for WordPress.",
      icon: <Edit3 className="h-6 w-6" />,
      category: "EDITOR",
    },
    {
      title: "Elementor",
      description: "Visual page builder for WordPress websites.",
      icon: <Layers className="h-6 w-6" />,
      category: "PAGE BUILDER",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      icon: <Wind className="h-6 w-6" />,
      category: "CSS FRAMEWORK",
    },
    {
      title: "Bricks",
      description: "Visual site builder with a focus on performance.",
      icon: <Box className="h-6 w-6" />,
      category: "SITE BUILDER",
    },
    {
      title: "Next.js",
      description: "React framework for production-grade applications.",
      icon: <Server className="h-6 w-6" />,
      category: "FRAMEWORK",
    },
  ]

  const filteredProjects = activeView === 'featured' 
    ? bentoProjects 
    : bentoProjects.filter(project => project.title.toLowerCase() === activeView.toLowerCase())

  const renderTree = (items: { name: string; description: string }[], depth = 0) => (
    <ul className="list-none pl-4">
      {items.map((item, index) => (
        <li key={index} className="mb-2">
          <div 
            className={`flex items-center cursor-pointer ${activeTool === item.name ? 'text-[#7af42a] font-bold' : ''}`}
            onClick={() => setActiveTool(item.name)}
          >
            <ChevronRight className="h-4 w-4 mr-2" />
            <span className="font-mono">
              {item.name} <span className="text-muted-foreground"># {item.description}</span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Web Development Tools</h1>
        <div className="flex space-x-2">
          <Badge 
            variant={activeMode === 'bento' ? 'default' : 'outline'} 
            onClick={() => setActiveMode('bento')}
            className="cursor-pointer"
          >
            BENTO
          </Badge>
          <Badge 
            variant={activeMode === 'tree' ? 'default' : 'outline'} 
            onClick={() => setActiveMode('tree')}
            className="cursor-pointer"
          >
            TREE
          </Badge>
        </div>
      </div>
      <Tabs value={activeView} onValueChange={setActiveView} className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="featured">FEATURED</TabsTrigger>
            <TabsTrigger value="wordpress">WORDPRESS</TabsTrigger>
            <TabsTrigger value="gutenberg">GUTENBERG</TabsTrigger>
            <TabsTrigger value="elementor">ELEMENTOR</TabsTrigger>
            <TabsTrigger value="tailwind">TAILWIND</TabsTrigger>
            <TabsTrigger value="bricks">BRICKS</TabsTrigger>
            <TabsTrigger value="nextjs">NEXT.JS</TabsTrigger>
          </TabsList>
        </div>
        {activeMode === 'bento' ? (
          <TabsContent value={activeView} className="grid grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <Card key={index} className={`overflow-hidden border-2 border-[#7af42a] bg-transparent ${
                index === 0 ? 'col-span-2 row-span-2' :
                index === 1 || index === 2 ? 'col-span-1 row-span-1' :
                'col-span-1 row-span-2'
              }`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                    {project.icon}
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  {index === 0 && (
                    <div className="mt-4 bg-primary/10 p-4 rounded-md">
                      <pre className="text-xs overflow-x-auto">
                        {`<?php
add_action('init', function() {
  register_post_type('custom', [
    'public' => true,
    'label' => 'Custom'
  ]);
});`}
                      </pre>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-4 bg-primary/10 text-primary p-4 rounded-md">
                      <p className="text-xs">Elementor</p>
                      <p className="text-xs">Visual Page Builder</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ) : (
          <TabsContent value={activeView} className="font-mono text-sm">
            <div className="p-6 rounded-lg shadow border-2 border-[#7af42a] bg-transparent">
              <p>$ tree web-dev-tools</p>
              <div className="mt-4">
                {Object.entries(tools).map(([category, items]) => (
                  <div key={category} className={`mb-4 ${activeView === 'featured' || activeView === category ? 'block' : 'hidden'} ${activeView === category ? 'border-l-4 border-[#7af42a] pl-2' : ''}`}>
                    <div 
                      className={`font-bold cursor-pointer ${activeView === category ? 'text-[#7af42a]' : ''}`}
                      onClick={() => setActiveView(category)}
                    >
                      {category}
                    </div>
                    {renderTree(items)}
                  </div>
                ))}
              </div>
              <p className="mt-4">6 categories, 18 tools</p>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}