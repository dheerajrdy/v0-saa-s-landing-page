"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { SpectralVisualizer } from "@/components/blog/spectral-visualizer"
import { DeepfakePipelineDiagram } from "@/components/blog/deepfake-pipeline-diagram"
import { ProsodicMetricsViz } from "@/components/blog/prosodic-metrics-viz"
import { EerComparisonChart } from "@/components/blog/eer-comparison-chart"
import { AdversarialRobustnessChart } from "@/components/blog/adversarial-robustness-chart"
import { FinalCta } from "@/components/final-cta"
import { ReadingProgressBar } from "@/components/blog/reading-progress-bar"
import { TableOfContents, type TocItem } from "@/components/blog/table-of-contents"
import { InlineCta } from "@/components/blog/inline-cta"
import { AuthorCard } from "@/components/blog/author-card"
import { RelatedPosts } from "@/components/blog/related-posts"
import { authors } from "@/lib/blog-data"

const tocItems: TocItem[] = [
  { id: "crisis", title: "The Voice AI Security Crisis", level: 2 },
  { id: "text-filters-fail", title: "Why Text Filters Fail", level: 2 },
  { id: "spectral-forensics", title: "The Science of Spectral Forensics", level: 2 },
  { id: "approach", title: "Our Approach: Dual-Task Architecture", level: 2 },
  { id: "architecture", title: "Architecture Deep Dive", level: 2 },
  { id: "results-deepfake", title: "Results: Deepfake Detection", level: 2 },
  { id: "results-safety", title: "Results: Content Safety", level: 2 },
  { id: "production", title: "Production Deployment & Latency", level: 2 },
  { id: "adversarial", title: "Adversarial Robustness", level: 2 },
  { id: "limitations", title: "Limitations & Ongoing Work", level: 2 },
  { id: "whats-next", title: "What\u2019s Next", level: 2 },
]

export default function DeepfakeDetectionPost() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <ReadingProgressBar />

      <BlogHeader
        title="Real-Time Deepfake Detection Without STT: A Technical Deep Dive"
        subtitle="How audio-first guardrails outperform text-based approaches for voice security"
        category="Technical Research"
        categoryColor="violet"
        readTime="18 min read"
        date="January 30, 2026"
      />

      <article className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl lg:grid lg:max-w-none lg:grid-cols-[1fr_220px] lg:gap-12">
            {/* Main Content */}
            <div className="max-w-3xl">

              {/* Section 1: The Voice AI Security Crisis */}
              <motion.div
                id="crisis"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose-section scroll-mt-24 mb-16"
              >
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  The Voice AI Security Crisis
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-violet-500 pl-6 italic">
                  A mere three seconds of reference audio&mdash;scraped from a voicemail, a TikTok, or
                  a Zoom call&mdash;is now sufficient to clone any voice with enough precision to bypass
                  human perception and legacy biometric security layers.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Voice-based AI systems are everywhere&mdash;from customer service bots to voice assistants,
                  from authentication systems to content moderation. But as these systems become more
                  sophisticated, so do the attacks against them.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Banking Fraud</h4>
                    <p className="text-sm text-gray-600">
                      Attackers using deepfake voices to bypass voice authentication systems, leading to millions in losses
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Social Engineering</h4>
                    <p className="text-sm text-gray-600">
                      Synthetic voices impersonating executives to authorize fraudulent wire transfers
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Content Manipulation</h4>
                    <p className="text-sm text-gray-600">
                      AI-generated audio spreading misinformation at scale, eroding digital trust
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The challenge isn&apos;t just detecting these attacks&mdash;it&apos;s doing so <strong>in real-time</strong>,{" "}
                  <strong>without text conversion</strong>, and with <strong>near-zero false negatives</strong> in
                  production environments where mistakes can be catastrophic.
                </p>

                <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-6 shadow-sm">
                  <h4 className="font-semibold text-violet-900 mb-3">The Three-Second Threshold</h4>
                  <p className="text-violet-800">
                    Zero-shot voice conversion models (VALL-E, XTTS) can infer a speaker embedding&mdash;a
                    high-dimensional vector representing unique timbre, pitch, and cadence&mdash;from just
                    3 seconds of reference audio. The &quot;training data&quot; for an attack is a voicemail greeting,
                    a TikTok video, or a Zoom call snippet. &quot;Reality&quot; is now a service that can be purchased.
                  </p>
                </div>
              </motion.div>

              {/* Section 2: Why Text Filters Fail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="text-filters-fail" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Why Text Filters Fail: The STT Gap
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Here&apos;s the uncomfortable truth about most AI security guardrails: they operate at the
                  text level. Audio comes in, gets transcribed, and then the transcription is analyzed.
                  This approach fails catastrophically against deepfakes.
                </p>

                <SpectralVisualizer />

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  If a deepfake says &quot;Hello,&quot; the transcription is just &quot;Hello.&quot; There&apos;s nothing malicious
                  about the word itself. The threat isn&apos;t in the <em>content</em>&mdash;it&apos;s in the <em>voice</em>.
                  When you convert audio to text, you throw away the exact information needed to detect the attack.
                </p>

                <div className="rounded-2xl border border-gray-100/80 bg-white p-6 shadow-sm mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What Gets Lost in Transcription</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">Spectral Artifacts</div>
                      <div className="text-sm text-gray-600">Frequency anomalies from neural vocoder synthesis</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">Phase Information</div>
                      <div className="text-sm text-gray-600">Timing relationships between frequency components</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">Prosodic Micro-deviations</div>
                      <div className="text-sm text-gray-600">Jitter, shimmer, and F&#8320; contour patterns</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="font-medium text-gray-900 mb-1">Temporal Fingerprints</div>
                      <div className="text-sm text-gray-600">Frame-level timing artifacts from generation</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Traditional voice safety follows this pattern:
                </p>

                <pre className="bg-gray-950 text-gray-100 p-6 rounded-xl text-sm mb-8 shadow-lg font-mono overflow-x-auto">
{`Audio → STT → Text Analysis → Classification

// Critical signals lost at the STT step:
// - Vocal characteristics, emotion, audio artifacts
// - Spectral fingerprints of neural vocoders
// - Phase discontinuities at frame boundaries`}
                </pre>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  It&apos;s like trying to detect visual deepfakes by only looking at image captions.
                  You&apos;re analyzing the wrong layer of abstraction.
                </p>

                <InlineCta
                  headline="Don't let deepfakes bypass your security"
                  subtext="ProofLayer detects synthetic audio in real-time, analyzing the waveform — not just the words."
                />
              </motion.div>

              {/* Section 3: The Science of Spectral Forensics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="spectral-forensics" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  The Science of Spectral Forensics
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To understand how to detect a deepfake, you must first understand the mechanism of its
                  creation. Modern synthesis uses an acoustic model (text &rarr; mel-spectrogram) plus a
                  neural vocoder (mel &rarr; waveform). Each stage deposits artifacts.
                </p>

                <DeepfakePipelineDiagram />

                <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                  Checkerboard Artifacts from Transposed Convolution
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  GAN-based vocoders (HiFi-GAN, MelGAN) use <strong>transposed convolutions</strong> to
                  up-sample from low-resolution spectrograms to high-resolution waveforms. When the kernel
                  size isn&apos;t perfectly divisible by the stride, the model produces uneven overlap&mdash;creating
                  a regular, grid-like pattern of amplified or dampened frequencies invisible to human ears
                  but visible in high-resolution spectral analysis.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                  The Mel-Spectrogram Bottleneck
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Most generative models use mel-spectrograms as an intermediate representation. This
                  perceptual scale explicitly discards fine-grained phase information and compresses
                  high-frequency detail. When the vocoder reconstructs the waveform, it must <em>invent</em> the
                  missing details.
                </p>

                <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm my-8">
                  <h4 className="font-semibold text-amber-900 mb-3">The &quot;Smear&quot; Effect</h4>
                  <p className="text-amber-800">
                    Deepfakes exhibit &quot;smearing&quot; or blurring of high-frequency textures. In organic speech,
                    fricatives (s, f, sh) have sharp spectral energy extending into ultrasonic ranges.
                    In deepfakes, these appear smoothed or patchy&mdash;the texture is mathematically <em>too clean</em>.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                  Phase Discontinuity
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Human speech is a continuous physiological process&mdash;seamless airflow, vocal cord vibration,
                  and resonance. Neural vocoders generate audio in discrete frames (5-30ms), and while windowing
                  functions smooth transitions, subtle phase discontinuities remain at frame boundaries.
                  These result in microscopic &quot;clicks&quot;&mdash;regular high-frequency anomalies corresponding
                  to the model&apos;s frame rate.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                  Prosodic Forensics: The Behavioral Signal
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  While spectral analysis hunts for technical flaws, prosodic analysis hunts for
                  <strong> behavioral flaws</strong>. Generative models are statistical averagers&mdash;they produce
                  speech that is the &quot;average&quot; of training data, often &quot;too perfect&quot; and lacking
                  natural physiological variation.
                </p>

                <ProsodicMetricsViz />

                <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/50 p-6 shadow-sm my-8">
                  <h4 className="font-semibold text-indigo-900 mb-3">Explainability Advantage</h4>
                  <p className="text-indigo-800">
                    Prosodic analysis offers <strong>explainability</strong>. By integrating attention mechanisms
                    that focus on prosodic features, forensic systems can state: &quot;This audio is fake because
                    the pitch micro-tremors are statistically absent&quot;&mdash;rather than simply &quot;the neural
                    network says it&apos;s fake.&quot;
                  </p>
                </div>
              </motion.div>

              {/* Section 4: Our Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="approach" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Our Approach: Dual-Task Architecture
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We designed a dual-task system addressing the two critical security challenges in voice AI:
                </p>

                <div className="space-y-8 mb-8">
                  {/* Task 1 */}
                  <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Task 1: Real vs Fake Detection (ASVspoof)
                    </h3>

                    <p className="text-gray-700 mb-4">
                      <strong>The Problem:</strong> Distinguishing genuine human speech from AI-generated or manipulated audio.
                    </p>

                    <p className="text-gray-700 mb-4">
                      Using the ASVspoof 2019 dataset&mdash;a widely-used benchmark for anti-spoofing research&mdash;we
                      trained a binary classifier to detect voice cloning attacks, speech synthesis (TTS) attacks,
                      voice conversion attacks, and replay attacks.
                    </p>

                    <div className="rounded-xl bg-white p-4 border border-violet-200">
                      <p className="text-lg font-semibold text-violet-900">
                        Result: <span className="text-2xl">100.0% F1 score</span> on ASVspoof 2019 LA evaluation set
                      </p>
                      <p className="text-sm text-violet-700 mt-1">
                        See Limitations section for important context on this benchmark
                      </p>
                    </div>
                  </div>

                  {/* Task 2 */}
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Task 2: Safe vs Unsafe Content Detection (Nemotron)
                    </h3>

                    <p className="text-gray-700 mb-4">
                      <strong>The Problem:</strong> Identifying harmful audio content&mdash;threats, harassment,
                      toxic speech&mdash;without converting to text.
                    </p>

                    <p className="text-gray-700 mb-4">
                      Using NVIDIA&apos;s Nemotron Safety Audio Dataset, we trained a classifier to detect
                      violent threats, hate speech, sexual harassment, and self-harm promotion directly from audio features.
                    </p>

                    <div className="rounded-xl bg-white p-4 border border-emerald-200">
                      <p className="text-lg font-semibold text-emerald-900">
                        Result: <span className="text-2xl">78.8% F1 score</span>&mdash;a strong baseline for audio-only safety classification
                      </p>
                      <p className="text-sm text-emerald-700 mt-1">
                        We recommend pairing with a lightweight text-based safety check for production use
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 5: Architecture Deep Dive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="architecture" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Architecture Deep Dive
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our approach is built on Microsoft&apos;s <strong>WavLM-base-plus</strong>, a transformer-based
                  audio model that processes raw 16kHz audio without text intermediate, captures fine-grained
                  acoustic features lost in transcription, operates in real-time, and generalizes across languages.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why WavLM?
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Self-Supervised Pre-training</h4>
                    <p className="text-sm text-gray-600">
                      Trained on tens of thousands of hours of unlabeled audio, learning robust representations
                      of speech structure, speaker identity, and background acoustics.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Denoising Task</h4>
                    <p className="text-sm text-gray-600">
                      WavLM extends HuBERT with a denoising objective&mdash;if background noise sounds
                      &quot;looped&quot; or artificial, WavLM detects it. Critical for real-world audio.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  The Model Pipeline
                </h3>

                <pre className="bg-gray-950 text-gray-100 p-6 rounded-xl text-sm mb-8 shadow-lg font-mono overflow-x-auto">
{`Raw Audio (16kHz)
    │
    ▼
WavLM Encoder (768-dim embeddings)
    │
    ▼
Mean Pooling (sequence → fixed vector)
    │
    ▼
Classification Head:
  ├─ Dropout (0.1)
  ├─ Linear (768 → 384)
  ├─ ReLU
  ├─ Dropout (0.1)
  └─ Linear (384 → 2)
    │
    ▼
Binary Classification (Real/Fake or Safe/Unsafe)`}
                </pre>

                <EerComparisonChart />
              </motion.div>

              {/* Section 6: Results — Deepfake Detection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="results-deepfake" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Results: Deepfake Detection
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our ASVspoof model achieved <strong className="text-violet-600">100% F1 score</strong> on the
                  ASVspoof 2019 LA evaluation set. This means zero false positives and zero false negatives
                  on the benchmark&apos;s known attack patterns.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Precision</p>
                    <p className="text-3xl font-bold text-violet-900">100%</p>
                    <p className="text-xs text-gray-500 mt-1">Zero false positives</p>
                  </div>
                  <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Recall</p>
                    <p className="text-3xl font-bold text-violet-900">100%</p>
                    <p className="text-xs text-gray-500 mt-1">Zero false negatives</p>
                  </div>
                  <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">F1 Score</p>
                    <p className="text-3xl font-bold text-violet-900">100%</p>
                    <p className="text-xs text-gray-500 mt-1">On ASVspoof 2019 LA</p>
                  </div>
                  <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">EER</p>
                    <p className="text-3xl font-bold text-violet-900">0.00%</p>
                    <p className="text-xs text-gray-500 mt-1">Equal error rate</p>
                  </div>
                </div>

                {/* Training Table */}
                <div className="rounded-2xl border border-gray-100/80 overflow-hidden mb-6 shadow-sm">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-900">Training Progression (ASVspoof)</h4>
                    <p className="text-sm text-gray-600 mt-1">Validation accuracy reached 100% by epoch 1</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Epoch</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Train Loss</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Val Loss</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Val Accuracy</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Val F1</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900 font-medium">1</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.146</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.002</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="px-4 py-3 text-gray-900 font-medium">2</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.030</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.000</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900 font-medium">3</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.011</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.000</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="px-4 py-3 text-gray-900 font-medium">4</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.003</td>
                          <td className="px-4 py-3 text-right text-gray-700">0.000</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                          <td className="px-4 py-3 text-right font-semibold text-violet-600">100.0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-2xl border border-violet-200/80 bg-violet-50/50 p-6 shadow-sm">
                  <h4 className="font-semibold text-violet-900 mb-3">Methodology Context</h4>
                  <p className="text-violet-800">
                    These results are on the ASVspoof 2019 LA benchmark, which tests against <strong>known
                    attack patterns</strong> from that era (primarily TTS and voice conversion algorithms available
                    in 2019). While 100% F1 on this benchmark demonstrates the model&apos;s strong capability with
                    established attack types, real-world performance against modern synthesizers requires ongoing
                    evaluation. See the Limitations section below.
                  </p>
                </div>
              </motion.div>

              {/* Section 7: Results — Content Safety */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="results-safety" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Results: Content Safety
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our Nemotron safety model delivered a strong baseline for audio-only content safety:
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Accuracy</p>
                    <p className="text-3xl font-bold text-emerald-900">78.6%</p>
                    <p className="text-xs text-gray-500 mt-1">Across all categories</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Precision</p>
                    <p className="text-3xl font-bold text-emerald-900">79.1%</p>
                    <p className="text-xs text-gray-500 mt-1">Minimizes false alarms</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">Recall</p>
                    <p className="text-3xl font-bold text-emerald-900">78.6%</p>
                    <p className="text-xs text-gray-500 mt-1">Catches harmful content</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-4 shadow-sm">
                    <p className="text-sm text-gray-600 mb-1">F1 Score</p>
                    <p className="text-3xl font-bold text-emerald-900">78.8%</p>
                    <p className="text-xs text-gray-500 mt-1">Strong baseline</p>
                  </div>
                </div>

                {/* Nemotron Training Table */}
                <div className="rounded-2xl border border-gray-100/80 overflow-hidden mb-6 shadow-sm">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-900">Training Progression (Nemotron)</h4>
                    <p className="text-sm text-gray-600 mt-1">Steady improvement over 7 epochs</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-left font-medium text-gray-900">Epoch</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Train Acc</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Val Acc</th>
                          <th className="px-4 py-3 text-right font-medium text-gray-900">Val F1</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900 font-medium">1</td>
                          <td className="px-4 py-3 text-right text-gray-700">53.5%</td>
                          <td className="px-4 py-3 text-right text-gray-700">66.7%</td>
                          <td className="px-4 py-3 text-right text-gray-700">66.7%</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="px-4 py-3 text-gray-900 font-medium">4</td>
                          <td className="px-4 py-3 text-right text-gray-700">66.4%</td>
                          <td className="px-4 py-3 text-right text-gray-700">76.6%</td>
                          <td className="px-4 py-3 text-right text-gray-700">77.0%</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-900 font-medium">6</td>
                          <td className="px-4 py-3 text-right text-gray-700">78.0%</td>
                          <td className="px-4 py-3 text-right font-semibold text-emerald-600">78.6%</td>
                          <td className="px-4 py-3 text-right font-semibold text-emerald-600">78.8%</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="px-4 py-3 text-gray-900 font-medium">7</td>
                          <td className="px-4 py-3 text-right text-gray-700">80.2%</td>
                          <td className="px-4 py-3 text-right font-semibold text-emerald-600">78.6%</td>
                          <td className="px-4 py-3 text-right font-semibold text-emerald-600">78.8%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-6 shadow-sm">
                  <h4 className="font-semibold text-emerald-900 mb-3">Production Recommendation</h4>
                  <p className="text-emerald-800">
                    78.8% F1 represents a strong baseline for audio-only safety classification <strong>without
                    text conversion</strong>. For production deployment, we recommend a <strong>hybrid pipeline</strong>:
                    use the audio classifier as a fast first-pass filter, then route borderline cases through a
                    lightweight text-based safety check for maximum coverage. This approach preserves the latency
                    advantages of audio-first processing while achieving higher overall safety accuracy.
                  </p>
                </div>
              </motion.div>

              <InlineCta
                headline="Want to integrate voice guardrails into your application?"
                subtext="ProofLayer provides enterprise-grade voice AI security with real-time deepfake detection APIs."
              />

              {/* Section 8: Production Deployment & Latency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="production" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Production Deployment &amp; Latency
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Theoretical capability is useless if it can&apos;t be deployed in real-time. For live
                  telephony, total system latency must stay under 200-300ms to avoid disrupting conversation.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Latency Benchmarks
                </h3>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm text-center">
                    <p className="text-sm text-gray-600 mb-1">GPU Inference</p>
                    <p className="text-3xl font-bold text-gray-900">10-50ms</p>
                    <p className="text-xs text-gray-500 mt-1">Per request (V100)</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm text-center">
                    <p className="text-sm text-gray-600 mb-1">CPU Inference</p>
                    <p className="text-3xl font-bold text-gray-900">50-200ms</p>
                    <p className="text-xs text-gray-500 mt-1">Per request</p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm text-center">
                    <p className="text-sm text-gray-600 mb-1">Throughput</p>
                    <p className="text-3xl font-bold text-gray-900">1000+</p>
                    <p className="text-xs text-gray-500 mt-1">Requests/sec (V100)</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Infrastructure Design
                </h3>

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">WebSocket Transport</h4>
                    <p className="text-sm text-gray-600">
                      Bi-directional, full-duplex streaming. The client streams audio chunks
                      while the server returns probability scores in near real-time.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Async Processing</h4>
                    <p className="text-sm text-gray-600">
                      Non-blocking inference pipeline. While one chunk is on GPU,
                      the next is buffering from the network socket.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Chunking Strategy</h4>
                    <p className="text-sm text-gray-600">
                      Trade-off between latency and accuracy: smaller chunks (100ms) mean lower latency
                      but less context; larger chunks (4s) mean higher accuracy but noticeable lag.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Stateless Serving</h4>
                    <p className="text-sm text-gray-600">
                      Model size ~400MB (WavLM + classification head). Standard PyTorch/ONNX deployment,
                      no external dependencies, easy horizontal scaling.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 9: Adversarial Robustness */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="adversarial" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Adversarial Robustness
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  As detection improves, attackers adapt. The greatest threat to current models isn&apos;t
                  better generative quality&mdash;it&apos;s <strong>adversarial evasion</strong>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                  Gradient-Based Attacks
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">FGSM (Fast Gradient Sign Method)</h4>
                    <p className="text-sm text-gray-600">
                      Calculates the gradient of the detector&apos;s loss function and adds perturbation
                      in the direction that maximizes error&mdash;pushing samples across the decision boundary.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100/80 bg-white p-5 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">PGD (Projected Gradient Descent)</h4>
                    <p className="text-sm text-gray-600">
                      An iterative, more powerful version of FGSM that finds optimal perturbations
                      to fool the model with minimal perceptible changes.
                    </p>
                  </div>
                </div>

                <AdversarialRobustnessChart />

                <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                  Spoofing-Aware Speaker Verification (SASV)
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The current defense trend is SASV&mdash;integrating ASV (&quot;Is this user X?&quot;) and
                  Countermeasure (&quot;Is this real?&quot;) into a single optimized system. By minimizing
                  the Tandem Detection Cost Function (t-DCF), SASV forces attackers to fool two
                  fundamentally different mathematical models simultaneously.
                </p>

                <InlineCta
                  variant="compact"
                  headline="Stay ahead of adversarial attacks"
                  subtext="ProofLayer continuously updates detection models to counter emerging threats."
                />
              </motion.div>

              {/* Section 10: Limitations & Ongoing Work */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="limitations" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  Limitations &amp; Ongoing Work
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Transparency about limitations is essential for building trust and guiding real-world deployment
                  decisions. Here&apos;s what you should know:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
                    <h4 className="font-semibold text-amber-900 mb-3">Benchmark Age</h4>
                    <p className="text-amber-800">
                      ASVspoof 2019 LA is the most widely-used benchmark for anti-spoofing research, but it
                      was created in 2019. The attack algorithms it contains (primarily TTS and voice conversion
                      from that era) do not represent the latest generation of synthesizers like VALL-E, XTTS, or
                      diffusion-based vocoders. Achieving 100% on this benchmark is a strong signal but not
                      a guarantee of perfect performance against all modern attacks.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
                    <h4 className="font-semibold text-amber-900 mb-3">Generalization Gap</h4>
                    <p className="text-amber-800">
                      Detection models trained on one set of attack algorithms may not generalize perfectly to
                      unseen synthesizers. This is an active area of research across the field. Our approach
                      mitigates this through WavLM&apos;s broad pre-training, but ongoing evaluation against
                      new attack types is required.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 shadow-sm">
                    <h4 className="font-semibold text-amber-900 mb-3">Content Safety Ceiling</h4>
                    <p className="text-amber-800">
                      The 78.8% F1 on content safety reflects the inherent difficulty of classifying nuanced
                      safety categories from audio alone without semantic text analysis. Some categories
                      (e.g., subtle hate speech) are genuinely harder to detect from acoustic features. A
                      hybrid audio+text approach is recommended for production safety classification.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Ongoing Work
                </h3>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">1</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Testing Against Modern Synthesizers</h4>
                      <p className="text-sm text-gray-600">Continuous evaluation against VALL-E, XTTS, Bark, and other recent TTS systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">2</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Adversarial Training</h4>
                      <p className="text-sm text-gray-600">Incorporating adversarial examples into training to improve robustness against evasion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">3</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Multi-Task Learning</h4>
                      <p className="text-sm text-gray-600">Training a single model for both deepfake detection and safety classification to reduce latency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">4</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Explainability</h4>
                      <p className="text-sm text-gray-600">Adding attention visualization and prosodic feature reporting to explain detection decisions</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 11: What's Next */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <h2 id="whats-next" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-16 mb-6 scroll-mt-24">
                  What&apos;s Next
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The &quot;Spectral Lie&quot; is a moving target. As detection models become adept at identifying
                  checkerboard artifacts and phase discontinuities, generative models evolve. Diffusion-based
                  vocoders and end-to-end differentiable signal processing are already reducing these artifacts.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  However, the fundamental principle remains: <strong>synthesis is approximation</strong>.
                  No model can perfectly replicate the infinite complexity of organic physics without
                  introducing statistical anomalies.
                </p>

                <div className="rounded-2xl bg-gray-950 text-white p-6 shadow-lg my-8">
                  <h4 className="font-semibold mb-4">The Defense of the Future</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                      <span><strong>Multi-Modal Fusion:</strong> Combining spectral, prosodic, and visual cues to create defenses no single attack can bypass</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                      <span><strong>Adversarial Robustness:</strong> Moving beyond &quot;clean&quot; accuracy to &quot;attack-resistant&quot; accuracy via SASV</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                      <span><strong>Explainability:</strong> Providing forensic evidence beyond &quot;computer says fake&quot;</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                      <span><strong>Hybrid Pipelines:</strong> Audio-first detection paired with targeted text analysis for complete coverage</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200/80 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Conclusion
                  </h3>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Voice AI security requires a fundamentally different approach than text-based systems. Our results demonstrate that:
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                      <p className="text-gray-700"><strong>Near-perfect deepfake detection is achievable</strong> on established benchmarks with the right architecture</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                      <p className="text-gray-700"><strong>Direct audio processing outperforms STT-based pipelines</strong> in speed and attack resistance</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                      <p className="text-gray-700"><strong>Content safety without text is viable</strong> but benefits from hybrid approaches</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                      <p className="text-gray-700"><strong>Honest benchmarking matters</strong>&mdash;100% on ASVspoof 2019 is a strong starting point, not an endpoint</p>
                    </div>
                  </div>

                  <p className="text-xl font-semibold text-gray-900">
                    The ear is easily fooled. The text filter is easily bypassed. Only the waveform itself holds the truth.
                  </p>
                </div>
              </motion.div>

              {/* Author & Related */}
              <AuthorCard author={authors.research} />
              <RelatedPosts currentSlug="deepfake-detection" />
            </div>

            {/* Sidebar TOC */}
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
