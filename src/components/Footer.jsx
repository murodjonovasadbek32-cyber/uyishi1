import { footerColumns } from '../data/site'

const socials = [
  {
    label: 'Facebook',
    path: 'M13.5 21v-7.5h2.5l.4-2.9h-2.9V8.7c0-.8.3-1.4 1.5-1.4h1.5V4.7c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2H8v2.9h2.3V21h3.2Z',
  },
  {
    label: 'Instagram',
    path: 'M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm5.6-.6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 5.4h.01M8.6 4h6.8A4.6 4.6 0 0 1 20 8.6v6.8a4.6 4.6 0 0 1-4.6 4.6H8.6A4.6 4.6 0 0 1 4 15.4V8.6A4.6 4.6 0 0 1 8.6 4Z',
  },
  {
    label: 'Twitter',
    path: 'M20 7.2a6.7 6.7 0 0 1-1.9.5 3.3 3.3 0 0 0 1.5-1.9c-.7.4-1.4.7-2.2.8a3.3 3.3 0 0 0-5.7 2.3c0 .3 0 .5.1.8A9.4 9.4 0 0 1 5 6.1a3.3 3.3 0 0 0 1 4.4c-.5 0-1-.2-1.5-.4 0 1.6 1.2 3 2.8 3.3-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1a3.3 3.3 0 0 0 3.1 2.3A6.7 6.7 0 0 1 4 16.9 9.4 9.4 0 0 0 9.1 18.4c6.2 0 9.6-5.2 9.6-9.6v-.4c.6-.5 1.2-1 1.3-1.2Z',
  },
  {
    label: 'LinkedIn',
    path: 'M8.3 19.3H5.6V9.8h2.7v9.5ZM7 8.6a1.6 1.6 0 1 1 0-3.1 1.6 1.6 0 0 1 0 3.1Zm12.3 10.7h-2.7v-4.6c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.7h-2.7V9.8h2.6v1.1h.1c.4-.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v5.7Z',
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="mt-8 scroll-mt-24 bg-white">
      <div className="page grid gap-12 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M4.5 11a7.5 7.5 0 0 1 15 0c0 .5-.05 1-.14 1.47H4.64A7.9 7.9 0 0 1 4.5 11Zm1.2 3.1h12.6c.7 1.9 2.2 3.05 4.7 3.4A7.5 7.5 0 0 1 6 17.5c-2.5-.35-4-1.5-4.7-3.4h4.4Z" />
              </svg>
            </span>
            <span className="font-display text-[1.6rem] font-bold tracking-tight text-ink">Foodi</span>
          </div>

          <p className="max-w-[30ch] text-[1.05rem] leading-[1.7]">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-[1.25rem] font-semibold text-ink">{column.title}</h3>
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link.startsWith('example@') ? `mailto:${link}` : '#home'}
                      className="text-[1rem] text-body transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="page">
        <div className="flex flex-col items-center gap-6 border-t border-line py-8 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white transition-colors hover:bg-brand-strong"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          <p className="text-[0.9rem] text-body">Copyright 2023 Dscode | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}