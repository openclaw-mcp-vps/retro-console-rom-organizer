export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Retro Gaming Tools
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Organize Your{' '}
          <span className="text-[#58a6ff]">Homebrew ROM</span>{' '}
          Collection
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          A local-first database for cataloging homebrew ROMs, tracking versions, and managing retro game development projects. Auto-scan your file system and extract metadata instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Organizing — $15/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-4 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🗂️', title: 'Auto-Scan Collections', desc: 'Detect and catalog ROMs from your file system automatically.' },
            { icon: '🏷️', title: 'Metadata & Tagging', desc: 'Extract platform, region, version info and apply custom tags.' },
            { icon: '📦', title: 'Version Tracking', desc: 'Track development iterations and release history for every project.' },
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited ROM entries',
              'File system auto-scanner',
              'Metadata extraction & tagging',
              'Version history tracking',
              'Export to CSV / JSON',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What platforms and ROM formats are supported?',
              a: 'RetroVault supports any file-based ROM format. It scans your directories and catalogs files by extension, platform tags, and custom metadata — no format restrictions.',
            },
            {
              q: 'Is my data stored locally or in the cloud?',
              a: 'RetroVault is local-first. Your ROM catalog and metadata are stored on your own machine. No files are uploaded to any server.',
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no hidden fees.',
            },
          ].map((item) => (
            <div key={item.q} className="p-6 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} RetroVault. All rights reserved.
      </footer>
    </main>
  )
}
