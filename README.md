# Intern Pipeline Planning

## Overview

Baserow-based quiz submission pipeline integrated with n8n for automated processing and Mattermost notification.

## Current Workflow

Baserow Form
→ Baserow Table
→ n8n Webhook
→ Field Mapping
→ Mattermost Notification

## Baserow

Created and tested the `Quiz Submissions` table with:

- Participant
- Quiz Name
- Score
- Submitted At

The form submission creates a new row in Baserow.

## n8n

The n8n workflow receives new Baserow rows through a webhook.

### Completed

- Baserow form created
- Baserow table configured
- Baserow → n8n webhook connected
- Real form submission tested
- Field mapping completed
- Submitted At converted to Dhaka time
- Mattermost notification node prepared

## Evidence

### Baserow Form
Add screenshot here.

### Baserow Table
Add screenshot here.

### n8n Webhook
Add screenshot here.

### n8n Field Mapping
Add screenshot here.

### Mattermost
Add screenshot here when the notification is tested successfully.

## Status

The main submission pipeline has been implemented and tested. Mattermost notification is the remaining integration step pending credential/channel confirmation.
