"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { SecurityAnimation } from "@/components/security-animation"

const ROTATING_WORDS = ["text agents.", "voice agents.", "code agents."]
const TYPING_SPEED = 80
const DELETING_SPEED = 50
const PAUSE_AFTER_TYPED = 2000
const PAUSE_AFTER_DELETED = 400

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting) {
      // Typing
      const next = currentWord.slice(0, displayText.length + 1)
      setDisplayText(next)

      if (next === currentWord) {
        // Finished typing — pause then start deleting
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED)
        return
      }
    } else {
      // Deleting
      const next = currentWord.slice(0, displayText.length - 1)
      setDisplayText(next)

      if (next === "") {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
        // Brief pause before typing next word
        setTimeout(() => {}, PAUSE_AFTER_DELETED)
        return
      }
    }
  }, [displayText, isDeleting, wordIndex, words])

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED
    // After finishing typing, the pause is handled in tick()
    if (!isDeleting && displayText === words[wordIndex]) return
    const timeout = setTimeout(tick, speed)
    return () => clearTimeout(timeout)
  }, [tick, displayText, isDeleting, wordIndex, words])

  // Kick off after delete-pause
  useEffect(() => {
    if (!isDeleting && displayText === "") {
      const timeout = setTimeout(tick, PAUSE_AFTER_DELETED)
      return () => clearTimeout(timeout)
    }
  }, [isDeleting, displayText, tick])

  return displayText
}

export function Hero() {
  const typedText = useTypewriter(ROTATING_WORDS)

  return (
    <section className="relative px-4 pt-44 pb-32 sm:px-6 lg:px-8 lg:pt-56 lg:pb-48">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-5xl text-[52px] font-extrabold leading-[1.0] tracking-tighter text-gray-900 sm:text-[80px] lg:text-[96px] xl:text-[112px]"
          >
            Security for{" "}
            <br />
            <span className="inline-flex">
              <span className="text-indigo-600">{typedText}</span>
              <span
                className="ml-[2px] inline-block w-[3px] sm:w-[4px] lg:w-[5px] self-stretch bg-indigo-600 animate-blink"
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-xl leading-relaxed text-gray-400 sm:text-2xl lg:text-[28px] lg:leading-relaxed"
          >
            Pre-deployment testing. Runtime guardrails.
            One platform for every AI agent.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-6"
          >
            <a
              href="https://calendly.com/divyachitimalla/intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gray-900 px-10 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 hover:scale-[1.02]"
            >
              Book a Call
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-base font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              Learn more
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Compliance Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              SOC 2 Type II
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 w-full lg:mt-32"
          >
            <SecurityAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
