import { useState } from 'react'
import SmartImage from './SmartImage'
import VideoModal from './VideoModal'

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="page grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="relative z-10">
          <h1 className="title-xl max-w-[15ch]">Dive into Delights Of Delectable Food</h1>
          <p className="mt-6 max-w-[52ch] text-[1.05rem] leading-[1.75]">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#menu" className="btn-primary">
              Order Now
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.2 5.6 11.8 7l4 4H4v2h11.8l-4 4 1.4 1.4 6.4-6.4-6.4-6.4Z" />
              </svg>
            </a>

            <button type="button" onClick={() => setVideoOpen(true)} className="btn-ghost">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                </svg>
              </span>
              Watch Video
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-[8%] right-[2%] h-[78%] w-[78%] rounded-[110px] bg-brand-strong" />

          <div className="relative overflow-hidden rounded-[40px] rounded-br-[120px]">
            <SmartImage
              src="/img/hero-main.jpg"
              alt="Freshly plated dishes from the Foodi kitchen"
              className="aspect-[4/3] w-full lg:aspect-[3/2]"
              loading="eager"
            />
          </div>

          <SmartImage
            src="/img/hero-card.jpg"
            alt="Signature dish of the day"
            className="absolute -top-6 left-2 w-[38%] max-w-[220px] rounded-[28px] border-[6px] border-white shadow-xl lg:-top-8 lg:left-4"
          />

          <div className="absolute bottom-8 left-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 shadow-lg lg:bottom-10">
            <span className="font-display text-[1.05rem] font-semibold text-accent">Hot spicy Food</span>
            <img src="/img/emoji-chili.jpg" alt="" className="h-5 w-5" />
          </div>

          <SmartImage
            src="/img/hero-small.jpg"
            alt="Fresh salad bowl"
            className="absolute top-[38%] -left-4 hidden h-[26%] w-[26%] rounded-full border-[6px] border-white shadow-xl lg:block"
          />

          <SmartImage
            src="/img/hero-card-left.jpg"
            alt="Chef preparing a dish"
            className="absolute -bottom-10 right-[6%] hidden w-[34%] rounded-[28px] border-[6px] border-white shadow-xl xl:block"
          />
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  )
}