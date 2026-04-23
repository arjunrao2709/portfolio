export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-6 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xs font-semibold text-accent-primary">AR</span>
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} Arjun Rao
        </p>
      </div>
    </footer>
  )
}
