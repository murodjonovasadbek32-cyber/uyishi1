import { useEffect } from 'react'

export default function VideoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-ink/70 p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Watch video"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-[32px] bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-brand-mist text-ink-soft"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6 6.4 5Z" />
          </svg>
        </button>

        <div className="grid aspect-video place-items-center rounded-[24px] bg-ink">
          <div className="flex flex-col items-center gap-4 px-6 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-white">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                <path d="M8 5.5v13l11-6.5-11-6.5Z" />
              </svg>
            </span>
            <p className="font-display text-xl font-semibold text-white">Video demo</p>
            <p className="max-w-sm text-sm text-white/70">
              Bu yerda haqiqiy video fayli ulanadi. Hozircha manba mavjud emas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}