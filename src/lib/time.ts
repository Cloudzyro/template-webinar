import { webinar } from "../data/webinar";

export const start = new Date(webinar.startsAt);
export const end = new Date(start.getTime() + webinar.durationMinutes * 60_000);

// The time as the host writes it, used before the browser converts it.
export const hostDate = start.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: webinar.hostTimeZone,
});
export const hostTime = `${start.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: webinar.hostTimeZone,
})} ${webinar.hostTimeZoneLabel}`;

const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const googleCalendarUrl = () => {
  const p = new URLSearchParams({
    action: "TEMPLATE",
    text: `${webinar.title} (${webinar.host} webinar)`,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: `${webinar.platform}.`,
  });
  return `https://calendar.google.com/calendar/render?${p}`;
};

export const ics = (url: string) =>
  [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${webinar.host}//Webinar//EN`,
    "BEGIN:VEVENT",
    `UID:${stamp(start)}-webinar@${new URL(url).hostname}`,
    `DTSTAMP:${stamp(start)}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${webinar.title} (${webinar.host} webinar)`,
    `DESCRIPTION:${webinar.platform}.`,
    `URL:${url}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

// "18" to "00:18"
export const timecode = (min: number) => `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;
