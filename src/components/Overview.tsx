import type { OverviewItem } from "../types"

type OverviewProps = {
  readonly items: readonly OverviewItem[]
}

export function Overview({ items }: OverviewProps) {
  return (
    <section className="section" id="overview" aria-labelledby="overview-title">
      <div className="section-heading">
        <p>01</p>
        <h2 id="overview-title">워크샵 한눈에</h2>
      </div>
      <dl className="overview-grid">
        {items.map((item) => (
          <div className="overview-item" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
