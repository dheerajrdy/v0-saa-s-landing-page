import { Github, Twitter, Linkedin, Shield, CheckCircle } from "lucide-react"
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

          {/* Compliance */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-gray-900">Compliance</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                  <Shield className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <span className="font-medium text-gray-900">SOC2 Type II</span>
                  <p className="text-xs text-gray-500">Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50">
                  <CheckCircle className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <span className="font-medium text-gray-900">HIPAA</span>
                  <p className="text-xs text-gray-500">Compliant</p>
                </div>
              </div>
            </div>
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
