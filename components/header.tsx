"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/logo.png"
              alt="ProofLayer Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              Proof<span className="text-indigo-500">Layer</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#product" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Product
          </Link>
          <Link href="/#architecture" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            How it Works
          </Link>
          <Link href="/#features" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Features
          </Link>

          <Link href="/blog" className="text-sm text-gray-600 transition-colors hover:text-gray-900">
            Blog
          </Link>
        </nav>

        {/* CTA Button - Pill shaped */}


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
            <Link href="/#product" className="text-gray-600 hover:text-gray-900">
              Product
            </Link>
            <Link href="/#architecture" className="text-gray-600 hover:text-gray-900">
              How it Works
            </Link>
            <Link href="/#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>

            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>

          </nav>
        </div>
      )}
    </header>
  )
}
