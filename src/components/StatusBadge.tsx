import type { Status } from "../types"

type StatusBadgeProps = {
  readonly status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const labels = { confirmed: "확정", planned: "예정", tbd: "미정" } as const
  const label = labels[status]
  return <span className={`status-badge status-badge--${status}`}>{label}</span>
}
