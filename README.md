# 워크샵 안내 사이트

🔗 **배포된 사이트:** https://yeongseon.dev/workshop-site/

모바일에서 일정, 숙소, 이동 정보와 준비물을 빠르게 확인하는 정적 React 사이트입니다. 모든 워크샵 내용은 한 파일에 모여 있어 UI 코드를 수정하지 않고 내용을 바꿀 수 있습니다.

## 워크샵 내용 수정

`src/data/workshop.ts`를 열어 워크샵 제목, 날짜, 숙소, 참가자, 이동, 토요일·일요일 일정, 준비물, 미션과 미정 항목을 수정하세요.

- 일정이나 교통 항목의 `status`는 `confirmed`(확정) 또는 `tbd`(미정)만 사용합니다.
- 새 일정을 추가하려면 `day1` 또는 `day2` 배열에 항목을 한 줄 추가합니다.
- 타입 구조를 바꿔야 할 때만 `src/types.ts`를 수정합니다.

## 로컬 실행

```bash
npm install
npm run dev
```

프로덕션 빌드 확인:

```bash
npm run build
npm run preview
```

## GitHub Pages 배포

1. 저장소의 기본 브랜치를 `main`으로 설정합니다.
2. GitHub에서 **Settings > Pages**로 이동합니다.
3. **Build and deployment > Source**를 **GitHub Actions**로 선택합니다.
4. `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 `dist`를 자동 배포합니다.

Vite의 `base`가 상대 경로(`./`)로 설정되어 있어 저장소 이름과 관계없이 Pages 하위 경로에서 동작합니다.

## 공개 전 개인정보 체크리스트

GitHub Pages는 누구나 볼 수 있는 공개 웹 호스팅일 수 있습니다. 배포 전에 아래 정보를 꼭 점검하세요.

- [ ] 실명 대신 공개해도 되는 별명만 사용했는가?
- [ ] 실제 숙소 주소와 예약 링크 공개에 모두 동의했는가?
- [ ] 항공편·기차편 번호와 예약 정보가 노출되지 않았는가?
- [ ] 빈집 시간이나 현재 위치를 추측할 수 있는 상세 일정이 없는가?
- [ ] 전화번호, 이메일, 예약번호 등 개인 식별 정보가 없는가?
