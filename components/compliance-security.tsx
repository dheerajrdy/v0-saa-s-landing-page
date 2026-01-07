import { Shield, Eye, FileText, AlertTriangle } from "lucide-react"

export function ComplianceSecurity() {
  return (
    <section className="border-t border-white/5 bg-[#08080c] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-400">
            <Shield className="h-3 w-3" />
            COMPLIANCE & SECURITY
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Privacy-Preserving by Design</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Edge-first architecture means zero audio leaves your premises. Built for enterprises that can't compromise
            on data sovereignty.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Risk Dashboard mockup */}
          <div className="rounded-xl border border-white/10 bg-[#12121a] p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-sm text-gray-400">Risk Dashboard</span>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs text-green-400">All Systems Normal</span>
              </div>
            </div>

            {/* Risk signals */}
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-green-500/20 p-1.5">
                    <Eye className="h-full w-full text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">PII Detection</div>
                    <div className="text-xs text-gray-500">Real-time redaction active</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-green-400">0 LEAKS</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-cyan-500/20 p-1.5">
                    <AlertTriangle className="h-full w-full text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Fraud Signals</div>
                    <div className="text-xs text-gray-500">Voice cloning detection</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-cyan-400">MONITORING</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded bg-purple-500/20 p-1.5">
                    <FileText className="h-full w-full text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Audit Logs</div>
                    <div className="text-xs text-gray-500">Immutable transaction record</div>
                  </div>
                </div>
                <span className="font-mono text-xs text-purple-400">12,847 EVENTS</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
              {["SOC2", "HIPAA", "GDPR"].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 py-2"
                >
                  <span className="font-mono text-xs font-medium text-gray-400">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Edge deployment diagram */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-[#12121a] p-5">
                <h3 className="mb-2 font-semibold text-white">Edge-First Architecture</h3>
                <p className="text-sm text-gray-400">
                  Deploy our lightweight Eval Bot container (~400MB) directly in your VPC. Process audio locally,
                  transmit only numerical metrics and anonymized gradients.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#12121a] p-5">
                <h3 className="mb-2 font-semibold text-white">Federated Learning</h3>
                <p className="text-sm text-gray-400">
                  Improve your models without exposing sensitive data. Our Projektor methodology enables collaborative
                  training across distributed nodes.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#12121a] p-5">
                <h3 className="mb-2 font-semibold text-white">Zero Audio Egress</h3>
                <p className="text-sm text-gray-400">
                  The waveform never leaves your infrastructure. Evaluations happen at the source, making cloud
                  compliance concerns obsolete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
