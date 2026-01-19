import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#FAFAFA] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-1.5">
              <Image
                src="/logo.png"
                alt="ProofLayer Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-gray-900">
                Proof<span className="text-indigo-500">Layer</span>
              </span>
            </div>
            <p className="text-sm text-gray-600">Diligence for intelligence.</p>
            <div className="mt-4 flex gap-4">
              <a href="https://twitter.com/prooflayer" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-gray-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/prooflayer" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-gray-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-gray-600 hover:text-gray-900 transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@proof-layer.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  hello@proof-layer.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-8">
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
        </div>
      </div>
    </footer>
  )
}
