import type { MissionItem } from "../types"

type MissionProps = {
  readonly missions: readonly MissionItem[]
}

export function Mission({ missions }: MissionProps) {
  return (
    <section className="section" id="missions" aria-labelledby="missions-title">
      <div className="section-heading">
        <p>08</p>
        <h2 id="missions-title">이번 워크샵의 미션</h2>
      </div>
      <ol className="mission-grid">
        {missions.map((mission, index) => (
          <li key={mission.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{mission.title}</h3>
            <p>{mission.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
