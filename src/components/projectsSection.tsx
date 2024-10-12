"use client";
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  const [view, setView] = useState('FEATURED')
  const [mode, setMode] = useState('BENTO')

  const tools = [
    {
      title: "Ordinals Explorer",
      description: "Search, filter, and explore Ordinals inscriptions.",
      tags: ["ORDINALS"],
      image: "/abcislands.png",
    },
    {
      title: "Chainhook",
      description: "Build smarter apps with webhook-like triggers that react to onchain events in real time.",
      tags: ["STACKS"],
      image: "/abcislands.png",
    },
    {
      title: "Hiro Platform",
      description: "The web3 development platform for Stacks.",
      tags: ["STACKS", "ORDINALS"],
      image: "/abcislands.png",
    },
    {
      title: "Clarinet",
      description: "Rapidly develop and test Clarity smart contracts.",
      tags: ["STACKS"],
      image: "/abcislands.png",
    },
    {
      title: "Ordhook",
      description: "Build indexers, standards and protocols on top of Ordinals and Inscriptions.",
      tags: ["ORDINALS"],
      image: "/abcislands.png",
    },
    {
      title: "Stacks Explorer",
      description: "The #1 explorer for Stacks.",
      tags: ["STACKS"],
      image: "/abcislands.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">DEVELOPER TOOLS FOR BITCOIN LAYERS</h1>

      <div className="flex justify-between mb-6">
        <div className="space-x-2 bg-transparent">
          <span className="text-sm font-medium">VIEW:</span>
          {['FEATURED', 'ORDINALS', 'STACKS'].map((option) => (
            <Button
              key={option}
              variant={view === option ? "default" : "outline"}
              onClick={() => setView(option)}
              size="sm"
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="space-x-2">
          <span className="text-sm bg-transparent font-medium">MODE:</span>
          {['BENTO', 'TREE'].map((option) => (
            <Button
              key={option}
              variant={mode === option ? "default" : "outline"}
              onClick={() => setMode(option)}
              size="sm"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Card key={index} className="bg-transparent border-lawn-green overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{tool.title}</CardTitle>
              <div className="flex space-x-2">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
              <Image
                src={tool.image}
                alt={tool.title}
                width={300}
                height={200}
                className="rounded-md"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}