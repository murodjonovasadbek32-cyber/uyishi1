import { useRef } from 'react'
import { dishes } from '../data/site'
import SectionHeading from './SectionHeading'
import SmartImage from './SmartImage'

function ArrowButton({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous dishes' : 'Next dishes'}
      className="grid h-20 w-20 place-items-center rounded-full transition-colors"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-6 w-6 ${direction === 'left' ? 'text-muted' : 'text-white'}`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d={
            direction === 'left'
              ? 'M14.7 5.3 8 12l6.7 6.7 1.4-1.4L10.8 12l5.3-5.3-1.4-1.4Z'
              : 'M9.3 18.7 16 12 9.3 5.3 7.9 6.7 13.2 12l-5.3 5.3 1.4 1.4Z'
          }
        />
      </svg>
    </button>
  )
}

export default function SpecialDishes({ onAdd }) {
  const trackRef = useRef(null)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8
    track.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section id="offers" className="relative scroll-mt-24 overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-[22%] z-0 flex justify-center gap-6 opacity-70 max-lg:hidden">
        <SmartImage
          src="/img/gallery.jpg"
          alt=""
          className="h-[420px] w-[420px] rounded-[48px]"
          imgClassName="object-cover object-left"
        />
        <SmartImage
          src="/img/gallery.jpg"
          alt=""
          className="-mt-16 h-[420px] w-[420px] rounded-[48px]"
          imgClassName="object-cover object-center"
        />
        <SmartImage
          src="/img/gallery.jpg"
          alt=""
          className="h-[420px] w-[420px] rounded-[48px]"
          imgClassName="object-cover object-right"
        />
      </div>

      <div className="page relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Special Dishes" title={<>Standout Dishes<br />From Our Menu</>} />

          <div className="hidden items-center gap-6 lg:flex">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-line">
              <ArrowButton direction="left" onClick={() => scroll('left')} />
            </span>
            <span className="grid h-20 w-20 place-items-center rounded-full bg-brand">
              <ArrowButton direction="right" onClick={() => scroll('right')} />
            </span>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible"
        >
          {dishes.map((dish) => (
            <article
              key={dish.title}
              className="relative w-[82vw] shrink-0 snap-center rounded-[32px] bg-white p-7 shadow-[0_18px_40px_rgba(17,17,17,0.06)] sm:w-[380px] lg:w-auto"
            >
              <SmartImage
                src={dish.image}
                alt={dish.title}
                className="mx-auto aspect-square w-full max-w-[276px] rounded-full"
              />

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-[1.35rem] font-semibold text-ink-soft">{dish.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-body">{dish.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onAdd(dish.title)}
                  aria-label={`Add ${dish.title} to cart`}
                  className="grid h-[75px] w-[75px] shrink-0 place-items-center rounded-[26px] bg-brand text-white transition-transform duration-200 hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M12 20.4 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 1 1 19.4 13L12 20.4Z" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="font-display text-[1.35rem] font-semibold text-ink">{dish.price}</span>
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-star" fill="currentColor" aria-hidden="true">
                  <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5-4.8-4.6 6.6-.9L12 2.5Z" />
                </svg>
                <span className="text-[1.05rem] font-medium text-muted">{dish.rating}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}