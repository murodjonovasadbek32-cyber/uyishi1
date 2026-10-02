import { useState } from 'react'
import { navLinks } from '../data/site'

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Foodi home">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand text-white">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M4.5 11a7.5 7.5 0 0 1 15 0c0 .5-.05 1-.14 1.47H4.64A7.9 7.9 0 0 1 4.5 11Zm1.2 3.1h12.6c.7 1.9 2.2 3.05 4.7 3.4A7.5 7.5 0 0 1 6 17.5c-2.5-.35-4-1.5-4.7-3.4h4.4Z" />
        </svg>
      </span>
      <span className="font-display text-[1.6rem] font-bold tracking-tight text-ink">Foodi</span>
    </a>
  )
}

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="page flex h-[86px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[1.05rem] font-semibold transition-colors hover:text-brand ${
                index === 0 ? 'text-brand' : 'text-ink-soft'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="relative hidden h-11 w-11 place-items-center rounded-full bg-brand-mist text-ink-soft sm:grid">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M6 6h15l-1.6 8.2a2 2 0 0 1-2 1.8H9.6a2 2 0 0 1-2-1.7L6 6Zm0 0-.7-3H2m5 17a1.2 1.2 0 1 0 0-2.4A1.2 1.2 0 0 0 5 20Zm12 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[0.7rem] font-bold text-white">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Cart items: {cartCount}</span>
          </span>

          <a href="#contact" className="btn-primary hidden !px-7 !py-3.5 text-[1.05rem] sm:inline-flex">
            Contact
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="grid h-11 w-11 place-items-center rounded-full bg-brand-mist text-ink-soft lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              {open ? (
                <path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6 6.4 5Z" />
              ) : (
                <path d="M3 6h18v2.4H3V6Zm0 4.8h18v2.4H3v-2.4ZM3 15.6h18V18H3v-2.4Z" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-lg font-semibold ${
                    index === 0 ? 'bg-brand-mist text-brand' : 'text-ink-soft'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-2xl bg-brand px-4 py-3 text-center text-lg font-semibold text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}