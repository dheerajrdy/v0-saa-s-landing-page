"use client"

import { useState } from "react"
import { Menu, X, Download, Scale, GitBranch, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/blog" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
            Blog
          </Link>
          <div className="mx-1 h-5 border-l border-gray-200" />
          <a
            href="https://www.npmjs.com/package/agent-security-scanner-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full bg-indigo-50 px-4 py-2 text-sm transition-all hover:bg-indigo-100"
          >
            <svg className="h-3.5 w-6 shrink-0" viewBox="0 0 780 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M240 250h90V0h-90v250zm-60 0h60V0h-60v250zM0 250h180V0H0v250zm600 0h180V0H600v250zm-180 0h60V0h-60v250zm60 0h90V0h-90v250z" fill="#CB3837"/>
            </svg>
            <span className="font-semibold text-gray-900 truncate max-w-[180px]">agent-security-scanner</span>
            <span className="h-3.5 w-px bg-gray-300" />
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Download className="h-3 w-3" /> 233/wk
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Scale className="h-3 w-3" /> MIT
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <GitBranch className="h-3 w-3" /> 4 ver.
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-indigo-500" />
          </a>
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
              className="rounded-xl bg-indigo-50 px-4 py-3 hover:bg-indigo-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-base font-medium text-indigo-600">Security Scanner</span>
              <span className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Download className="h-3 w-3" /> 233/wk</span>
                <span className="flex items-center gap-1"><Scale className="h-3 w-3" /> MIT</span>
                <span className="flex items-center gap-1"><GitBranch className="h-3 w-3" /> 4 ver.</span>
              </span>
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
