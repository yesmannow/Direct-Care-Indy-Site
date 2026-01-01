#!/bin/bash
# Script to add environment variables to Vercel
# Usage: Run each command and enter the value when prompted

echo "Adding environment variables to Vercel..."
echo ""
echo "You'll be prompted to enter values for each variable."
echo "Press Enter to skip optional variables."
echo ""

# Required: Notification email
echo "1. Adding NOTIFICATION_EMAIL (required)..."
vercel env add NOTIFICATION_EMAIL production

# Optional: Webhook URL (for Zapier, Make.com, etc.)
echo ""
echo "2. Adding LEAD_WEBHOOK_URL (optional - for webhook notifications)..."
echo "   You can skip this if using Resend or SendGrid instead"
vercel env add LEAD_WEBHOOK_URL production

# Optional: Resend API Key
echo ""
echo "3. Adding RESEND_API_KEY (optional - for Resend email service)..."
echo "   Get your API key from https://resend.com/api-keys"
vercel env add RESEND_API_KEY production

# Optional: SendGrid API Key
echo ""
echo "4. Adding SENDGRID_API_KEY (optional - for SendGrid email service)..."
echo "   Get your API key from https://app.sendgrid.com/settings/api_keys"
vercel env add SENDGRID_API_KEY production

echo ""
echo "Done! Remember to also add these to:"
echo "  - Preview environment: vercel env add <VAR> preview"
echo "  - Development environment: vercel env add <VAR> development"
echo ""
echo "Or use: vercel env pull to sync to your local .env.local file"

