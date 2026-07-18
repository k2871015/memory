# DESIGN.md

## 1️⃣ Overview
- **브랜드 성격**: 유쾌한(Playful), 에너지 넘치는(Energetic), 즉각적인(Instant), 현대적인(Modern)
- **전체 디자인 톤**: 식욕을 돋우는 다크 테마 기반의 글래스모피즘(Glassmorphism). '오늘 뭐 먹지?'의 런치 룰렛에 걸맞게 시각적으로 즐겁고 몰입감 넘치는 레이아웃.
- **핵심 특징**: 따뜻한 난색 계열(오렌지, 앰버) 컬러 포인트, 네온 빛 번짐, 룰렛 휠 스핀 등의 생동감 넘치는 마이크로 애니메이션.

## 2️⃣ Colors
모든 색상은 토큰 형태로 관리하며, 식욕을 돋우는 난색을 강조합니다.

- **Brand Colors**
  - `{colors.primary}` — `#FF7043` (비비드 오렌지, 식욕 자극)
  - `{colors.secondary}` — `#FFB74D` (앰버, 부가 강조색)
  - `{colors.accent}` — `#F06292` (로즈, 핫/매운 음식 테마)
  - `{colors.success}` — `#66BB6A` (그린, 가벼운 샐러드/클린 식단 테마)
- **Surface Colors (Glassmorphism)**
  - `{colors.surface.base}` — `rgba(255, 255, 255, 0.055)`
  - `{colors.surface.hover}` — `rgba(255, 255, 255, 0.08)`
  - `{colors.background}` — `#0F0F14` (매우 어두운 블랙)
  - `{colors.background.alt}` — `#16161E` (다크 네이비 블랙)
- **Text Colors**
  - `{colors.text.primary}` — `#F5F5F5` (높은 대비 순백색)
  - `{colors.text.secondary}` — `#9E9E9E` (부드러운 그레이)
  - `{colors.text.muted}` — `#616161` (비활성)
- **Border Colors**
  - `{colors.border.light}` — `rgba(255, 255, 255, 0.1)`
  - `{colors.border.focus}` — `rgba(255, 112, 67, 0.4)` (오렌지 포커스)

## 3️⃣ Typography
가독성과 경쾌함을 위한 조합.

| Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| --- | --- | --- | --- | --- | --- |
| `{typography.h1}` | `Outfit`, sans-serif | `32px` | `900` (Black) | `1.1` | `-0.01em` |
| `{typography.h2}` | `Noto Sans KR`, sans-serif | `24px` | `700` (Bold) | `1.3` | `0em` |
| `{typography.body.lg}` | `Noto Sans KR`, sans-serif | `18px` | `500` (Medium) | `1.6` | `0em` |
| `{typography.body.md}` | `Noto Sans KR`, sans-serif | `16px` | `400` (Regular) | `1.6` | `0em` |

## 4️⃣ Layout
- **Spacing Tokens**
  - `{spacing.xs}` — `6px`
  - `{spacing.sm}` — `12px`
  - `{spacing.md}` — `20px`
  - `{spacing.lg}` — `28px`
  - `{spacing.xl}` — `40px`
- **Grid & Layout**
  - 모바일 중심 앱 UI (`max-width: 680px`).
  - 중앙 집중형(Center-aligned) 레이아웃.

## 5️⃣ Elevation & Depth
- **Glassmorphism (Blur)**
  - `{backdrop.blur.md}` — `blur(14px)` (모든 카드 뷰)
- **Shadows**
  - `{shadow.md}` — `0 8px 32px rgba(0, 0, 0, 0.35)`
  - `{shadow.glow.orange}` — `0 6px 24px rgba(255, 112, 67, 0.5)` (스핀 버튼 등 핵심 CTA)

## 6️⃣ Shapes
- `{radius.sm}` — `14px` (입력 창, 칩)
- `{radius.md}` — `20px` (강조 버튼)
- `{radius.lg}` — `28px` (카드, 룰렛 백그라운드)
- `{radius.full}` — `9999px` (룰렛 휠, 배지)

## 7️⃣ Components
- **룰렛(Roulette)**: 오렌지, 앰버 계열의 그라데이션 적용. 스피닝 시 애니메이션과 함께 백그라운드 Glow 효과 점멸.
- **스핀 버튼(Spin Button)**: 오렌지~레드 그라데이션, Shimmer 애니메이션 탑재, 호버 시 `{shadow.glow.orange}` 강화.
- **칩 버튼(Mode/Mood Buttons)**: 비활성 시 투명 글래스 디자인, 활성 시 비비드 오렌지 테두리와 백그라운드 Glow.
- **배지(Calories/Mood)**: 칼로리에 따라 색상 구분 (Low:`{colors.success}`, Mid:`{colors.secondary}`, High:`{colors.accent}`).

## 8️⃣ Do’s and Don’ts
**✅ Do's**
- 스핀(돌리기) 및 결과 팝업 시 유쾌한 바운스(Bounce)나 팝인(Pop-in) 애니메이션을 부여해 기대감을 높일 것.
- 난색 계열이 주를 이루므로 텍스트 가독성을 위해 `{colors.background}`를 충분히 어둡게 유지할 것.

**❌ Don’ts**
- 룰렛 등 시각적으로 강한 요소가 많으므로 카드 내부에 불필요한 보더(Border)나 복잡한 배경 패턴을 추가하지 말 것.
- 칙칙하거나 차가운 톤(어두운 파랑, 보라 등)은 식욕 감퇴를 부를 수 있으니 사용을 피할 것.

## 9️⃣ Responsive
- 단일 뷰(Single column)로 구성하여 작은 모바일에서도 깔끔하게 보이도록 할 것. 버튼 높이 최소 48px 적용.
