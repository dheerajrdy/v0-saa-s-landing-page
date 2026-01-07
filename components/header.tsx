"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20">
            <div className="h-4 w-4 rounded-sm bg-cyan-400" />
          </div>
          <span className="font-mono text-lg font-bold tracking-tight text-white">
            Neo<span className="text-cyan-400">AI</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-gray-400 transition-colors hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-gray-400 transition-colors hover:text-white">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-gray-400 transition-colors hover:text-white">
            Pricing
          </a>
          <a href="#docs" className="text-sm text-gray-400 transition-colors hover:text-white">
            Docs
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" className="text-gray-300 hover:bg-white/10 hover:text-white">
            Book Demo
          </Button>
          <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Start Building</Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0f] md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <a href="#features" className="text-gray-400 hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-400 hover:text-white">
              Pricing
            </a>
            <a href="#docs" className="text-gray-400 hover:text-white">
              Docs
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="border-gray-700 bg-transparent text-white">
                Book Demo
              </Button>
              <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Start Building</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
