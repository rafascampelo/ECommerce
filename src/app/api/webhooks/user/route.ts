import prisma from "@/lib/prisma";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRiqueredHeaders } from "svix";

const WebhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };
  const wh = new Webhook(WebhookSecret);
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
