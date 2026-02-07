import { Twitter, Linkedin, Github, ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
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
            </div>
            <p className="mt-4 text-base text-gray-500">Security for AI coding agents.</p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://twitter.com/prooflayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/prooflayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/prooflayer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400">Product</h4>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <a href="#features" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-500 hover:text-gray-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/prooflayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/agent-security-scanner-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  npm
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-100 pt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} ProofLayer. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              OWASP Top 10
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              CWE Mapped
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              MITRE ATLAS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
