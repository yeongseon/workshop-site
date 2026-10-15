import { Accommodation } from "./components/Accommodation"
import { Hero } from "./components/Hero"
import { Mission } from "./components/Mission"
import { Overview } from "./components/Overview"
import { Participants } from "./components/Participants"
import { SectionNav } from "./components/SectionNav"
import { ShoppingList } from "./components/ShoppingList"
import { TbdList } from "./components/TbdList"
import { Timeline } from "./components/Timeline"
import { Transportation } from "./components/Transportation"
import { workshop } from "./data/workshop"

export function App() {
  return (
    <>
      <Hero meta={workshop.meta} accommodation={workshop.accommodation} />
      <SectionNav />
      <main>
        <Overview items={workshop.overview} />
        <Participants participants={workshop.participants} />
        <Accommodation accommodation={workshop.accommodation} />
        <Transportation items={workshop.transportation} />
        <Timeline id="day-1" day="토요일" date="DAY 1 · 11월 14일" sectionNumber="05" items={workshop.day1} />
        <Timeline id="day-2" day="일요일" date="DAY 2 · 11월 15일" sectionNumber="06" items={workshop.day2} />
        <ShoppingList items={workshop.shoppingList} />
        <Mission missions={workshop.missions} />
        <TbdList items={workshop.tbdList} />
      </main>
      <footer><p>{workshop.meta.title}</p><span>{workshop.meta.dates}</span></footer>
    </>
  )
}
