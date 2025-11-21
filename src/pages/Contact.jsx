import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name:'', business_name:'', email:'', phone:'', employees:'', message:''})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const payload = {
        name: form.name,
        business_name: form.business_name,
        email: form.email,
        phone: form.phone,
        employees: parseInt(form.employees || '0', 10),
        message: form.message,
        source: 'contact'
      }
      const res = await fetch(`${base}/api/leads`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus(`Thanks! We received your request. Ref: ${data.id}`)
      setForm({ name:'', business_name:'', email:'', phone:'', employees:'', message:'' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <p className="text-blue-200 mb-8">Tell us about your team and what you need help with.</p>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="px-3 py-2 rounded bg-slate-900 border border-slate-700" required />
            <input name="business_name" value={form.business_name} onChange={handleChange} placeholder="Business name" className="px-3 py-2 rounded bg-slate-900 border border-slate-700" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-3 py-2 rounded bg-slate-900 border border-slate-700" required />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="px-3 py-2 rounded bg-slate-900 border border-slate-700" />
          </div>
          <input name="employees" value={form.employees} onChange={handleChange} placeholder="# Employees" className="px-3 py-2 rounded bg-slate-900 border border-slate-700" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" rows={5} className="w-full px-3 py-2 rounded bg-slate-900 border border-slate-700" />
          <button type="submit" className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-500 font-semibold">Send</button>
          {status && <p className="text-sm text-blue-200">{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
