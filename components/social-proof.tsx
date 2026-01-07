export function SocialProof() {
  const companies = ["Vapi", "Retell", "LiveKit", "Daily", "OpenAI", "Anthropic"]

  return (
    <section className="border-y border-white/5 bg-[#0a0a0f] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium text-gray-400">
          Trusted by forward-thinking engineering teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center gap-2 font-mono text-lg font-medium text-gray-500 transition-colors hover:text-gray-300"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-500/50" />
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
