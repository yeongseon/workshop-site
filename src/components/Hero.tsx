import type { Accommodation, WorkshopMeta } from "../types"

type HeroProps = {
  readonly meta: WorkshopMeta
  readonly accommodation: Accommodation
}

export function Hero({ meta, accommodation }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero__route-mark" aria-hidden="true">
        <span />
        <span />
      </div>
      <p className="hero__location">{meta.location}</p>
      <h1>{meta.title}</h1>
      <p className="hero__subtitle">{meta.subtitle}</p>
      <div className="hero__essentials" aria-label="핵심 워크샵 정보">
        <div>
          <span>언제</span>
          <strong>{meta.dates}</strong>
        </div>
        <div>
          <span>어디서 잘까</span>
          <strong>{accommodation.name}</strong>
        </div>
      </div>
      <p className="hero__tagline">{meta.tagline}</p>
    </header>
  )
}
