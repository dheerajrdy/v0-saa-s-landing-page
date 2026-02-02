"use client"

import { useState, useRef, useCallback } from "react"
import { Menu, X, Download, Scale, GitBranch, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
    setShowDropdown(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false)
    }, 150)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ProofLayer Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="text-xl font-extrabold tracking-tighter text-gray-900">
            Proof<span className="text-indigo-600">Layer</span>
          </span>
          <span className="hidden text-xs font-medium text-gray-400 sm:inline">AI Agent Security</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/#services" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Services
          </Link>
          <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Blog
          </Link>
          <div className="mx-1 h-5 border-l border-gray-200" />
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="https://www.npmjs.com/package/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-600 transition-all hover:bg-indigo-100"
            >
              Security Scanner
            </a>

            {/* Invisible bridge to prevent hover gap flicker */}
            {showDropdown && <div className="absolute left-0 right-0 top-full h-3" />}

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-[calc(100%+12px)] w-72 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-4 shadow-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Caret */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 drop-shadow-sm">
                    <div className="h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-white" />
                  </div>

                  {/* Header row */}
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-7" viewBox="0 0 780 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M240 250h90V0h-90v250zm-60 0h60V0h-60v250zM0 250h180V0H0v250zm600 0h180V0H600v250zm-180 0h60V0h-60v250zm60 0h90V0h-90v250z" fill="#CB3837"/>
                    </svg>
                    <span className="truncate text-sm font-semibold text-gray-900">agent-security-scanner-mcp</span>
                    <span className="whitespace-nowrap rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-600">v1.1.0</span>
                  </div>

                  {/* Stats row */}
                  <div className="mt-3 flex gap-2">
                    <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1.5">
                      <Download className="h-3.5 w-3.5 text-gray-400" />
                      <span className="text-xs font-medium text-gray-600">233/wk</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1.5">
                      <Scale className="h-3.5 w-3.5 text-gray-400" />
                      <span className="text-xs font-medium text-gray-600">MIT</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1.5">
                      <GitBranch className="h-3.5 w-3.5 text-gray-400" />
                      <span className="text-xs font-medium text-gray-600">4 ver.</span>
                    </div>
                  </div>

                  {/* Footer link */}
                  <a
                    href="https://www.npmjs.com/package/agent-security-scanner-mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
                  >
                    View on npm <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="https://dashboard.proof-layer.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
          >
            Try Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-6">
            <Link
              href="/#services"
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="rounded-xl px-4 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="my-2 border-t border-gray-100" />
            <a
              href="https://www.npmjs.com/package/agent-security-scanner-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Security Scanner
            </a>
            <a
              href="https://dashboard.proof-layer.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
