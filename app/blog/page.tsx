"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

const categoryColors = {
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
  },
  emerald: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-emerald-100",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-100",
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-6">
              Blog
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Insights on AI Security
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
              Deep dives into the technology, research, and best practices for securing AI agents across every modality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {blogPosts.map((post, index) => {
              const colors = categoryColors[post.categoryColor as keyof typeof categoryColors]

              return (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-indigo-100 cursor-pointer"
                  >
                    {/* Featured badge */}
                    {post.featured && (
                      <div className="absolute -top-3 left-6">
                        <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                          Featured
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        {/* Category */}
                        <span className={`inline-flex items-center rounded-full ${colors.bg} ${colors.text} px-3 py-1 text-xs font-medium mb-4`}>
                          {post.category}
                        </span>

                        {/* Title */}
                        <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-lg text-gray-500 mt-1">{post.subtitle}</p>

                        {/* Excerpt */}
                        <p className="mt-4 text-gray-600 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 group-hover:bg-indigo-50 transition-colors shrink-0">
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              )
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
