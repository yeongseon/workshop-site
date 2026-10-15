import type { Participant } from "../types"

type ParticipantsProps = {
  readonly participants: readonly Participant[]
}

export function Participants({ participants }: ParticipantsProps) {
  return (
    <section className="section" id="participants" aria-labelledby="participants-title">
      <div className="section-heading">
        <p>02</p>
        <h2 id="participants-title">함께 가는 사람들</h2>
      </div>
      <ul className="participant-list">
        {participants.map((participant, index) => (
          <li key={participant.nickname}>
            <span className="participant-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <strong>{participant.nickname}</strong>
            {participant.role === undefined ? null : <span>{participant.role}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
