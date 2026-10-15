import type { Accommodation as AccommodationData } from "../types"

type AccommodationProps = {
  readonly accommodation: AccommodationData
}

export function Accommodation({ accommodation }: AccommodationProps) {
  return (
    <section className="section" id="accommodation" aria-labelledby="accommodation-title">
      <div className="section-heading">
        <p>03</p>
        <h2 id="accommodation-title">우리 숙소</h2>
      </div>
      <article className="lodging-card">
        <div className="lodging-card__topline"><span className="status-badge status-badge--confirmed">예약 완료</span><span>1박 · STAY</span></div>
        <h3>{accommodation.name}</h3>
        <p className="lodging-card__address">{accommodation.address}</p>
        <dl className="lodging-card__times">
          <div><dt>체크인</dt><dd>{accommodation.checkIn}</dd></div>
          <div><dt>체크아웃</dt><dd>{accommodation.checkOut}</dd></div>
        </dl>
        <a className="primary-button" href={accommodation.link} target="_blank" rel="noopener noreferrer">
          숙소 보기 <span aria-hidden="true">↗</span>
        </a>
        <ul className="note-list">
          {accommodation.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </article>
    </section>
  )
}
