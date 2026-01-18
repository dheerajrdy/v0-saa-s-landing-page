"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { SpectralVisualizer } from "@/components/blog/spectral-visualizer"
import { SynthesisEvolutionTimeline } from "@/components/blog/synthesis-evolution-timeline"
import { DeepfakePipelineDiagram } from "@/components/blog/deepfake-pipeline-diagram"
import { ProsodicMetricsViz } from "@/components/blog/prosodic-metrics-viz"
import { EerComparisonChart } from "@/components/blog/eer-comparison-chart"
import { AdversarialRobustnessChart } from "@/components/blog/adversarial-robustness-chart"
import { FinalCta } from "@/components/final-cta"

export default function DetectingDeepfakesPost() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] text-gray-900">
            <Header />

            <BlogHeader
                title="The Spectral Lie: Detecting Deepfakes"
                subtitle="Why Your Ears (and Your Text Filters) Can't Catch AI-Generated Voices"
                category="Technical Research"
                categoryColor="rose"
                readTime="15 min read"
                date="January 18, 2026"
            />

            {/* Article Content */}
            <article className="px-4 pb-24 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    {/* Executive Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="prose-section"
                    >
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-rose-500 pl-6 italic">
                            The auditory landscape of digital trust has undergone a seismic shift. A mere three seconds
                            of reference audio&mdash;scraped from a voicemail, a TikTok, or a Zoom call&mdash;is now
                            sufficient to clone any voice with enough precision to bypass human perception and legacy
                            biometric security layers.
                        </p>

                        <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 mb-8">
                            <h4 className="font-semibold text-gray-900 mb-4">Executive Summary</h4>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                                    <span><strong>The &quot;Spectral Lie&quot;</strong> refers to audio that is semantically and perceptually authentic to the human ear but structurally artificial at the signal processing level.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                                    <span><strong>Human auditory perception</strong> is evolutionarily ill-equipped to detect modern deepfakes. Our brains prioritize semantic coherence over micro-structural signal integrity.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                                    <span><strong>Text-based filters are blind</strong> to the threat. When audio becomes transcription, you lose exactly the information needed to detect attacks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                                    <span><strong>Defense requires spectral forensics</strong>&mdash;analyzing the waveform itself for the mathematical inconsistencies that generative models inevitably introduce.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Section 1: The Epoch of Synthetic Deception */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                            1. The Epoch of Synthetic Deception
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The trajectory of speech synthesis has been asymptotic, aiming toward a point of
                            &quot;perceptual indistinguishability.&quot; For decades, the primary goal was <em>intelligibility</em>.
                            Today, the goal is <em>deception</em>&mdash;or, in benign terms, &quot;naturalness.&quot;
                        </p>

                        <SynthesisEvolutionTimeline />

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            From Concatenation to Neural Synthesis
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            To understand how to detect a deepfake, one must first understand the mechanism of its creation.
                            The history of synthesis is a history of <strong>reducing artifacts</strong>:
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="rounded-lg bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Concatenative Synthesis (1960s-1990s)</h4>
                                <p className="text-sm text-gray-600">
                                    Stitched together pre-recorded snippets of phonemes. The artifacts were audible &quot;glitches&quot;
                                    at join points&mdash;easily detectable by human ears due to lack of prosodic continuity.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Parametric Synthesis (HMM Era)</h4>
                                <p className="text-sm text-gray-600">
                                    Generated speech from mathematical models. Smooth but &quot;buzzy&quot; or robotic due to simplified
                                    vocoding that couldn&apos;t replicate the complex phase structure of human speech.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Neural Synthesis (2016+)</h4>
                                <p className="text-sm text-gray-600">
                                    WaveNet marked the turning point&mdash;modeling raw waveforms sample-by-sample. Modern systems
                                    use an acoustic model (text → mel-spectrogram) plus a neural vocoder (mel → waveform).
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl bg-rose-50 border border-rose-200 p-6 my-8">
                            <h4 className="font-semibold text-rose-900 mb-3">The Three-Second Threshold</h4>
                            <p className="text-rose-800">
                                Zero-shot voice conversion models (VALL-E, XTTS) can now infer a speaker embedding&mdash;a
                                high-dimensional vector representing unique timbre, pitch, and cadence&mdash;from just
                                3 seconds of reference audio. The &quot;training data&quot; for an attack is no longer a studio
                                session; it&apos;s a voicemail greeting, a TikTok video, or a Zoom call snippet.
                            </p>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The democratization of these tools means high-grade spoofing is no longer the domain of
                            state-level actors. It&apos;s available via open-source repositories and commercial APIs.
                            &quot;Reality&quot; is now a service that can be purchased.
                        </p>
                    </motion.div>

                    {/* Section 2: Anatomy of the Lie */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                            2. The Anatomy of the Lie: Generative Mechanics
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The &quot;Spectral Lie&quot; is not a single anomaly but a composite of artifacts deposited at
                            various stages of the generation pipeline. By analyzing these stages, we uncover the
                            fundamental limitations of current AI&mdash;which serve as the basis for detection.
                        </p>

                        <DeepfakePipelineDiagram />

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            Transposed Convolution and Checkerboard Artifacts
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            GAN-based vocoders (HiFi-GAN, MelGAN) use <strong>transposed convolutions</strong> to
                            up-sample from low-resolution spectrograms to high-resolution waveforms. When the kernel
                            size isn&apos;t perfectly divisible by the stride, the model produces uneven overlap:
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">The Mechanism</h4>
                                <p className="text-sm text-gray-600">
                                    The neural network &quot;paints&quot; audio in blocks. Where these blocks overlap unevenly,
                                    certain frequencies are amplified or dampened in a regular, grid-like pattern.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Perceptual Masking</h4>
                                <p className="text-sm text-gray-600">
                                    These artifacts are often masked by speech loudness or interpreted as slight
                                    background noise&mdash;invisible to humans but visible in high-resolution spectral analysis.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            The Mel-Spectrogram Bottleneck
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Most generative models use mel-spectrograms as intermediate representation. This perceptual
                            scale explicitly discards fine-grained phase information and compresses high-frequency detail.
                            When the vocoder reconstructs the waveform, it must <em>invent</em> the missing details:
                        </p>

                        <div className="rounded-xl bg-amber-50 border border-amber-100 p-6 my-8">
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
                    </motion.div>

                    {/* Section 3: The Gap - Text Filters Can't See */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                            3. The Gap: Why Text Filters Can&apos;t See the Threat
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

                        <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 my-8">
                            <h4 className="font-semibold text-gray-900 mb-4">What Gets Lost in Transcription:</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-white rounded-lg border border-gray-100">
                                    <div className="font-medium text-gray-900 mb-1">Spectral Artifacts</div>
                                    <div className="text-sm text-gray-600">Frequency anomalies from neural vocoder synthesis</div>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-gray-100">
                                    <div className="font-medium text-gray-900 mb-1">Phase Information</div>
                                    <div className="text-sm text-gray-600">Timing relationships between frequency components</div>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-gray-100">
                                    <div className="font-medium text-gray-900 mb-1">Prosodic Micro-deviations</div>
                                    <div className="text-sm text-gray-600">Jitter, shimmer, and F₀ contour patterns</div>
                                </div>
                                <div className="p-4 bg-white rounded-lg border border-gray-100">
                                    <div className="font-medium text-gray-900 mb-1">Temporal Fingerprints</div>
                                    <div className="text-sm text-gray-600">Frame-level timing artifacts from generation</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            It&apos;s like trying to detect visual deepfakes by only looking at image captions.
                            You&apos;re analyzing the wrong layer of abstraction.
                        </p>
                    </motion.div>

                    {/* Section 4: Spectral Forensics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                            4. Spectral Forensics: Beyond Human Hearing
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Since human ears are unreliable detectors, forensic analysis must rely on signal
                            representations that highlight the specific deficiencies of generative models.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            The Constant Q Transform (CQT) Advantage
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Unlike standard FFT with fixed resolution, the CQT employs geometrically-spaced frequency
                            bins&mdash;higher frequency resolution at low frequencies (for pitch analysis) and higher
                            temporal resolution at high frequencies (for transient analysis). Studies on ASVspoof 2019
                            show CQT-based systems consistently outperform mel-spectrogram approaches.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            Raw Waveform Analysis: The Smoking Gun
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The most powerful approach bypasses time-frequency conversion entirely. Models like RawNet2
                            and AASIST operate directly on the time-domain signal, preserving all phase information.
                            By letting the first convolutional layer <em>learn</em> the optimal filterbank, these models
                            often focus on the sub-band regions where vocoder artifacts are most prevalent.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            Prosodic Forensics: The Behavior of the Lie
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            While spectral analysis hunts for technical flaws, prosodic analysis hunts for
                            <strong> behavioral flaws</strong>. Generative AI models are statistical averagers&mdash;
                            they produce speech that is the &quot;average&quot; of training data, often &quot;too perfect&quot; and
                            lacking natural physiological variation.
                        </p>

                        <ProsodicMetricsViz />

                        <div className="rounded-xl bg-violet-50 border border-violet-100 p-6 my-8">
                            <h4 className="font-semibold text-violet-900 mb-3">Explainability Advantage</h4>
                            <p className="text-violet-800">
                                Prosodic analysis offers <strong>explainability</strong>. By integrating attention mechanisms
                                that focus on prosodic features, forensic systems can state: &quot;This audio is fake because
                                the pitch micro-tremors are statistically absent&quot;&mdash;rather than simply &quot;the neural
                                network says it&apos;s fake.&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 5: State-of-the-Art Architectures */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                            5. State-of-the-Art Detection Architectures
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The field has evolved from Gaussian Mixture Models to complex Self-Supervised Learning (SSL)
                            architectures. The most significant leap came from models pre-trained on tens of thousands
                            of hours of unlabeled audio.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            The SSL Revolution: HuBERT and WavLM
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">HuBERT</h4>
                                <p className="text-sm text-gray-600">
                                    Trained to predict discrete hidden units from masked audio. Excels at phonetic
                                    representations and is sensitive to micro-phonetic artifacts from vocoders.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">WavLM</h4>
                                <p className="text-sm text-gray-600">
                                    Extends HuBERT with a denoising task. Learns robust speaker identity and background
                                    acoustics&mdash;if background noise sounds &quot;looped&quot; or artificial, WavLM detects it.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            NeXt-TDNN: The Current Champion
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Achieving an Equal Error Rate (EER) of <strong>0.42%</strong> on ASVspoof 2019 LA, NeXt-TDNN
                            represents the pinnacle of current engineering:
                        </p>

                        <ul className="space-y-3 text-gray-700 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                                <span><strong>Feature Fusion:</strong> Extracts 1024-dim embeddings from the 8th Transformer layer of both HuBERT-Large and WavLM-Large</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                                <span><strong>Attentional Multi-Feature Fusion (AMFF):</strong> Dynamically weights HuBERT vs. WavLM streams per frame</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                                <span><strong>TS-ConvNeXt Backbone:</strong> Intra-frame FFN + inter-frame depth-wise temporal convolution</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                                <span><strong>Efficient Channel Attention (ECA):</strong> Recalibrates channel saliency without heavy computation</span>
                            </li>
                        </ul>

                        <EerComparisonChart />
                    </motion.div>

                    {/* Section 6: Adversarial Frontier */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                            6. The Adversarial Frontier: The Arms Race
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            As detection improves, attackers adapt. The greatest threat to current models isn&apos;t
                            better generative quality&mdash;it&apos;s <strong>adversarial evasion</strong>. The Spectral
                            Lie can be camouflaged.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-4">
                            Gradient-Based Attacks
                        </h3>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Adversarial attacks add mathematically calculated noise patterns to deepfake audio.
                            This noise is often inaudible to humans but disastrous for neural networks:
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="rounded-lg bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">FGSM (Fast Gradient Sign Method)</h4>
                                <p className="text-sm text-gray-600">
                                    Calculates the gradient of the detector&apos;s loss function and adds perturbation
                                    in the direction that maximizes error&mdash;pushing samples across the decision boundary.
                                </p>
                            </div>
                            <div className="rounded-lg bg-white border border-gray-200 p-5">
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
                    </motion.div>

                    {/* Section 7: Engineering for Real-Time */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                            7. Engineering for Real-Time Defense
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Theoretical capability is useless if it can&apos;t be deployed in real-time. For live
                            telephony, total system latency must stay under 200-300ms to avoid disrupting conversation.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 my-8">
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">WebSocket Transport</h4>
                                <p className="text-sm text-gray-600">
                                    Essential for bi-directional, full-duplex streaming. The client streams audio chunks
                                    while the server returns probability scores in near real-time.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Async Processing</h4>
                                <p className="text-sm text-gray-600">
                                    Using asyncio or goroutines for non-blocking inference. While one chunk is on GPU,
                                    the next is buffering from the network socket.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Chunking Strategy</h4>
                                <p className="text-sm text-gray-600">
                                    Trade-off between latency and accuracy: smaller chunks (100ms) mean lower latency
                                    but less context; larger chunks (4s) mean higher accuracy but noticeable lag.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white border border-gray-200 p-5">
                                <h4 className="font-semibold text-gray-900 mb-2">Smoothing & Voting</h4>
                                <p className="text-sm text-gray-600">
                                    Detection output is a time-series of probabilities. Moving averages or voting
                                    mechanisms prevent false alarms from momentary glitches.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">
                            Conclusion: The Cat and Mouse Game Continues
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

                        <div className="rounded-xl bg-gray-900 text-white p-6 my-8">
                            <h4 className="font-semibold mb-4">The Defense of the Future:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                                    <span><strong>Multi-Modal Fusion:</strong> Combining spectral, prosodic, and visual cues to create defenses no single attack can bypass</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                                    <span><strong>Adversarial Robustness:</strong> Moving beyond &quot;clean&quot; accuracy to &quot;attack-resistant&quot; accuracy via SASV</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                                    <span><strong>Explainability:</strong> Providing forensic evidence beyond &quot;computer says fake&quot;</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-xl font-medium text-gray-900 mb-6">
                            For the enterprise, the message is clear: The ear is easily fooled. The text filter is
                            easily bypassed. Only the waveform itself holds the truth.
                        </p>

                        <p className="text-xl font-medium text-rose-600 mb-8">
                            The era of &quot;trust but verify&quot; is over. In the age of generative AI, we must
                            <strong> verify, then trust</strong>.
                        </p>

                        <div className="border-t border-gray-200 pt-8 mt-8">
                            <p className="text-sm text-gray-500 italic">
                                Authored by the ProofLayer Technical Research Team<br />
                                January 2026
                            </p>
                        </div>
                    </motion.div>
                </div>
            </article>

            <FinalCta />
            <Footer />
        </main>
    )
}
