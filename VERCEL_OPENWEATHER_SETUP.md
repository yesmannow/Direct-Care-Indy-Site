# OpenWeather API Key Setup for Vercel

## Quick Setup

Add the OpenWeather API key to Vercel for production, preview, and development environments:

```bash
# Production
vercel env add NEXT_PUBLIC_OPENWEATHER_API_KEY production
# Enter: ea2669bff97a26ccf6139c285f183f46

# Preview (for pull requests)
vercel env add NEXT_PUBLIC_OPENWEATHER_API_KEY preview
# Enter: ea2669bff97a26ccf6139c285f183f46

# Development
vercel env add NEXT_PUBLIC_OPENWEATHER_API_KEY development
# Enter: ea2669bff97a26ccf6139c285f183f46
```

## Verify Setup

Check your environment variables:
```bash
vercel env ls
```

You should see `NEXT_PUBLIC_OPENWEATHER_API_KEY` listed for all three environments.

## Why This is Needed

- `.env.local` is only for **local development** (not committed to git)
- Vercel needs the environment variable in its own system for **production builds**
- The `NEXT_PUBLIC_` prefix makes it available to client-side code (browser)
- Without this, the Indy Breath-Easy widget won't work in production

## After Adding

1. **Redeploy** your Vercel project (or push a new commit to trigger auto-deploy)
2. The widget will automatically start fetching air quality data
3. Test on Dr. Pike's bio page: `/providers/james-pike`

## Alternative: Vercel Dashboard

You can also add it via the Vercel Dashboard:
1. Go to your project → Settings → Environment Variables
2. Add `NEXT_PUBLIC_OPENWEATHER_API_KEY`
3. Set value: `ea2669bff97a26ccf6139c285f183f46`
4. Select all environments (Production, Preview, Development)
5. Save and redeploy

