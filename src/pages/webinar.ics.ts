import type { APIRoute } from "astro";
import { ics } from "../lib/time";

// A calendar invite built from src/data/webinar.ts at build time.
export const GET: APIRoute = ({ site }) =>
  new Response(ics(new URL("/", site).toString()), {
    headers: { "Content-Type": "text/calendar; charset=utf-8" },
  });
