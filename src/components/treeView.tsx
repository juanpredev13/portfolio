"use client"

import { useState } from "react"
import Link from "next/link"

interface TreeItem {
    label: string
    href?: string
    children?: TreeItem[]
}
const treeData: TreeItem[] = [
    {
        label: "Juanpredev/",
        children: [
            { label: "projects.ts", href: "/projects" },
        ]
    },
]

const TreeItem = ({ item, isLast = false }: { item: TreeItem; isLast?: boolean }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="flex flex-col mb-4">
            <div className="flex items-start">
                <span className="font-mono text-lawn-green mr-4 text-2xl">{isLast ? "└──" : "├──"}</span>
                {item.href ? (
                    <Link
                        href={item.href}
                        className="hover:text-lawn-green transition-colors duration-200 font-mono text-french-gray text-xl"
                    >
                        {item.label}
                    </Link>
                ) : (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="font-mono text-french-gray hover:text-lawn-green transition-colors duration-200 text-left text-xl"
                    >
                        {item.label}
                    </button>
                )}
            </div>
            {item.children && isOpen && (
                <div className="ml-8 mt-4 space-y-4">
                    {item.children.map((child, index) => (
                        <TreeItem key={child.label} item={child} isLast={index === item.children!.length - 1} />
                    ))}
                </div>
            )}
        </div>
    )
}

export const TreeView = () => {
    return (
        <div className="p-6 space-y-4">
            {treeData.map((item, index) => (
                <TreeItem key={item.label} item={item} isLast={index === treeData.length - 1} />
            ))}
        </div>
    )
}

