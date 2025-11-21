import { useState } from 'react'

function Booking() {
  const [email, setEmail] = useState('')

  const calendlyUrl = 'https://calendly.com/' // replace with actual link anytime

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6">Schedule Your Free HR Assessment Call</h1>
        <p className="text-blue-200 mb-6">Pick a time that works best for you. We’ll review your current HR setup, risks, and quick wins.</p>

        <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700 mb-8">
          <label className="block text-sm mb-2">Prefer email first?</label>
          <div className="flex gap-2">
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@company.com" className="flex-1 px-3 py-2 rounded bg-slate-900 border border-slate-700 text-white placeholder-slate-500"/>
            <a href={`/contact?email=${encodeURIComponent(email)}`} className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600">Send details</a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50">
          <iframe title="Calendly" src={calendlyUrl} className="w-full h-[700px]" />
        </div>
      </div>
    </div>
  )
}

export default Booking
