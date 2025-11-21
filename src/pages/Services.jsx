function Services() {
  const groups = [
    {
      title: 'HR Administration',
      items: ['Unlimited HR questions & guidance','HR policy creation & maintenance','Employee handbook creation','Job descriptions','Offer letters','New hire onboarding','Termination support & compliance','Disciplinary action templates','Incident documentation','Employee file management']
    },
    {
      title: 'Hiring Support (Recruiting-Lite)',
      items: ['Job posting templates','Job distribution (add-on)','Applicant screening','Basic interview guidance']
    },
    {
      title: 'Payroll Administration',
      items: ['Unlimited payroll runs','Employee setup','Direct deposit','PTO tracking','Pay adjustments','Garnishments','Payroll compliance','Quarterly payroll packet preparation']
    },
    {
      title: 'Compliance & Risk Management',
      items: ['Labor law compliance guidance','HR audits','Policy updates','Employee classification review','Required workplace posters guidance','Harassment prevention guidance']
    },
    {
      title: 'Employee Relations',
      items: ['Mediation support','Conflict resolution steps','Performance improvement plans (PIPs)','Coaching managers']
    },
    {
      title: 'General HR Support',
      items: ['Ongoing email/phone/text support','HR documentation storage','Unlimited HR templates','Monthly HR check-in call']
    }
  ]

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <p className="text-blue-200 max-w-2xl mb-10">We help small businesses stay compliant, organized, and protected — without the cost of a full-time HR manager.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map(g => (
            <div key={g.title} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700">
              <h3 className="font-semibold text-lg mb-3">{g.title}</h3>
              <ul className="text-blue-200 text-sm space-y-2 list-disc pl-5">
                {g.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
