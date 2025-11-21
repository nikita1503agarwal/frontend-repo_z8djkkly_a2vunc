function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3">FlatRate HR</h4>
            <p className="text-sm text-slate-400">Your HR department for a flat monthly fee. No hourly billing, ever.</p>
          </div>
          <div>
            <h5 className="text-white font-medium mb-2">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium mb-2">Support</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/booking" className="hover:text-white">Book a Call</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium mb-2">Get Started</h5>
            <p className="text-sm text-slate-400 mb-3">Schedule your free HR assessment today.</p>
            <a href="/booking" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors">Book Now</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} FlatRate HR. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
