"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { ForkedStreamDiagram } from "@/components/blog/forked-stream-diagram"
import { GarakIntegrationDiagram } from "@/components/blog/garak-integration-diagram"
import { ArrowRight, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VoiceAISecurityPost() {
  const [copied, setCopied] = useState(false)

  const codeSnippet = `<Stream url="wss://prooflayer.com/v1" />`

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900">
      <Header />

      <BlogHeader
        title="Proof Layer: The Audio-Native Safety Architecture"
        subtitle="The dedicated safety infrastructure for the new Speech-to-Speech AI paradigm"
        category="Engineering"
        categoryColor="violet"
        readTime="10 min read"
        date="January 19, 2026"
      />

      {/* Article Content */}
      <article className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose-section"
          >
            <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-indigo-500 pl-6 italic">
              Proof Layer is a dedicated safety infrastructure designed for the new Speech-to-Speech (S2S) AI paradigm.
              It sits as a "Smart Proxy" between telephony providers and S2S model providers, enabling enterprises
              to deploy voice agents with confidence while maintaining compliance, security, and auditability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              The Problem: The Shift to Audio-Native
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The emergence of native Speech-to-Speech models (Google Gemini 2.5 Flash, OpenAI GPT-4o Realtime) has
              obsoleted the traditional cascaded ASR → LLM → TTS pipeline. While this delivers sub-600ms latency and
              preserves paralinguistic features (tone, emotion, urgency), it introduces critical challenges:
            </p>

            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg my-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Challenge</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">No Text Intermediary</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Traditional text-based guardrails can't intercept the audio stream</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Audio Adversarial Attacks</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Imperceptible noise patterns can force model commands invisible to text analysis</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Voice Cloning / Deepfakes</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Synthetic voices can impersonate authorized speakers</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Emotional Manipulation</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Coercive tone bypasses safety filters designed for polite text</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Compliance Blind Spots</td>
                    <td className="px-3 py-4 text-sm text-gray-500">Enterprises cannot audit raw audio waveforms for regulatory compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Section: Architecture Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Architecture Overview
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proof Layer operates as a <strong>"Man-in-the-Middle" (MitM) WebSocket Proxy</strong> that intercepts,
              analyzes, and intervenes in real-time voice conversations.
            </p>

            <ArchitectureDiagram />

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The "Forked Stream" Topology</h3>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="flex gap-3">
                <span className="flex-none font-bold text-indigo-600">1. Ingress:</span>
                <span>Proof Layer receives WebSocket connection, authenticates tenant.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-none font-bold text-indigo-600">2. Junction:</span>
                <span>
                  Binary audio frames are duplicated in memory.
                  <br />
                  <strong>Stream A (Inference):</strong> Forwarded immediately to S2S model (~0ms added latency).
                  <br />
                  <strong>Stream B (Safety):</strong> Pushed to internal Analysis Ring Buffer.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-none font-bold text-indigo-600">3. Egress:</span>
                <span>
                  Model responses pass through a Jitter Buffer (50-100ms) for safety checks.
                  Violations trigger packet drop + safety refusal audio injection.
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Section: Safety Engine Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Safety Engine Components
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When audio flows through Proof Layer, it passes through three specialized modules designed for different aspects of voice safety.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">1. Semantic Safety</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>Shadow ASR:</strong> High-speed streaming transcription (Whisper Turbo / NVIDIA Canary)</li>
                  <li>• <strong>NeMo Guardrails:</strong> Colang-based policy enforcement for jailbreak detection</li>
                  <li>• <strong>Transcript Sync:</strong> Real-time text feed to compliance infrastructure</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">2. Acoustic Safety</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>Deepfake Detection:</strong> Voice print comparison, synthetic artifact ID</li>
                  <li>• <strong>Emotion/Urgency:</strong> Wav2Vec2 models for arousal/valence scoring</li>
                  <li>• <strong>Vishing Detection:</strong> High-arousal + context triggers alerts</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">3. Tool Governance</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>Function Intercept:</strong> Parse all JSON tool-use payloads</li>
                  <li>• <strong>Policy Enforcement:</strong> Validate arguments (e.g., amount &lt; 1000)</li>
                  <li>• <strong>Schema Correction:</strong> Reject/correct malformed outputs</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section: Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Integrations & Red-Teaming
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proof Layer integrates with industry-standard tools to provide comprehensive coverage from CI/CD to runtime.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Garak Integration (Voice Red-Teaming)</h3>
              <p className="text-gray-700 mb-4">
                Proof Layer acts as a translation adapter for Garak, enabling it to probe voice agents:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                <li>Garak generates text probes</li>
                <li>Proof Layer synthesizes multiple audio variants (stress, accent, whisper)</li>
                <li>Audio attacks sent to voice agent via proxy</li>
                <li>Responses captured, transcribed, and fed back to Garak detectors</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Promptfoo Integration</h3>
            <div className="p-6 bg-gray-900 rounded-xl overflow-x-auto mb-8">
              <pre className="text-sm font-mono text-gray-100">
                <code>{`# promptfooconfig.yaml
providers:
  - id: prooflayer
    config:
      endpoint: https://api.prooflayer.com/eval`}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Section: Use Case Walkthrough */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Use Case: Airline Urgent Change
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Scenario: User calls airline to change flight with high-stress voice.
            </p>

            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-12">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Step</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Proof Layer Response</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="py-4 pl-4 font-medium text-gray-900">1</td>
                    <td className="px-3 text-gray-500">Call connects via Twilio</td>
                    <td className="px-3 text-gray-500">Proxy authenticates, opens backend to OpenAI</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 font-medium text-gray-900">2</td>
                    <td className="px-3 text-gray-500">User: "I need to change my flight... emergency!"</td>
                    <td className="px-3 text-gray-500">Fork audio: Fast path → model, Safety path → analysis</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 font-medium text-gray-900">3</td>
                    <td className="px-3 text-gray-500">Acoustic module detects urgency</td>
                    <td className="px-3 text-gray-500">Sets <code>$user_mood = "anxious"</code></td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 font-medium text-gray-900">4</td>
                    <td className="px-3 text-gray-500">Model calls <code>change_flight(waive_fee: true)</code></td>
                    <td className="px-3 text-indigo-600 font-medium">Proxy holds message - Policy violation detected</td>
                  </tr>
                  <tr>
                    <td className="py-4 pl-4 font-medium text-gray-900">5</td>
                    <td className="px-3 text-gray-500">Policy: "Cannot waive fees without approval"</td>
                    <td className="px-3 text-gray-500">Modifies payload to <code>waive_fee: false</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              The Moat: Audio-Native Security
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Proof Layer relies on verifiable data and network effects.
              By combining <strong>Paralinguistic Threat Detection</strong> (using distilled Wav2Vec2 models to detect anger or fear)
              with <strong>WaveGuard</strong> adversarial defense (comparing parallel streams for divergence),
              we act not just as a compliance proxy, but as a verifiable trust network.
            </p>
          </motion.div>


        </div>
      </article>

      <Footer />
    </main>
  )
}
