import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const secret = process.env.HINT_WEBHOOK_SECRET;
    const providedSignature = req.headers.get("x-hint-signature");

    if (secret && providedSignature !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { event_type, patient } = body || {};

    if (event_type === "patient.created" && patient) {
      console.log(`New Hint Health patient: ${patient.email || "unknown email"}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Hint webhook error", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
