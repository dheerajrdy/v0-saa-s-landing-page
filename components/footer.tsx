import { Github, Twitter, Linkedin, Sparkles } from "lucide-react"
import { DiscordCta } from "@/components/discord-cta"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Discord CTA */}
        <DiscordCta />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                Proof<span className="text-indigo-400">Layer</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">Diligence for intelligence.</p>
            <p className="text-xs text-gray-500 mt-2">San Francisco, CA</p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-gray-500 transition-colors hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-gray-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#product" className="text-gray-400 hover:text-white transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-gray-400 hover:text-white transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} ProofLayer. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                SOC2 Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                HIPAA Ready
              </span>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-600">
            Designed and developed with ❤️ by the ProofLayer team
          </p>
        </div>
      </div>
    </footer>
  )
}
