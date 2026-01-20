"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SocialShare } from "./social-share"

interface BlogHeaderProps {
  title: string
  subtitle?: string
  category: string
  categoryColor?: "violet" | "indigo" | "emerald" | "orange" | "rose"
  readTime: string
  date: string
  author?: string
}

const categoryColors = {
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
  },
}

export function BlogHeader({
  title,
  subtitle,
  category,
  categoryColor = "violet",
  readTime,
  date,
  author = "ProofLayer Team",
}: BlogHeaderProps) {
  const colors = categoryColors[categoryColor]

  return (
    <header className="relative px-4 pt-32 pb-16 sm:px-6 lg:px-8">
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="blob blob-indigo absolute top-10 left-1/4 h-[400px] w-[400px]" />
        <div className="blob blob-purple absolute top-40 right-1/4 h-[300px] w-[300px]" />
      </div>

      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category badge */}
          <span className={`inline-flex items-center rounded-full ${colors.bg} ${colors.text} px-4 py-1.5 text-sm font-medium mb-6`}>
            {category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 text-xl text-gray-500">{subtitle}</p>
          )}

          {/* Meta info with social share */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-medium">
                  PL
                </div>
                <span className="font-medium text-gray-700">{author}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            </div>
            <SocialShare title={title} />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
