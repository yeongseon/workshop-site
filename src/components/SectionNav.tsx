const links = [
  ["overview", "한눈에"],
  ["participants", "함께"],
  ["accommodation", "숙소"],
  ["transportation", "이동"],
  ["day-1", "토요일"],
  ["day-2", "일요일"],
  ["shopping", "준비물"],
  ["missions", "미션"],
  ["tbd", "미정"],
] as const

export function SectionNav() {
  return (
    <nav className="section-nav" aria-label="워크샵 정보 바로가기">
      <div className="section-nav__track">
        {links.map(([id, label]) => (
          <a className="nav-chip" href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
