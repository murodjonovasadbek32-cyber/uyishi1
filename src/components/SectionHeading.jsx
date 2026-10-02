export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className = '',
}) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="title-lg">{title}</h2>
    </div>
  )
}