"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Loader2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCta() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // Simulate API call - replace with actual waitlist API
    await new Promise(resolve => setTimeout(resolve, 1000))

    setStatus("success")
    setEmail("")
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 p-8 text-center sm:p-12 shadow-xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>

            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Ready to protect your voice agents?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-indigo-100">
              Join the waitlist for early access to ProofLayer.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <p className="text-lg font-medium text-white">You&apos;re on the list!</p>
                <p className="text-sm text-indigo-100">We&apos;ll be in touch soon with early access.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "loading"}
                  className="rounded-full bg-white px-6 text-indigo-600 hover:bg-indigo-50 font-medium disabled:opacity-50 shadow-lg"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-indigo-100">
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                SOC2 Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
                HIPAA Ready
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
