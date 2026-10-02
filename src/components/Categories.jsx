import { categories } from '../data/site'
import SectionHeading from './SectionHeading'
import SmartImage from './SmartImage'

function CategoryCard({ title, count, images, positions }) {
  return (
    <article className="group rounded-[32px] bg-white p-7 shadow-[0_18px_40px_rgba(17,17,17,0.06)] transition-transform duration-300 hover:-translate-y-2">
      <div className="relative mx-auto aspect-square w-full max-w-[220px]">
        <div className="absolute inset-[6%] rounded-full bg-brand-soft transition-transform duration-300 group-hover:scale-105" />
        {images.map((src, index) => (
          <SmartImage
            key={src}
            src={src}
            alt=""
            className={`absolute ${positions[index].className} rounded-2xl`}
            imgClassName="object-contain"
          />
        ))}
      </div>

      <h3 className="mt-6 text-center font-display text-[1.35rem] font-semibold text-ink-soft">
        {title}
      </h3>
      <p className="mt-2 text-center text-[1rem] text-body">{count}</p>
    </article>
  )
}

export default function Categories() {
  return (
    <section id="menu" className="scroll-mt-24 py-16 lg:py-24">
      <div className="page">
        <SectionHeading
          eyebrow="Customer Favorites"
          title="Popular Categories"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}