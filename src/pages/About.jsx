function About() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6">About FlatRate HR</h1>
        <p className="text-blue-200 mb-6">We exist to make HR simple, affordable, and proactive for small businesses. No hourly billing. No retainers. Just real support when you need it, at a flat monthly rate.</p>
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-blue-200 text-sm">Help small teams stay compliant, organized, and confident — without the cost of a full-time HR manager.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
            <h3 className="font-semibold mb-2">Why FlatRate</h3>
            <p className="text-blue-200 text-sm">Traditional HR consulting charges by the hour. We don’t. Our flat pricing model means you can reach out anytime without worrying about billable minutes.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
            <h3 className="font-semibold mb-2">Meet the team</h3>
            <p className="text-blue-200 text-sm">Seasoned HR practitioners with experience across startups and SMBs, focused on practical, people-first HR.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
