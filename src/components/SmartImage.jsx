import { useState } from 'react'

export default function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [status, setStatus] = useState('loading')

  return (
    <span
      className={`block overflow-hidden ${
        status === 'loading' ? 'skeleton' : status === 'error' ? 'bg-brand-mist' : ''
      } ${className}`}
    >
      {status === 'error' ? (
        <span
          role="img"
          aria-label={alt}
          className="grid h-full w-full place-items-center font-display text-sm font-semibold text-brand"
        >
          Foodi
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            status === 'ready' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </span>
  )
}