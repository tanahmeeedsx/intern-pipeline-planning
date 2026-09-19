# Intern Pipeline Planning

A Baserow-based quiz submission pipeline integrated with n8n for automated data processing and Mattermost notifications.

---

## 📌 Project Overview

The **Intern Pipeline Planning** project is designed to automate the quiz submission and processing workflow for interns.

The current implementation focuses on validating the core submission pipeline:

```text
Baserow Form
     ↓
Baserow Table
     ↓
n8n Webhook
     ↓
Field Mapping
     ↓
Mattermost Notification
