import { useState } from "react"
import type { ShoppingItem } from "../types"

type ShoppingListProps = {
  readonly items: readonly ShoppingItem[]
}

export function ShoppingList({ items }: ShoppingListProps) {
  const [checked, setChecked] = useState<ReadonlySet<number>>(
    () => new Set(items.flatMap((item, index) => item.done ? [index] : [])),
  )

  function toggleItem(index: number) {
    setChecked((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section className="section" id="shopping" aria-labelledby="shopping-title">
      <div className="section-heading">
        <p>07</p>
        <h2 id="shopping-title">같이 챙길 것</h2>
      </div>
      <ul className="check-list">
        {items.map((item, index) => {
          const inputId = `shopping-item-${index}`
          return (
            <li className={checked.has(index) ? "is-checked" : ""} key={item.item}>
              <input id={inputId} type="checkbox" checked={checked.has(index)} onChange={() => toggleItem(index)} />
              <label htmlFor={inputId}><span>{item.item}</span>{item.owner === undefined ? null : <small>{item.owner}</small>}</label>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
