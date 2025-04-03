# API Overview

The TribeLocus API is not built for automation. It’s built for presence.

Every API call exists to serve one purpose: to gently deliver, process, or reflect emotional truth — with full respect for user consent.

This page outlines the key API routes, what they do, and how they maintain the emotional integrity of the platform.

---

## API Design Principles

- **No action without explicit consent**
- **No data returned unless the user requested it**
- **Minimal data movement, maximum clarity**
- **Every endpoint exists to serve presence, not performance**

---

## Core API Categories

### 1. Voice Reflections

These routes handle secure capture and storage (only when asked).

- `POST /api/voice/upload`  
  Uploads a user’s voice reflection (requires signed S3 URL + consent flag)

- `POST /api/voice/tone-analysis`  
  Sends voice to Lambda for tone summary (transient unless user requests storage)

- `GET /api/voice/:id/summary`  
  Returns emotional summary for stored reflection (requires user token + ownership check)

---

### 2. Emotional Feedback

These routes support real-time or delayed tone reflection.

- `POST /api/emotion/evaluate`  
  Accepts text or audio input, returns a tone analysis (never stored by default)

- `GET /api/emotion/suggestions`  
  Returns nudges, pacing feedback, or “you sound...” reflections based on current tone

---

### 3. Consent & Sharing

These routes manage whether a reflection can be seen or used.

- `POST /api/consent/share-reflection`  
  Grants trainer/admin access to a specific saved reflection

- `DELETE /api/consent/revoke-reflection`  
  Immediately revokes access and purges insights from shared storage (if applicable)

---

### 4. Trainer & Admin Views

These are gated and fully auditable.

- `GET /api/admin/reflections`  
  Returns consented summaries for reflection witnessing (admin only, with role)

- `POST /api/admin/nudge`  
  Sends a soft nudge message to a user — requires tone context and justification

- `POST /api/admin/warn`  
  Issues a respectful warning (logged with tone and language context)

---

## Additional (In Development)

These routes are part of upcoming flows that prioritize presence beyond the screen — including ambient reflection, personalized journaling, and trainer onboarding.

### 5. Journaling & Whisper History

- `POST /api/journal/save-entry`  
  Saves a text or voice-based entry (requires consent + optional tone tagging)

- `GET /api/journal/list`  
  Returns a user’s saved reflections (tone summary only, no transcript unless requested)

- `DELETE /api/journal/:id`  
  Permanently deletes a saved entry and all associated emotional metadata

- `GET /api/journal/emotional-trends`  
  Shows rhythm over time (e.g., “You’ve been speaking more calmly this week”)

_These endpoints are currently in development and subject to change._

---

### 6. Ambient & Wearable Integrations

- `POST /api/voice/ambient-checkin`  
  Accepts short-form voice reflections (e.g. wearable mic, AirPods), no UI required

- `GET /api/ambient/status`  
  Returns current listening state (e.g. “Idle,” “Reflecting,” “Paused”)

- `POST /api/ambient/pause`  
  Manually halts voice input from a wearable device

_These endpoints are currently in development and subject to change._

---

### 7. Trainer Onboarding & Guidance

- `POST /api/trainer/agree-ethics`  
  Confirms understanding of emotional ethics agreement

- `GET /api/trainer/onboarding-status`  
  Returns onboarding phase (e.g. “Completed Whisper Mode Training”)

- `POST /api/trainer/reflect-on-reflection`  
  Adds private trainer notes for self-development (never shared with client)

_These endpoints are currently in development and subject to change._

---

## Authentication

All routes require one of:
- **User token** (JWT or secure session)
- **Trainer token** (role-scoped)
- **Admin token** (limited, with audit trails)

Anonymous access is never allowed — even for “read-only” routes. Tone requires trust.

---

## Error Responses

Errors are human-readable and emotionally neutral:

- `403 Forbidden` → “You don’t have permission to view this.”  
- `422 Unprocessable` → “We couldn’t understand the tone. Want to try again later?”  
- `500 Internal Error` → “Something went wrong on our side. We’re looking into it.”

---

## Rate Limiting & Fairness

To protect emotional pacing:

- Real-time tone feedback is limited to a few calls per minute per user
- Admin actions (nudge, warn) are capped per user per hour
- No route encourages spamming, gaming, or metric-driven use

---

## In Closing

TribeLocus APIs are not just endpoints. They’re emotional handshakes.

We use them not to extract, but to serve — quietly, safely, and always with consent.

If you're building an integration or contributing to the platform, remember:  
> Every API call touches a person’s voice. Treat it like you would their story.

_Want to help us build these layers with care? See [contributing.md](./contributing.md)._
