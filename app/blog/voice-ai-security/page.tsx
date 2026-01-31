"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { ThreatFlowDiagram } from "@/components/blog/threat-flow-diagram"
import { ArchitectureDiagram } from "@/components/blog/architecture-diagram"
import { SafetyPipelineDiagram } from "@/components/blog/safety-pipeline-diagram"
import { FinalCta } from "@/components/final-cta"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { TableOfContents, type TocItem } from "@/components/blog/table-of-contents"
import { InlineCta } from "@/components/blog/inline-cta"
import { AuthorCard } from "@/components/blog/author-card"
import { RelatedPosts } from "@/components/blog/related-posts"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { authors } from "@/lib/blog-data"

const tocItems: TocItem[] = [
  { id: "threat-landscape", title: "The Voice AI Threat Landscape", level: 2 },
  { id: "text-guardrails-fail", title: "Why Text-Based Guardrails Fail", level: 2 },
  { id: "prooflayer-architecture", title: "The ProofLayer Architecture", level: 2 },
  { id: "safety-pipeline", title: "Inside the Safety Pipeline", level: 2 },
  { id: "integration", title: "Integration: One Line", level: 2 },
  { id: "future", title: "The Future of Voice AI Security", level: 2 },
]

export default function VoiceAISecurityPost() {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `<Stream url="wss://prooflayer.com/v1" />`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <ReadingProgressBar />

      <BlogHeader
        title="The Anatomy of Voice AI Security"
        subtitle="Why Text-Based Guardrails Aren't Enough"
        category="Engineering"
        categoryColor="rose"
        readTime="8 min read"
        date="January 18, 2026"
      />

      {/* Article Content with TOC Sidebar */}
      <article className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
            {/* Main Content */}
            <div className="max-w-3xl">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose-section mb-16"
              >
                <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-indigo-500 pl-6 italic">
                  Voice AI is experiencing explosive growth. From customer service bots to healthcare agents,
                  voice-first interfaces are becoming the default way humans interact with AI. But there&apos;s
                  a problem: the security tools built for text-based AI don&apos;t work for voice.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The rise of conversational AI has been nothing short of remarkable. OpenAI&apos;s Realtime API,
                  Google&apos;s Gemini Audio, and platforms like Twilio and LiveKit have made it trivially easy
                  to deploy voice agents that can handle everything from appointment scheduling to complex
                  customer support scenarios.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  But as these systems proliferate, a critical gap has emerged: <strong>the security infrastructure
                    hasn&apos;t kept pace</strong>. Most AI safety tools were designed for text. They analyze prompts,
                  filter outputs, and enforce policies&mdash;all at the text level. Voice is different.
                </p>
              </motion.div>

              {/* Section: The Threat Landscape */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="threat-landscape" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  The Voice AI Threat Landscape
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Voice AI systems face a unique set of threats that text-based guardrails simply cannot detect.
                  These attacks operate at the audio level, exploiting the gap between what&apos;s spoken and
                  what traditional systems can analyze.
                </p>

                <ThreatFlowDiagram />

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Let&apos;s examine each of these threats in detail:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Voice Injection Attacks</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Similar to SQL injection in web applications, voice injection attacks embed malicious
                  commands within seemingly normal audio. An attacker might speak a phrase that sounds
                  innocuous to human listeners but contains hidden instructions that manipulate the AI agent&apos;s
                  behavior. For example, an attacker could embed ultrasonic commands inaudible to human operators but picked up by the agent&apos;s microphone, or craft adversarial audio that transcribes to benign text while carrying malicious intent at the acoustic level. These attacks can bypass transcription-based filters because the malicious
                  content is encoded in audio characteristics, not just words.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Deepfake Voice Cloning</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With just a few seconds of audio, modern AI can generate synthetic voices that are
                  virtually indistinguishable from the real person. Voice fraud increased by 350% in 2024,
                  with attackers using cloned voices to impersonate executives, customers, and authorized
                  users. A voice agent that can&apos;t detect synthetic audio is a liability waiting to happen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Prompt Hijacking</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Attackers craft phrases designed to manipulate the underlying language model, causing
                  it to ignore its instructions or reveal sensitive information. In voice contexts, these
                  attacks can be hidden within natural-sounding speech, making them nearly impossible to
                  detect through simple keyword filtering.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Policy Bypass</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Even well-designed voice agents can be manipulated into taking unauthorized actions.
                  Social engineering combined with voice manipulation can trick agents into transferring
                  funds, disclosing personal information, or executing actions outside their intended scope.
                </p>
              </motion.div>

              {/* Section: Why Text Guardrails Fail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="text-guardrails-fail" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Why Text-Based Guardrails Fail
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The fundamental problem is this: <strong>audio carries information that text cannot capture</strong>.
                </p>

                <div className="rounded-2xl bg-indigo-50/50 border border-indigo-200/80 p-6 shadow-sm my-8">
                  <h4 className="font-semibold text-indigo-900 mb-4">What Gets Lost in Transcription:</h4>
                  <ul className="space-y-3 text-indigo-800">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                      <span><strong>Prosodic features:</strong> Pitch, rhythm, and stress patterns that can indicate deception or manipulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                      <span><strong>Spectral artifacts:</strong> The telltale signatures of AI-generated or manipulated audio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                      <span><strong>Temporal patterns:</strong> Timing and pause structures that reveal hidden content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                      <span><strong>Voice biometrics:</strong> The unique characteristics that verify speaker identity</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When you transcribe audio to text and then analyze the text, you&apos;ve already lost the
                  battle. The critical signals that would have revealed an attack are gone. You&apos;re
                  essentially trying to detect visual deepfakes by only looking at the color palette.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This is why voice AI security requires a fundamentally different approach&mdash;one that
                  operates at the audio level, analyzing the actual waveform rather than its textual
                  representation.
                </p>
              </motion.div>

              {/* Section: The ProofLayer Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="prooflayer-architecture" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  The ProofLayer Architecture
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ProofLayer takes a &ldquo;wedge&rdquo; approach to voice AI security. Rather than requiring you
                  to rewrite your application or integrate complex SDKs, ProofLayer sits transparently
                  between your voice infrastructure and your AI model.
                </p>

                <ArchitectureDiagram />

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This architecture has several key advantages:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  <div className="rounded-2xl bg-white border border-gray-100/80 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">Zero Code Changes</h4>
                    <p className="text-sm text-gray-600">
                      Point your existing WebSocket connection at ProofLayer. That&apos;s it. No SDK
                      integration, no application rewrites.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100/80 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">Provider Agnostic</h4>
                    <p className="text-sm text-gray-600">
                      Works with any voice provider (Twilio, LiveKit) and any AI model (OpenAI, Google).
                      Switch providers without changing your security layer.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100/80 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">Real-Time Processing</h4>
                    <p className="text-sm text-gray-600">
                      All analysis happens in-stream with under 50ms of added latency. Users never
                      notice. Conversations flow naturally.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100/80 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Audit Trail</h4>
                    <p className="text-sm text-gray-600">
                      Every interaction is logged with full context&mdash;what was detected, what action
                      was taken, and why. SOC2 and HIPAA ready out of the box.
                    </p>
                  </div>
                </div>

                <InlineCta
                  variant="compact"
                  headline="See it in action"
                  subtext="Try ProofLayer with your existing voice stack."
                />
              </motion.div>

              {/* Section: Inside the Safety Pipeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="safety-pipeline" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Inside the Safety Pipeline
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  When audio flows through ProofLayer, it passes through a multi-stage safety pipeline
                  designed for both speed and accuracy. Here&apos;s how it works:
                </p>

                <SafetyPipelineDiagram />

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Stage 1: Feature Extraction</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The raw audio stream is analyzed to extract multiple feature sets simultaneously:
                  spectral characteristics (frequency patterns), prosodic features (pitch and rhythm),
                  semantic embeddings (content meaning), and temporal patterns (timing structures).
                  This multi-dimensional analysis captures information that would be lost in simple
                  transcription.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Stage 2: Parallel Detection Models</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Three specialized models run in parallel on the extracted features. The <strong>Injection
                    Detector</strong> identifies malicious commands embedded in audio. The <strong>Deepfake
                      Detector</strong> verifies voice authenticity. The <strong>Policy Validator</strong> ensures
                  requests comply with your defined guardrails. Each model produces a confidence score.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Stage 3: Decision & Enforcement</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Based on the combined model outputs, ProofLayer makes a real-time decision: allow the
                  request to proceed, flag it for review, or block it entirely. These thresholds are
                  configurable&mdash;you control the sensitivity based on your risk tolerance.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Stage 4: Audit Logging</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Every decision is logged with full context: timestamp, session ID, the action taken,
                  confidence scores, and the reasoning. This creates a complete audit trail for compliance
                  purposes and helps you understand how your safety policies are performing in production.
                </p>
              </motion.div>

              {/* Section: Integration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="integration" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Integration: One Line
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We&apos;ve obsessed over making integration as simple as possible. If you&apos;re already
                  using WebSocket-based voice streaming, you can add ProofLayer in literally one line:
                </p>

                <div className="rounded-2xl border border-gray-100/80 bg-white overflow-hidden shadow-lg my-8">
                  {/* Terminal header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />
                      </div>
                      <span className="text-xs text-gray-500 font-mono ml-2">config.xml</span>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-indigo-500" />
                          <span className="text-indigo-500">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code content */}
                  <div className="p-6 bg-gray-900">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code>
                        <span className="text-gray-500">&lt;</span>
                        <span className="text-indigo-400">Stream</span>
                        {" "}
                        <span className="text-indigo-400">url</span>
                        <span className="text-gray-500">=</span>
                        <span className="text-amber-300">&quot;wss://prooflayer.com/v1&quot;</span>
                        {" "}
                        <span className="text-gray-500">/&gt;</span>
                      </code>
                    </pre>
                  </div>

                  {/* Bottom caption */}
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      That&apos;s it. One line to protect every voice interaction.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  ProofLayer works with all major voice providers:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
                  {[
                    { name: "Twilio", desc: "Media Streams" },
                    { name: "OpenAI", desc: "Realtime API" },
                    { name: "Google", desc: "Gemini Audio" },
                    { name: "LiveKit", desc: "WebRTC" },
                  ].map((provider, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-2xl bg-white border border-gray-100/80 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-sm font-medium text-gray-900">{provider.name}</span>
                      <span className="text-xs text-gray-500">{provider.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Conclusion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 id="future" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  The Future of Voice AI Security
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Voice AI is no longer a novelty&mdash;it&apos;s becoming critical infrastructure. Healthcare
                  providers use voice agents for patient intake. Financial institutions use them for
                  customer service. Enterprises use them for internal support systems. The stakes are
                  real, and the attack surface is expanding.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Traditional text-based security tools weren&apos;t designed for this world. They can&apos;t
                  detect deepfakes. They can&apos;t identify audio-level attacks. They can&apos;t verify speaker
                  identity. They&apos;re playing defense with one hand tied behind their back.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  ProofLayer was built from the ground up for the audio-native era. We believe security
                  should be invisible to users but comprehensive in its protection. We believe compliance
                  shouldn&apos;t require an army of engineers. And we believe that protecting voice AI
                  shouldn&apos;t require sacrificing performance.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The enterprises deploying voice AI today face a choice: retrofit text-based security tools that were never designed for audio, or adopt purpose-built audio-native security from the start. The incidents we&apos;ve documented across deepfake fraud, voice injection, and prompt hijacking all share one common thread&mdash;they exploit the gap between what text-based tools can see and what actually happens at the audio level.
                </p>

                <p className="text-xl font-medium text-gray-900 mb-8">
                  Diligence, automated. That&apos;s the future of voice AI security.
                </p>

                <AuthorCard author={authors.engineering} />
                <RelatedPosts currentSlug="voice-ai-security" />
              </motion.div>
            </div>

            {/* Sidebar with TOC */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>
          </div>
        </div>
      </article>

      <FinalCta />
      <Footer />
    </main>
  )
}
