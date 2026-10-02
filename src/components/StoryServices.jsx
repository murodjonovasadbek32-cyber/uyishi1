import { services } from '../data/site'
import SectionHeading from './SectionHeading'

const icons = {
  catering: (
    <path d="M4 8h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm3 9h10M6 5V3m12 2V3" />
  ),
  delivery: <path d="M3 7h11v9H3V7Zm11 3h4l3 3v3h-7v-6Zm-7 9a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm10 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z" />,
  ordering: <path d="M6 3h12l1.5 5H4.5L6 3Zm-1 5v13h14V8M9 13h6" />,
  gift: <path d="M4 9h16v11H4V9Zm0-3h16v3H4V6Zm8-3a2.2 2.2 0 0 1 0 4.4M12 3v4.4" />,
}

function ServiceCard({ title, description, link, icon }) {
  return (
    <article className="flex flex-col rounded-[32px] bg-white p-8 shadow-[0_18px_40px_rgba(17,17,17,0.06)]">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-mist text-brand-strong">
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          {icons[icon]}
        </svg>
      </span>

      <h3 className="mt-6 font-display text-[1.3rem] font-semibold text-brand-strong">{title}</h3>
      <p className="mt-3 text-[1rem] leading-[1.7]">{description}</p>

      <a
        href="#contact"
        className="mt-6 inline-flex w-fit items-center gap-2 font-display text-[1rem] font-semibold text-brand-strong"
      >
        {link}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M13.2 5.6 11.8 7l4 4H4v2h11.8l-4 4 1.4 1.4 6.4-6.4-6.4-6.4Z" />
        </svg>
      </a>
    </article>
  )
}

export default function StoryServices() {
  return (
    <section id="services" className="scroll-mt-24 py-16 lg:py-24">
      <div className="page grid items-start gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="flex flex-col items-start gap-7 lg:sticky lg:top-32">
          <SectionHeading
            eyebrow="Our Story & Services"
            title={
              <>
                Our Culinary Journey
                <br />
                And Services
              </>
            }
          />

          <p className="max-w-[52ch] text-[1.05rem] leading-[1.8]">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
            blending culinary artistry with warm hospitality.
          </p>

          <a href="#menu" className="btn-primary">
            Explore
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M13.2 5.6 11.8 7l4 4H4v2h11.8l-4 4 1.4 1.4 6.4-6.4-6.4-6.4Z" />
            </svg>
          </a>
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}