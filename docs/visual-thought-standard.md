# Visual Thought Standard

This document defines the visual, spatial, and rhythmic standards for presenting emotionally aligned thought moments across the TribeLocus platform.

## Component

All guided thought moments must use the `TaperedThought` component.

```
<TaperedThought
  title="..."
  contextLines={["line 1", "line 2", ...]}
/>
```

## Layout Rules

- Full-screen layout: `h-screen w-screen`
- Centered alignment: `flex items-center justify-center`
- Container width: `max-w-xs` (mobile-first)
- Padding: `px-6` (for breath on mobile)
- Title spacing: `mb-10`
- Title font: `text-3xl md:text-4xl`, `font-semibold`
- Context font: `text-lg md:text-xl`, `leading-relaxed`
- No line should wrap

## Tapered Structure

- Context lines must descend in width
- Line 1 is longest, last line is shortest
- All lines are centered and stacked below the title
- Suggested taper: 4–5 lines max, descending ~2–4 words each

## Timing and Animation

- Title fades in: `2s`, `easeInOut`
- First context line: delayed `3.0s`
- Each additional line: staggered `3.0s` delay
- Line fade-in: `2s`, `easeInOut`
- Each moment adds `2s` of visible stillness (blank screen) before advancing
- No motion offsets (no y-axis or scaling)
- No interaction required — timing must feel like presence, not interface

## Language

- Title and context must carry equal weight
- Title introduces tone, context provides reassurance
- Language must prioritize safety, clarity, and dignity
- Sentences must fit within tapered shape — edit content to fit, not wrap
- Avoid complex punctuation; always use plain ASCII

## Use Cases

This standard applies to:
- `/voice-bridge` → now integrated into `/voice/flow`
- `/thoughts/*` → removed and consolidated into `/flow` structure
- `/onboarding/flow`
- `/reflect/flow`
- `/summary/flow`
- `/whisper/flow`
- `/what-we-are/flow`
- `/flow` → default rhythm homepage
- Whisper mode prompts

## Thoughts Index Viewer (Developer Only)

This legacy route (`/thoughts`) has been removed. All rhythm experiences are now embedded within `/flow`-based structure.

## Dual-Presentation Principle (Beta)

Some user-facing pages may exist in two forms:

1. `page.tsx` (static version): quick readability, fast loading
2. `flow/page.tsx` (rhythm version): immersive, breath-paced interaction

During beta, both will be maintained to observe user response. Long-term, presence-driven flows will take priority.

## Structure Confirmed as of Audit

All current valid routes:

- `/app/page.tsx` – homepage (static)
- `/app/flow/page.tsx` – rhythm homepage ✅
- `/app/onboarding/flow/page.tsx` ✅
- `/app/reflect/flow/page.tsx` ✅
- `/app/reflect/entry/page.tsx` ✅
- `/app/summary/page.tsx` – dynamic summary ✅
- `/app/summary/flow/page.tsx` ✅
- `/app/voice/flow/page.tsx` ✅
- `/app/whisper/flow/page.tsx` ✅
- `/app/ecosystem/flow/page.tsx` ✅
- `/app/what-we-are/page.tsx` (static) ✅
- `/app/what-we-are/flow/page.tsx` ✅
- `/app/dev/flow/page.tsx` – developer testing ✅

## Future Considerations

- All rhythm-anchored UI will default to `TaperedThought`
- Voice-first flows will match pacing here
- A thought block should feel like a held breath, not an instruction
- Developer-only routes will remain in `/dev/flow/` for future prototyping
