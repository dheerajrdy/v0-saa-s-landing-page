import { Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5">
              <Image
                src="/logo.png"
                alt="ProofLayer Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-gray-900">
                Proof<span className="text-indigo-600">Layer</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500">Security for every AI agent.</p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://twitter.com/prooflayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/prooflayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400">Product</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-gray-500 hover:text-gray-900 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-500 hover:text-gray-900 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="https://calendly.com/divyachitimalla/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} ProofLayer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
