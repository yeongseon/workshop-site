import type { TimelineItem } from "../types"
import { StatusBadge } from "./StatusBadge"

type TimelineProps = {
  readonly id: string
  readonly day: string
  readonly date: string
  readonly sectionNumber: string
  readonly items: readonly TimelineItem[]
}

export function Timeline({ id, day, date, sectionNumber, items }: TimelineProps) {
  const headingId = `${id}-title`
  return (
    <section className="section timeline-section" id={id} aria-labelledby={headingId}>
      <div className="section-heading section-heading--day">
        <p>{sectionNumber}</p>
        <div><h2 id={headingId}>{day}</h2><span>{date}</span></div>
      </div>
      <ol className="timeline">
        {items.map((item) => (
          <li className={`timeline__item timeline__item--${item.status}`} key={`${item.time}-${item.title}`}>
            <time>{item.time}</time>
            <span className="timeline__marker" aria-hidden="true" />
            <div className="timeline__content">
              <div><h3>{item.title}</h3><StatusBadge status={item.status} /></div>
              {item.description === undefined ? null : <p>{item.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
