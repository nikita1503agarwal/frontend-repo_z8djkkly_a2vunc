function Pricing() {
  const tiers = [
    {name:'Tier 1 — FlatRate HR Support', price:199, blurb:'For businesses 1–10 employees.', features:['Unlimited HR questions','Employee handbook','Onboarding & offboarding','All HR templates','Policy creation','Compliance guidance','Disciplinary forms & support','Monthly HR check-in','Email + text support','Required labor poster guidance'], excludes:['Payroll','Recruiting add-ons']},
    {name:'Tier 2 — FlatRate HR + Payroll', price:249, blurb:'Ideal for 1–20 employees.', features:['Everything in Tier 1','Unlimited payroll administration','PTO tracking','Employee setup','Direct deposit','Payroll compliance monitoring','Quarterly payroll packet ready for your accountant']},
    {name:'Tier 3 — HR + Payroll + Hiring Support', price:399, blurb:'A mini recruiting department for small business.', features:['Everything in Tier 1 & 2','Job description writing','Job posting setup','Applicant filtering','Shortlist delivery','Basic interview coordination','Background check coordination (pass-through fee)']},
  ]

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Packages & Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={t.name} className={`rounded-2xl border ${i===1?'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]':'border-slate-800'} bg-slate-900 p-6 flex flex-col`}>
              <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
              <p className="text-blue-200 text-sm mb-4">{t.blurb}</p>
              <div className="text-4xl font-bold mb-4">${t.price}<span className="text-sm text-slate-400">/mo</span></div>
              <ul className="text-sm text-blue-200 space-y-2 mb-6 list-disc pl-5">
                {t.features.map(f => <li key={f}>{f}</li>)}
                {t.excludes && t.excludes.length > 0 && (
                  <li className="text-slate-400">Does NOT include: {t.excludes.join(', ')}</li>
                )}
              </ul>
              <a href="/booking" className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 font-semibold">Start My HR Plan</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pricing
