import { testimonial } from '../data/site'
import SectionHeading from './SectionHeading'
import SmartImage from './SmartImage'

const avatars = [
  { src: '/img/emoji-smile-big.jpg', tone: 'bg-[#ffe8ad]' },
  { src: '/img/emoji-pizza.jpg', tone: 'bg-[#d9d9d9]' },
  { src: '/img/emoji-smile.jpg', tone: 'bg-[#d9d9d9]' },
]

export default function ChefTestimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="page grid items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-x-[8%] top-[22%] bottom-[14%] rounded-[44px] bg-brand-strong" />

          <SmartImage
            src="/img/chef-main.jpg"
            alt="Chef from the Foodi kitchen"
            className="relative aspect-[4/5] w-full rounded-t-[44px] rounded-br-[120px]"
          />

          <SmartImage
            src="/img/chef-small.jpg"
            alt="Chef team at work"
            className="absolute -right-4 -bottom-8 w-[52%] rounded-[28px] border-[6px] border-white shadow-xl lg:-right-10"
          />

          <div className="absolute top-[58%] left-[6%] inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 shadow-lg">
            <span className="font-display text-[1.05rem] font-semibold text-ink">Our Best Chef</span>
            <img src="/img/emoji-smile.jpg" alt="" className="h-5 w-5" />
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                What Our Customers
                <br />
                Say About Us
              </>
            }
          />

          <p className="text-[1.05rem] leading-[1.8]">{testimonial.quote}</p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex -space-x-4">
              {avatars.map((avatar) => (
                <SmartImage
                  key={avatar.src}
                  src={avatar.src}
                  alt="Customer avatar"
                  className={`h-16 w-16 rounded-full border-4 border-white ${avatar.tone}`}
                  imgClassName="object-contain"
                />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-[1.15rem] font-semibold text-ink">Customer Feedback</span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-star" fill="currentColor" aria-hidden="true">
                  <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5-4.8-4.6 6.6-.9L12 2.5Z" />
                </svg>
                <span className="font-semibold text-muted">{testimonial.rating}</span>
                <span className="text-[0.95rem] text-muted">{testimonial.reviews}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}