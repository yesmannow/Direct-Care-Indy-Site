# Resend Email Setup - Direct Care Indy

## ✅ Implementation Complete

The lead notification system is now configured to use Resend with the sandbox email address for Gmail delivery.

## Configuration

### Environment Variables Required

Add to Vercel (and `.env.local` for local development):

```bash
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_your_api_key_here

# Notification email (your Gmail address)
NOTIFICATION_EMAIL=hoosierdarling@gmail.com
```

### Vercel Setup Commands

```bash
# Add Resend API Key
vercel env add RESEND_API_KEY production
vercel env add RESEND_API_KEY preview
vercel env add RESEND_API_KEY development

# Add notification email
vercel env add NOTIFICATION_EMAIL production
vercel env add NOTIFICATION_EMAIL preview
vercel env add NOTIFICATION_EMAIL development
```

## How It Works

1. **Sandbox Email**: Uses `onboarding@resend.dev` as the "from" address
   - Required for unverified domains
   - Allows sending to your registered Gmail address for free
   - No domain verification needed

2. **Email Format**:
   - **B2B Leads**: `🏢 Employer Lead: [Business Name] ([Employee Count] staff)`
   - **B2C Leads**: `🩺 New Patient: [Name] ([Health Goal/Persona])`

3. **Email Content**:
   - Contact information (name, email, phone)
   - Business details (for employer leads) or patient details (for individual leads)
   - Estimated savings (for employer leads)
   - Source tracking

## Testing

1. Submit the onboarding form at `/join`
2. Check your Gmail inbox (hoosierdarling@gmail.com)
3. Verify the email subject and content

## Next Steps

1. Get your Resend API key from https://resend.com/api-keys
2. Add `RESEND_API_KEY` to Vercel environment variables
3. Add `NOTIFICATION_EMAIL` to Vercel (if different from default)
4. Deploy and test!

## Notes

- The sandbox email (`onboarding@resend.dev`) works for development and testing
- For production with a custom domain, you'll need to verify your domain in Resend
- The current setup works perfectly for Gmail delivery without domain verification

