export default function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-white/5 py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-accent-primary text-lg">AR</span>
        <p className="font-body text-sm text-text-muted text-center">
          © {new Date().getFullYear()} Arjun Rao. Designed with purpose.
        </p>
        <p className="font-body text-xs text-white/20 uppercase tracking-widest">
          Design Leader
        </p>
      </div>
    </footer>
  )
}
