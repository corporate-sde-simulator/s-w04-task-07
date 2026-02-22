# PR Review - Notification preference manager (by Amit Kumar)

## Reviewer: Neha Sharma
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `preferenceManager.ts`

> **Bug #1:** Default preferences override user preferences instead of merging and user choices are lost
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `channelRouter.ts`

> **Bug #2:** Opt-out for email still sends emails because the channel filter checks opt-in list not opt-out
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Amit Kumar**
> Acknowledged. I have documented the issues for whoever picks this up.
