import type { TransportationItem } from "../types"
import { StatusBadge } from "./StatusBadge"

type TransportationProps = {
  readonly items: readonly TransportationItem[]
}

export function Transportation({ items }: TransportationProps) {
  return (
    <section className="section" id="transportation" aria-labelledby="transportation-title">
      <div className="section-heading">
        <p>04</p>
        <h2 id="transportation-title">이동 요약</h2>
      </div>
      <ul className="transport-list">
        {items.map((item) => (
          <li key={item.label}>
            <div><span>{item.label}</span><strong>{item.detail}</strong></div>
            <StatusBadge status={item.status} />
          </li>
        ))}
      </ul>
    </section>
  )
}
