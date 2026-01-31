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
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  emerald: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
}

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = blogPosts

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative px-4 pt-44 pb-16 sm:px-6 lg:px-8 lg:pt-48 lg:pb-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 -z-10 h-[600px] w-[800px] rounded-full bg-indigo-500/[0.04] blur-[100px]" />
        <div className="absolute top-40 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-violet-500/[0.03] blur-[100px]" />

        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 mb-6">
              Blog
            </span>
            <h1 className="text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl lg:text-6xl">
              Insights on AI{" "}
              <span className="text-gradient">Security</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto lg:text-xl">
              Deep dives into the technology, research, and best practices for securing AI agents across every modality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Featured Post — Full-width hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <article className="group relative rounded-2xl border border-gray-100/80 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Gradient visual */}
                  <div className="relative lg:w-2/5 bg-gradient-to-br from-indigo-600 via-violet-600 to-violet-700 p-8 lg:p-12 flex flex-col justify-center min-h-[200px] lg:min-h-[340px]">
                    <div className="absolute inset-0 bg-dot-pattern opacity-10" />
                    <div className="relative z-10">
                      {(() => {
                        const colors = categoryColors[featuredPost.categoryColor as keyof typeof categoryColors]
                        return (
                          <span className="inline-flex items-center rounded-full bg-white/20 text-white px-3 py-1 text-xs font-medium mb-4 backdrop-blur-sm">
                            {featuredPost.category}
                          </span>
                        )
                      })()}
                      <div className="text-sm text-white/70 flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-sm w-fit mb-4">
                      Featured
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-500 mt-2">{featuredPost.subtitle}</p>

                    <p className="mt-4 text-gray-600 line-clamp-2">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-600">
                      <span>Read article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Remaining Posts — 2-column grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 grid md:grid-cols-2 gap-8"
          >
            {remainingPosts.map((post, index) => {
              const colors = categoryColors[post.categoryColor as keyof typeof categoryColors]

              return (
                <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="group relative rounded-2xl border border-gray-100/80 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      {/* Category */}
                      <span className={`inline-flex items-center rounded-full ${colors.bg} ${colors.text} px-3 py-1 text-xs font-medium`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-gray-500 mt-1">{post.subtitle}</p>

                    {/* Excerpt */}
                    <p className="mt-4 text-gray-600 text-sm line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 group-hover:bg-indigo-50 transition-colors shrink-0">
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
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
