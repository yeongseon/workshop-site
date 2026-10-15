import type { Accommodation, WorkshopMeta } from "../types"

type HeroProps = {
  readonly meta: WorkshopMeta
  readonly accommodation: Accommodation
}

export function Hero({ meta, accommodation }: HeroProps) {
  return (
    <header className="hero">
      <div className="hero__copy">
        <p className="hero__location">{meta.location} · 친구 전용 탑승권</p>
        <h1>{meta.title}</h1>
        <p className="hero__subtitle">{meta.subtitle}</p>
        <p className="hero__tagline">{meta.tagline}</p>
      </div>
      <article className="boarding-pass" aria-label="제주 주말 탑승권 요약">
        <div className="boarding-pass__main">
          <div className="boarding-pass__topline">
            <span>WEEKEND PASS</span>
            <span>04 FRIENDS</span>
          </div>
          <div className="boarding-pass__route" aria-label="우리에서 제주로">
            <strong>우리</strong>
            <span aria-hidden="true"><i /><i /></span>
            <strong>제주</strong>
          </div>
          <dl className="boarding-pass__facts">
            <div>
              <dt>DATE</dt>
              <dd>{meta.dates}</dd>
            </div>
            <div>
              <dt>STAY</dt>
              <dd>{accommodation.name}</dd>
            </div>
          </dl>
        </div>
        <div className="boarding-pass__stub" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <path d="M60 16c-14 14-26 29-26 49 0 16 10 29 26 39 16-10 26-23 26-39 0-20-12-35-26-49Z" />
            <path d="M40 74c12-4 28-4 40 0M47 54c8 4 18 4 26 0" />
          </svg>
          <strong>JEJU</strong>
          <span>{meta.dates}</span>
        </div>
      </article>
    </header>
  )
}
