export type Status = "confirmed" | "tbd"

export type WorkshopMeta = {
  readonly title: string
  readonly subtitle: string
  readonly dates: string
  readonly location: string
  readonly tagline: string
}

export type OverviewItem = {
  readonly label: string
  readonly value: string
}

export type Participant = {
  readonly nickname: string
  readonly role?: string
}

export type Accommodation = {
  readonly name: string
  readonly address: string
  readonly checkIn: string
  readonly checkOut: string
  readonly link: string
  readonly notes: readonly string[]
}

export type TransportationItem = {
  readonly label: string
  readonly detail: string
  readonly status: Status
}

export type TimelineItem = {
  readonly time: string
  readonly title: string
  readonly description?: string
  readonly status: Status
}

export type ShoppingItem = {
  readonly item: string
  readonly owner?: string
  readonly done: boolean
}

export type MissionItem = {
  readonly title: string
  readonly description: string
}

export type TbdItem = {
  readonly item: string
  readonly note?: string
}

export type WorkshopData = {
  readonly meta: WorkshopMeta
  readonly overview: readonly OverviewItem[]
  readonly participants: readonly Participant[]
  readonly accommodation: Accommodation
  readonly transportation: readonly TransportationItem[]
  readonly day1: readonly TimelineItem[]
  readonly day2: readonly TimelineItem[]
  readonly shoppingList: readonly ShoppingItem[]
  readonly missions: readonly MissionItem[]
  readonly tbdList: readonly TbdItem[]
}
