# FINSERV-4162: Investigate notification preferences being ignored

**Status:** In Progress · **Priority:** High
**Sprint:** Sprint 26 · **Story Points:** 8
**Reporter:** Priya Menon (Notifications Lead) · **Assignee:** You (Intern)
**Labels:** `backend`, `typescript`, `notifications`, `investigation`
**Task Type:** Code Debugging

---

## Description

Users who opt out of email notifications still receive emails. Users who set preference for SMS-only still get push notifications.

**DEBUGGING task — no hint comments.**

## Symptoms

- User opts out of email, but still receives marketing emails
- Default preferences seem to override user's saved preferences
- Changing notification channel preference doesn't take effect until app restart

## Acceptance Criteria

- [ ] Root cause found and fixed
- [ ] All unit tests pass
