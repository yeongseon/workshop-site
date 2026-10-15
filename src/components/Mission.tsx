import { useState } from "react"
import type { MissionItem } from "../types"

type MissionProps = {
  readonly missions: readonly MissionItem[]
}

export function Mission({ missions }: MissionProps) {
  const poseSuggestions = [
    "해커톤 티 로고가 보이게 나란히 서서, 네 명 모두 같은 방향 보기",
    "두 명은 앞, 두 명은 뒤에서 제주 바람 맞는 척하기",
    "네 명이 어깨를 붙이고, 가장 제주다운 배경 한 조각 함께 담기",
  ] as const
  const [poseIndex, setPoseIndex] = useState(0)

  function showNextPose() {
    setPoseIndex((current) => (current + 1) % poseSuggestions.length)
  }

  return (
    <section className="section" id="missions" aria-labelledby="missions-title">
      <div className="section-heading">
        <p>08</p>
        <h2 id="missions-title">이번 제주 모임의 미션</h2>
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
      <div className="pose-shuffler">
        <div>
          <span>해커톤 티 미션 보너스</span>
          <h3>사진 앞에서 얼어붙지 않기</h3>
        </div>
        <button type="button" onClick={showNextPose}>
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 7h3l2-2h6l2 2h3v12H4V7Zm8 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" /></svg>
          다음 포즈
        </button>
        <p key={poseIndex} aria-live="polite">{poseSuggestions[poseIndex]}</p>
      </div>
      <div className="gallery-empty" role="region" aria-labelledby="gallery-title">
        <h3 id="gallery-title">Gallery · 우리의 제주 기록</h3>
        <p>단체사진을 찍으면 이곳에 추가할 예정이에요. 아직 등록된 사진은 없어요.</p>
      </div>
    </section>
  )
}
