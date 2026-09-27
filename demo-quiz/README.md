# Demo Quiz — Generic Pipeline (Initial Proof of Concept)

This was the first pass at the pipeline: confirm Baserow → n8n → Mattermost works end to end, using a generic `Participant / Quiz Name / Score / Submitted At` table — before any per-question scoring logic existed.

See the main [README.md](../README.md) for the current, real implementation (Springer Capital Accounts Quiz 3).

## Flow

Baserow Form → Baserow Table → n8n Trigger → Field Mapping → Dhaka Time Conversion → Mattermost Notification


## Implemented

- Baserow Quiz Submissions table (Participant, Quiz Name, Score, Submitted At)
- Baserow → n8n webhook integration
- Field mapping + Dhaka timezone (UTC+6) conversion
- Mattermost notification via bot account `quiz_bot_tanjim`
- End-to-end tested against the live production webhook

## Sample Notification
New quiz submission

Participant: Tanjim Ahmed
Quiz: Intern Pipeline Planning Infrastructure
Score: 9
Submitted at: 22 Sep 2026, 03:16 AM


## Screenshots

### 1. Baserow Form
The submission form used for this early test.

![Baserow Form](screenshots/baserow-form.png)

### 2. n8n Workflow
The original Webhook → Edit Fields → Post a message workflow.

![n8n Pipeline](screenshots/n8n-final-workflow.png)

### 3. Mattermost Notification
The notification posted for this test run.

![Mattermost Notification](screenshots/mattermost-notification.png)

## Status

| Component | Status |
|---|---|
| Baserow Table | ✅ Completed |
| Baserow Form | ✅ Completed |
| Baserow → n8n Integration | ✅ Completed |
| Mattermost Notification | ✅ Completed |
