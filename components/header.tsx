"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Proof<span className="text-indigo-500">Layer</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#product" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Product
          </a>
          <a href="#architecture" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            How it Works
          </a>
          <a href="#features" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Docs
          </a>
          <Link href="/blog" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Blog
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Login
          </a>
          <Button
            className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 text-white shadow-md shadow-indigo-500/25 transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 font-medium"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <a href="#product" className="text-gray-600 hover:text-gray-900">
              Product
            </a>
            <a href="#architecture" className="text-gray-600 hover:text-gray-900">
              How it Works
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Docs
            </a>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <div className="pt-4 flex flex-col gap-2">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Login
              </a>
              <Button
                className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
