import type { TbdItem } from "../types"

type TbdListProps = {
  readonly items: readonly TbdItem[]
}

export function TbdList({ items }: TbdListProps) {
  return (
    <section className="section tbd-section" id="tbd" aria-labelledby="tbd-title">
      <div className="section-heading">
        <p>09</p>
        <h2 id="tbd-title">아직 정할 것</h2>
      </div>
      <ul className="tbd-list">
        {items.map((item) => (
          <li key={item.item}>
            <span aria-hidden="true">?</span>
            <div><strong>{item.item}</strong>{item.note === undefined ? null : <p>{item.note}</p>}</div>
          </li>
        ))}
      </ul>
      <p className="closing-note">아직 정해지지 않은 항목은 확정되는 대로 업데이트됩니다.</p>
    </section>
  )
}
