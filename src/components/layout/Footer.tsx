export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="font-serif text-sm font-bold text-ink">Arjun Rao</span>
        <p className="text-xs text-ink-3">
          © {new Date().getFullYear()} Arjun Rao. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
