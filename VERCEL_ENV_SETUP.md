# Vercel Environment Variables Setup

This guide will help you add the required environment variables to your Vercel project for the lead notification system.

## Required Variables

### 1. NOTIFICATION_EMAIL (Required)
The email address where lead notifications will be sent.

```bash
vercel env add NOTIFICATION_EMAIL production
# Enter: info@directcareindy.com (or your preferred email)
```

### 2. Choose ONE of the following notification methods:

#### Option A: Webhook (Recommended for Zapier/Make.com)
```bash
vercel env add LEAD_WEBHOOK_URL production
# Enter: https://your-webhook-url.com/leads
```

#### Option B: Resend API
```bash
vercel env add RESEND_API_KEY production
# Enter: Your Resend API key from https://resend.com/api-keys
```

#### Option C: SendGrid API
```bash
vercel env add SENDGRID_API_KEY production
# Enter: Your SendGrid API key from https://app.sendgrid.com/settings/api_keys
```

## Adding to All Environments

After adding to production, also add to preview and development:

```bash
# For each variable, run:
vercel env add <VARIABLE_NAME> preview
vercel env add <VARIABLE_NAME> development
```

## Quick Setup Commands

Run these commands one by one (you'll be prompted to enter values):

```bash
# Required
vercel env add NOTIFICATION_EMAIL production
vercel env add NOTIFICATION_EMAIL preview
vercel env add NOTIFICATION_EMAIL development

# Choose one notification method:
# Webhook:
vercel env add LEAD_WEBHOOK_URL production
vercel env add LEAD_WEBHOOK_URL preview
vercel env add LEAD_WEBHOOK_URL development

# OR Resend:
vercel env add RESEND_API_KEY production
vercel env add RESEND_API_KEY preview
vercel env add RESEND_API_KEY development

# OR SendGrid:
vercel env add SENDGRID_API_KEY production
vercel env add SENDGRID_API_KEY preview
vercel env add SENDGRID_API_KEY development
```

## Verify Setup

Check your environment variables:
```bash
vercel env ls
```

## Sync to Local Development

After adding to Vercel, sync to your local `.env.local`:
```bash
vercel env pull .env.local
```

## Priority Order

The system will try notification methods in this order:
1. Webhook (if `LEAD_WEBHOOK_URL` is set)
2. Resend API (if `RESEND_API_KEY` is set)
3. SendGrid API (if `SENDGRID_API_KEY` is set)
4. Console logging (fallback for development)

## Testing

After deployment, test the lead notification by:
1. Submitting the onboarding form at `/join`
2. Check your email/webhook for the notification
3. Verify the subject line includes persona and health goal

