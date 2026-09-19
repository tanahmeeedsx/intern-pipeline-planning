# Intern Pipeline Planning

A Baserow-based intern quiz submission pipeline integrated with **n8n** for automated data processing and **Mattermost** notifications.

---

## 📌 Project Overview

The **Intern Pipeline Planning** project focuses on building and validating the core intern quiz submission pipeline.

The current implementation validates the complete data flow from Baserow to n8n and prepares the final Mattermost notification stage.

### End-to-End Flow

```text
Baserow Form
     ↓
Baserow Table
     ↓
n8n Trigger
     ↓
Field Mapping
     ↓
Dhaka Time Conversion
     ↓
Mattermost Notification
```

---

## 🎯 Current Scope

The current implementation focuses on the submission pipeline rather than creating departmental quiz questions.

### Implemented

* Baserow Quiz Submissions table
* Baserow submission form
* Participant field
* Quiz Name field
* Score field
* Automatic submission timestamp
* Baserow → n8n integration
* n8n field mapping
* Dhaka timezone conversion
* Mattermost notification node preparation
* End-to-end pipeline testing

---

## 🗂️ Baserow Setup

A dedicated **Quiz Submissions** table was created in Baserow to receive quiz submission data.

### Table Fields

| Field        | Purpose                                        |
| ------------ | ---------------------------------------------- |
| Participant  | Stores the participant name                    |
| Quiz Name    | Identifies the submitted quiz                  |
| Score        | Stores the submitted score                     |
| Submitted At | Automatically records the submission timestamp |

The table is connected to the Baserow form so that every form submission creates a new row.

---

## 📝 Baserow Form

The Baserow form provides the submission interface for quiz data.

### Form Fields

* **Participant**
* **Quiz Name**
* **Score**
* **Submitted At**

### Baserow Pipeline

![Baserow Pipeline](./screenshots/baserow-pipeline.png)

---

## ⚙️ n8n Automation

The Baserow table is connected to an n8n workflow.

When a new row is created in Baserow, the n8n workflow receives the submission data and processes the required fields.

### n8n Pipeline

![n8n Pipeline](./screenshots/n8n-pipeline.png)

---

## 🔄 Data Processing

The following fields are received from Baserow and mapped inside n8n:

```text
Participant
Quiz Name
Score
Submitted At
```

The `Submitted At` timestamp is converted to **Dhaka Time (UTC+6)** before the notification stage.

---

## 🔗 Automation Flow

```text
┌─────────────────────────┐
│      Baserow Form       │
│                         │
│ Participant             │
│ Quiz Name               │
│ Score                   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│     Baserow Table       │
│   Quiz Submissions      │
└────────────┬────────────┘
             │
             │ Row Created
             ▼
┌─────────────────────────┐
│          n8n            │
│                         │
│ Trigger                │
│ Field Mapping          │
│ Time Conversion        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│       Mattermost        │
│      Notification       │
└─────────────────────────┘
```

---

## 💬 Mattermost Notification

The final stage of the pipeline is the Mattermost notification.

The n8n workflow is prepared to send the processed quiz submission information to the approved Mattermost channel.

Expected notification:

```text
New Quiz Submission

Participant: <participant>
Quiz: <quiz name>
Score: <score>
Submitted At: <Dhaka time>
```

The Mattermost execution is pending confirmation of the approved n8n credential and destination channel.

---

## 🧪 Testing

The pipeline was tested using real Baserow form submissions.

### Validation Checklist

* [x] Baserow table created
* [x] Baserow form created
* [x] Form submission tested
* [x] Baserow row creation verified
* [x] n8n integration configured
* [x] Baserow data received by n8n
* [x] Field mapping configured
* [x] Dhaka timezone conversion configured
* [x] Mattermost notification node prepared
* [ ] Final Mattermost notification execution

---

## 📸 Implementation Evidence

### Baserow

The Baserow form and submission pipeline setup:

![Baserow Pipeline Evidence](./screenshots/baserow-pipeline.png)

### n8n

The n8n automation and data processing setup:

![n8n Pipeline Evidence](./screenshots/n8n-pipeline.png)

---

## 📁 Project Structure

```text
intern-pipeline-planning/
│
├── screenshots/
│   ├── baserow-pipeline.png
│   └── n8n-pipeline.png
│
└── README.md
```

---

## 🛠️ Technologies Used

| Technology | Purpose                                 |
| ---------- | --------------------------------------- |
| Baserow    | Form and submission data management     |
| n8n        | Workflow automation and data processing |
| Mattermost | Notification and communication          |
| Git        | Version control                         |
| GitHub     | Repository and project documentation    |

---

## 🔐 Security

No passwords, API keys, access tokens, or other sensitive credentials are stored in this repository.

Credentials are managed through the appropriate n8n credential configuration.

---

## 📊 Project Status

| Component                     | Status                  |
| ----------------------------- | ----------------------- |
| Baserow Table                 | ✅ Completed             |
| Baserow Form                  | ✅ Completed             |
| Form Testing                  | ✅ Completed             |
| Baserow → n8n Integration     | ✅ Completed             |
| Field Mapping                 | ✅ Completed             |
| Dhaka Time Conversion         | ✅ Completed             |
| Mattermost Node               | 🟡 Prepared             |
| Final Mattermost Notification | 🟡 Pending Confirmation |

---

## 🚀 Next Step

The next step is to confirm the approved Mattermost credential and destination channel, then execute the final notification step to complete the end-to-end demonstration.

---

## 👨‍💻 Author

**Tanjim Ahmed**

DevOps Intern

**Skills:** Linux • Docker • Git/GitHub • CI/CD • Jenkins • Kubernetes • AWS • Terraform • Cloud & Automation

---

## 📌 Project Status

**Core submission pipeline implemented and tested.**

The current workflow successfully demonstrates:

```text
Baserow
   ↓
n8n
   ↓
Data Processing
   ↓
Mattermost
```

The final Mattermost execution remains pending credential and channel confirmation.

