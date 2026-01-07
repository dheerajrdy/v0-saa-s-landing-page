export function SocialProof() {
  const companies = ["OpenAI", "Anthropic", "Vapi", "LiveKit", "Retell", "Daily"]

  return (
    <section className="border-y border-white/5 bg-[#0a0a0f] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm text-gray-500">Trusted by forward-thinking engineering teams</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((company) => (
            <div
              key={company}
              className="font-mono text-lg font-medium text-gray-600 transition-colors hover:text-gray-400"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
