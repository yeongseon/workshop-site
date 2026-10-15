# Weekend Route Design System

## 0. Research Log
- Embedded refs: shortlisted Linear, Airbnb, Notion → picked taste-skill + Linear because a compact itinerary benefits from precise hierarchy and status-led navigation; replaced the purple brand accent with travel-map mint.
- Lazyweb: skipped — no browsing is needed for this small utility and no external screen research tool was requested.
- Imagen drafts: skipped — no image-generation tool is available; the product is information-first rather than photography-led.
- Direction: a night route card carried in one hand. Charcoal layers feel calm and durable; mint marks confirmed waypoints, while amber isolates unresolved decisions.

## 1. Atmosphere & Identity
A compact, dependable pocket itinerary: dark like an evening map, bright at the exact points where a traveler needs certainty. The signature is the **route line**—a mint vertical timeline and directional strokes that connect dates, lodging, and next steps without decorative imagery.

## 2. Color

| Role | Token | Value | Usage |
|---|---|---|---|
| Canvas | `--color-canvas` | `#101412` | Page background |
| Surface | `--color-surface` | `#171c19` | Section panels |
| Surface raised | `--color-surface-raised` | `#202721` | Highlighted rows, controls |
| Surface soft | `--color-surface-soft` | `#293129` | Hover and selected states |
| Text primary | `--color-text` | `#f1f5ee` | Headings and body |
| Text secondary | `--color-text-muted` | `#aeb9af` | Descriptions and metadata |
| Text quiet | `--color-text-quiet` | `#7f8b81` | Supporting labels |
| Border | `--color-border` | `#354038` | Panel and row boundaries |
| Accent | `--color-accent` | `#9ee7b5` | Links, route line, focus |
| Accent strong | `--color-accent-strong` | `#c7f5d3` | Hovered accent text |
| Accent ink | `--color-accent-ink` | `#102117` | Text on accent fill |
| Confirmed | `--color-confirmed` | `#75d79a` | Confirmed state |
| Confirmed soft | `--color-confirmed-soft` | `#193526` | Confirmed badge background |
| TBD | `--color-tbd` | `#f2bd62` | Unresolved state |
| TBD soft | `--color-tbd-soft` | `#3c2c16` | Unresolved badge background |

Accent is functional, not decorative. The palette is dark-only to match the single-theme information utility brief.

## 3. Typography

Primary stack: `Pretendard Variable`, `Pretendard`, `-apple-system`, `BlinkMacSystemFont`, `Apple SD Gothic Neo`, `Noto Sans KR`, sans-serif. A CDN is intentionally avoided for privacy and speed; installed system fonts take precedence.

| Level | Token | Size / line | Weight | Usage |
|---|---|---|---|---|
| Display | `--text-display` | `clamp(2.5rem, 11vw, 4.75rem)` / 0.98 | 760 | Workshop title |
| H2 | `--text-h2` | `1.5rem` / 1.25 | 700 | Section headings |
| H3 | `--text-h3` | `1.0625rem` / 1.4 | 650 | Item titles |
| Body | `--text-body` | `1rem` / 1.65 | 450 | Default text |
| Small | `--text-small` | `0.875rem` / 1.55 | 500 | Metadata |
| Label | `--text-label` | `0.75rem` / 1.4 | 650 | Badges and nav |

## 4. Spacing & Layout

Base unit: 4px. Tokens: `--space-1` 4px, `--space-2` 8px, `--space-3` 12px, `--space-4` 16px, `--space-5` 20px, `--space-6` 24px, `--space-8` 32px, `--space-10` 40px, `--space-12` 48px, `--space-16` 64px.

- Mobile gutter: `--page-gutter` 20px; desktop: 32px.
- Content max width: `--content-width` 960px.
- Sections stack in one column on mobile; selective two-column grids begin at 768px.
- The sticky navigation owns horizontal overflow; the page itself must never scroll horizontally.

## 5. Components

### Section frame
- **Structure:** semantic `section` + heading + content.
- **Spacing:** `--space-10` between sections, `--space-5/6` inner rhythm.
- **States:** static; empty content is represented by explicit text rather than blank space.
- **Accessibility:** ordered headings, anchor target offset for sticky nav.
- **Layout:** vertical stack.

### Surface panel
- **Structure:** grouped article or list on surface background.
- **Variants:** default, raised, amber unresolved.
- **States:** hover only when interactive; focus uses a 3px accent outline.
- **Depth:** tonal shift plus a one-token border; no drop shadows.

### Status badge
- **Variants:** confirmed mint, TBD amber.
- **Spacing:** `--space-1` × `--space-2`; full pill.
- **Accessibility:** status is always written as text, never color-only.

### Navigation chip
- **Structure:** anchor link in a horizontal scroll row.
- **States:** default, hover, active press, visible focus.
- **Accessibility:** 44px minimum touch target; Korean labels remain one line.

### Timeline row
- **Structure:** time column + route marker + title/description/status.
- **Variants:** confirmed solid marker, TBD amber ring.
- **Accessibility:** chronological ordered list and visible status text.

### Checklist row
- **Structure:** native checkbox + item label + optional owner.
- **States:** unchecked, checked with muted strike, focus-visible.
- **Accessibility:** native input remains operable and has a visible label.

## 6. Motion & Interaction
- Micro feedback: 140ms `ease-out`, only `transform`, `opacity`, and colors.
- Buttons translate by 1px on press; check state changes are immediate.
- No automatic animation. `prefers-reduced-motion` removes smooth scrolling and transitions.

## 7. Depth & Surface
Strategy: **mixed tonal shift + borders**. Canvas → surface → raised creates hierarchy; a single border defines touchable or grouped regions. No box shadows. Large panels use 20px radius, rows 12px, buttons and badges full-pill.

## 8. Accessibility Constraints & Accepted Debt

### Constraints
- WCAG 2.2 AA: 4.5:1 body contrast, 3:1 large text, keyboard reachability, 44px touch targets.
- Sticky navigation must not cover anchored section headings (`scroll-margin-top`).
- Confirmed/TBD and checklist state use text or native control state in addition to color.
- Content remains readable at 200% zoom and 320px viewport width.

### Personas
- A traveler checking the address one-handed while walking.
- A participant with low vision who relies on strong contrast and browser zoom.
- A distracted participant who needs unresolved items isolated at a glance.

### Accepted Debt
None for V1.
