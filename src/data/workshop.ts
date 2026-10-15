import type { WorkshopData } from "../types"

export const workshop = {
  meta: {
    title: "팀 워크샵",
    subtitle: "함께 정리하고, 함께 방향을 맞추는 1박 2일",
    dates: "2026. 11. 7. 토 — 11. 8. 일",
    location: "근교 연수원 (예시)",
    tagline: "같은 방향을 보고, 천천히 이야기하는 이틀.",
  },
  overview: [
    { label: "기간", value: "1박 2일" },
    { label: "집합", value: "토요일 오전 10:00" },
    { label: "인원", value: "6명" },
    { label: "주제", value: "회고 · 로드맵 · 팀빌딩" },
  ],
  participants: [
    { nickname: "민수", role: "진행" },
    { nickname: "지은", role: "기록" },
    { nickname: "하늘", role: "간식·준비물" },
    { nickname: "서준" },
    { nickname: "다온" },
    { nickname: "유나" },
  ],
  accommodation: {
    name: "예시 숲속 연수원",
    address: "예시도 예시시 숲길로 123",
    checkIn: "토요일 15:00",
    checkOut: "일요일 11:00",
    link: "https://example.com",
    notes: ["숙소명과 주소는 예시 정보입니다.", "회의실 사용 가능 시간은 체크인 때 확인해 주세요."],
  },
  transportation: [
    { label: "가는 길", detail: "토요일 10:00 중앙역 앞 집합 후 차량 이동", status: "confirmed" },
    { label: "현지 이동", detail: "숙소와 식당 간 이동 방법", status: "tbd" },
    { label: "돌아오는 길", detail: "일요일 15:00 숙소 출발", status: "confirmed" },
  ],
  day1: [
    { time: "10:00", title: "집합 및 이동", description: "중앙역 앞에서 만나 함께 출발", status: "confirmed" },
    { time: "12:00", title: "점심 식사", description: "숙소 근처 식당", status: "tbd" },
    { time: "14:00", title: "오프닝", description: "워크샵 목표와 진행 방식 공유", status: "confirmed" },
    { time: "15:00", title: "숙소 체크인", description: "짐 풀고 회의실 세팅", status: "confirmed" },
    { time: "16:00", title: "세션 1 · 회고", description: "지난 분기 돌아보기", status: "confirmed" },
    { time: "18:30", title: "저녁 식사", description: "함께 식사하며 자유 대화", status: "tbd" },
    { time: "20:30", title: "팀빌딩 활동", description: "보드게임 또는 토크 세션", status: "tbd" },
  ],
  day2: [
    { time: "09:00", title: "아침 식사", description: "숙소에서 간단히", status: "confirmed" },
    { time: "10:00", title: "세션 2 · 로드맵", description: "다음 분기 우선순위 정하기", status: "confirmed" },
    { time: "11:00", title: "체크아웃", description: "두고 온 물건 확인", status: "confirmed" },
    { time: "12:00", title: "점심 식사", description: "마무리 식사", status: "tbd" },
    { time: "13:30", title: "정리 및 액션 아이템", description: "담당자와 일정 확정", status: "confirmed" },
    { time: "15:00", title: "귀가", description: "차량으로 이동 후 해산", status: "confirmed" },
  ],
  shoppingList: [
    { item: "음료와 생수", owner: "하늘", done: true },
    { item: "간식", owner: "하늘", done: false },
    { item: "화이트보드 마커·포스트잇", owner: "지은", done: false },
    { item: "보드게임", owner: "민수", done: false },
    { item: "멀티탭·충전기", done: false },
  ],
  missions: [
    { title: "회고 한 줄", description: "지난 분기를 한 문장으로 정리해 공유하기." },
    { title: "다음 분기 목표 1개", description: "각자 가장 중요하다고 생각하는 목표를 하나씩 제안하기." },
    { title: "서로에게 감사 한마디", description: "팀원 한 명에게 고마웠던 점을 전하기." },
  ],
  tbdList: [
    { item: "점심·저녁 식당", note: "인원과 예산 확정 후 결정" },
    { item: "현지 이동 방법", note: "차량 가능 여부에 따라 결정" },
    { item: "저녁 팀빌딩 활동", note: "참가자 의견 수렴 후 선택" },
  ],
} as const satisfies WorkshopData
