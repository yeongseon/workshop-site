import type { Status } from "../types"

type StatusBadgeProps = {
  readonly status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const label = status === "confirmed" ? "확정" : "미정"
  return <span className={`status-badge status-badge--${status}`}>{label}</span>
}
