# Weekend Route Design System

## 0. Research Log
- Embedded refs: shortlisted Linear, Airbnb, Notion → picked taste-skill + Linear because a compact itinerary benefits from precise hierarchy and status-led navigation; replaced the purple brand accent with travel-map mint.
- Lazyweb: skipped — no browsing is needed for this small utility and no external screen research tool was requested.
- Imagen drafts: skipped — no image-generation tool is available; the product is information-first rather than photography-led.
- Direction: a night route card carried in one hand, now stamped like a small friends-only boarding pass. Charcoal layers stay calm and durable; mint marks the route, tangerine carries Jeju warmth and playful photo moments, while amber remains reserved for unresolved decisions.

## 1. Atmosphere & Identity
A compact, dependable pocket itinerary: dark like an evening map, bright at the exact points where a traveler needs certainty. The signature is the **route line** paired with a **boarding-pass hero**—a perforated, dimensional ticket whose mint route and tangerine Jeju seal make four friends' weekend feel personal without obscuring practical details.

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
| Tangerine | `--color-tangerine` | `#ff9d4d` | Jeju seal, playful mission action |
| Tangerine strong | `--color-tangerine-strong` | `#ffc078` | Highlight and hover state |
| Tangerine ink | `--color-tangerine-ink` | `#2b1608` | Text on tangerine fill |
| Tangerine soft | `--color-tangerine-soft` | `#3b2416` | Warm ticket glow and pose panel |
| Confirmed | `--color-confirmed` | `#75d79a` | Confirmed state |
| Confirmed soft | `--color-confirmed-soft` | `#193526` | Confirmed badge background |
| TBD | `--color-tbd` | `#f2bd62` | Unresolved state |
| TBD soft | `--color-tbd-soft` | `#3c2c16` | Unresolved badge background |

Mint remains the functional route accent. Tangerine is a tightly scoped travel accent for the boarding-pass seal and hackathon-tee photo interaction; amber continues to mean only “미정.” The palette is dark-only.

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
- **Variants:** confirmed mint, planned neutral (raised surface + muted text, “예정”), TBD amber. Estimated times and travel plans must never use the confirmed variant.
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
- **Highlight:** the shared Saturday dinner uses a raised-surface content panel, accent border and `--space-4` padding; no invented time certainty.
- **Time column:** `--space-16` wide, wrapping at word boundaries for estimated ranges.

### Participant detail row
- Name/index occupy a compact first line; descriptive travel notes span the remaining width below the name on mobile and desktop.
- Body copy uses word-preserving Korean wrapping and secondary text color.

### Gallery empty state
- Semantic region below the mission with a heading and explicit “photos will be added” text; no sample photos presented as real trip photos.

### Boarding-pass hero
- **Structure:** hero copy and essentials sit beside a ticket stub containing route, travel dates, party size, and a stylized Jeju/tangerine seal.
- **Material:** canvas-to-surface tonal layers, a perforated divider, mint route marks, tangerine radial glow, and tinted depth shadow.
- **Responsive:** one composition below 768px; copy and ticket form an asymmetric two-column layout at tablet/desktop.
- **Accessibility:** ticket repeats only known trip facts, decorative SVG is hidden, and all Korean phrases preserve natural line breaks.

### Pose shuffler
- **Structure:** tangerine action button followed by a polite live region that presents one photo-pose suggestion for the hackathon tee mission.
- **States:** initial invitation, pressed feedback, then deterministic cycling through suggestions; no random or invented itinerary information.
- **Accessibility:** native button, 44px minimum target, visible focus, `aria-live="polite"`; the interaction remains fully usable with reduced motion.

### Checklist row
- **Structure:** native checkbox + item label + optional owner.
- **States:** unchecked, checked with muted strike, focus-visible.
- **Accessibility:** native input remains operable and has a visible label.

## 6. Motion & Interaction
- Micro feedback: `--motion-fast` 140ms and `--motion-swap` 200ms, both `ease-out`; only `transform`, `opacity`, `filter`, and colors.
- Buttons translate by 1px on press; check state changes are immediate.
- Pose shuffler adapts beui.dev `action-swap`: the suggestion uses a short opacity/blur swap after a deliberate button press; no motion library is added.
- No automatic animation. `prefers-reduced-motion` removes smooth scrolling, blur, and transitions.

## 7. Depth & Surface
Strategy: **mixed tonal shift + borders**, with one documented exception: the boarding-pass focal object may use `--shadow-ticket`, a tinted mint/tangerine depth shadow that makes the ticket read as a physical object. Canvas → surface → raised creates hierarchy; a single border defines other touchable or grouped regions. Large panels use 20px radius, rows 12px, buttons and badges full-pill.

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
