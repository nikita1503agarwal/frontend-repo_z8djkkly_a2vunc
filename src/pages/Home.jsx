import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-slate-900 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.2),transparent_35%)]"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Your HR Department for a Flat Monthly Fee.</h1>
            <p className="mt-6 text-lg text-blue-200 max-w-2xl">Unlimited HR support, payroll, compliance & hiring — starting at $199/mo. No hourly billing. No hidden fees.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/booking" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 font-semibold">Get a Free HR Assessment</Link>
              <Link to="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-slate-800 hover:bg-slate-700 font-semibold">See Full Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {title:'Unlimited HR Support',desc:'Ask anything, anytime — we’re your on-demand HR team.'},
            {title:'Flat, Transparent Pricing',desc:'Predictable monthly cost. No surprise invoices.'},
            {title:'Payroll Included',desc:'Add payroll when needed — fully handled for you.'},
            {title:'No Hourly Billing Ever',desc:'We believe HR should be proactive and accessible.'},
          ].map((b)=> (
            <div key={b.title} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700">
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-blue-200 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services accordion (simplified as grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold mb-6">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'HR Administration','Compliance & Risk','Documentation','Payroll Administration','Hiring Support','Employee Relations','General HR Support'
          ].map((s)=> (
            <div key={s} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700">
              <h3 className="font-medium">{s}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Packages grid */}
      <section className="bg-slate-950/40 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold mb-8">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {name:'HR Support',price:199,features:['Unlimited HR questions','Employee handbook','Onboarding & offboarding','All HR templates','Policy creation','Compliance guidance','Disciplinary forms & support','Monthly HR check-in','Email + text support','Required labor poster guidance']},
              {name:'HR + Payroll',price:249,features:['Everything in Tier 1','Unlimited payroll administration','PTO tracking','Employee setup','Direct deposit','Payroll compliance monitoring','Quarterly payroll packet']},
              {name:'HR + Payroll + Hiring',price:399,features:['Everything in Tier 1 & 2','Job description writing','Job posting setup','Applicant filtering','Shortlist delivery','Interview coordination','Background check coordination']},
            ].map((p, i)=> (
              <div key={p.name} className={`rounded-2xl border ${i===1?'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]':'border-slate-800'} bg-slate-900 p-6 flex flex-col`}>
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-3xl font-bold">${p.price}<span className="text-sm text-slate-400">/mo</span></span>
                </div>
                <ul className="text-sm text-blue-200 space-y-2 mb-6">
                  {p.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <Link to="/booking" className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 font-semibold">Start My HR Plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-6">What our clients say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["A lifesaver for our 8-person team.","Payroll and HR handled without headaches.","Clear, flat pricing and fast responses."].map((t)=> (
            <div key={t} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700 text-blue-100">“{t}”</div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-4">
          {[
            {q:'Do you bill hourly?',a:'No. We charge a flat monthly rate with unlimited support.'},
            {q:'Can I add payroll later?',a:'Yes. Upgrade or downgrade anytime.'},
            {q:'Do you work with very small teams?',a:'Absolutely. We’re built for 1–20 employee businesses.'},
          ].map((f)=> (
            <div key={f.q} className="p-6 rounded-xl bg-slate-800/60 border border-slate-700">
              <p className="font-medium">{f.q}</p>
              <p className="text-blue-200 text-sm mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
