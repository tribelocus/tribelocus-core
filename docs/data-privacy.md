# Data Privacy in TribeLocus

Data privacy in TribeLocus is not a feature. It’s a foundation.

We don’t track users. We don’t store without consent. We don’t use data to optimize engagement or behavior.

We protect emotional truth — not because we’re required to, but because it’s the right thing to do.

This page explains how we handle voice, tone, and personal information in a way that protects dignity and trust.

---

## Core Commitments

- **Nothing is stored unless explicitly requested**
- **No personal data is used to influence or predict behavior**
- **Consent is not assumed — it is active, visible, and reversible**
- **All data flow is auditable and designed for minimal exposure**

---

## What We Collect (And When)

| Data Type             | When It’s Collected                  | When It’s Deleted                    | Notes                              |
|----------------------|--------------------------------------|--------------------------------------|-------------------------------------|
| Voice reflections     | Only if the user opts to save        | Immediately unless saved             | Stored in S3 with encryption        |
| Tone summaries        | After tone analysis (if user consents) | Expired after 24h unless stored     | Used for self-insight, never profiling |
| Shared reflections    | If user shares with trainer/admin    | Revoked on request                   | Viewable only by role-based access  |
| Logs (system only)    | Errors, consent events, system health | 24 hours                             | No IPs, no session tracking         |

We do not collect browsing behavior, device fingerprints, or usage analytics.

---

## Consent Logic

Every flow — voice, feedback, sharing — includes a consent check.

- **Saving a reflection?** You must tap or click “Save” — nothing is stored by default.
- **Sharing with a trainer?** You choose who sees what, and can revoke at any time.
- **Want to delete everything?** We delete it fully, and confirm with you.

Silence is never treated as agreement.

All data sent to third-party models (e.g. OpenAI for tone reflection) is:
- Transmitted only when a user initiates reflection
- Anonymized where possible (no names, no identifiers)
- Not used for training or retention by third-party providers
- Protected by OpenAI’s API data use policies, which prohibit model training on API data

---

## Storage Systems (AWS)

We use the following AWS services for secure, consent-based storage:

- **S3 (voice and tone summaries)** — Encrypted at rest and in transit
- **PostgreSQL (user metadata, consent flags)** — Role-protected, no sensitive voice content
- **Redis (temporary emotional context)** — Ephemeral, never written to disk

All AWS services follow strict security posture:
- All stored data is encrypted (AES-256 at rest, TLS in transit)
- IAM roles follow least-privilege principles — no one sees more than they need
- Logs, audit trails, and consent flags are retained for internal integrity (never public)
- Data remains within declared region (`us-east-1`) and is never transferred without disclosure

---

## Sharing & External Access

- We never sell, rent, or share data with third parties.
- Reflections are never used for marketing, AI training, or behavior scoring.
- Trainers and admins only see what users share — and nothing more.
- All admin/trainer access is logged and can be revoked.

---

## User Rights

You can:

- See what’s stored
- Delete what you’ve shared
- Revoke any prior consent
- Request full data removal

We will respond to all requests within 72 hours — or sooner if humanly possible.

---

## Transparency & Compliance

TribeLocus is committed to full alignment with:

- OpenAI API Terms of Use
- AWS Acceptable Use and Security Standards
- GDPR and CCPA (in spirit and implementation)

We do not store or process any personally identifiable data (PII) without consent.  
We do not send identifiable data to OpenAI, AWS, or any third party.

We will publish transparency updates regularly as this platform evolves.

---

## In Closing

We are not trying to learn about our users. We are trying to walk with them.

Data is never extracted. It is offered — if and when someone feels ready.

That’s the difference.

And that’s the promise we make with every voice TribeLocus receives.
