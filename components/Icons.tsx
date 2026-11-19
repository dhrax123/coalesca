export const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const ArrowLeft = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const NE = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Tick = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="#0B1222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const Spark = ({ size = 22, color = "#FFB23F" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" aria-hidden="true"><path d="M13 0l3 10 10 3-10 3-3 10-3-10-10-3 10-3z" fill={color} /></svg>
);

/** Small line icons, 20px, stroke = currentColor */
const P = (d: string) => () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
export const I = {
  person: P("M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1-4.5 4.5-6 8-6s7 1.5 8 6"),
  check: P("M5 12l4 4 10-10"),
  servers: P("M5 4h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM5 14h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2z"),
  trend: P("M4 17l5-5 4 4 7-8"),
  code: P("M8 7l-5 5 5 5M16 7l5 5-5 5"),
  cloud: P("M7 18a4 4 0 01-.5-8A6 6 0 0118 9a4.5 4.5 0 01-.5 9H7z"),
  db: P("M5 6c0-1.7 3-3 7-3s7 1.3 7 3-3 3-7 3-7-1.3-7-3zM5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6"),
  shield: P("M12 3l7 3v6c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3z"),
  monitor: P("M5 4h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM8 20h8"),
  qa: P("M9 11l2 2 4-4M8 4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4z"),
  bars: P("M4 19V9M10 19V5M16 19v-7"),
  search: P("M11 17.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM16 16l5 5"),
  list: P("M5 12h14M5 7h14M5 17h9"),
  clock: P("M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2"),
  doc: P("M6 21V3h8l4 4v14H6z"),
  refresh: P("M5 12a7 7 0 0112.2-4.7M19 12a7 7 0 01-12.2 4.7M17 3v4.5h-4.5M7 21v-4.5h4.5"),
  building: P("M5 21V4a1 1 0 011-1h12a1 1 0 011 1v17M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"),
  home: P("M3 10l9-6 9 6v10H3V10zM9 20v-6h6v6"),
  mail: P("M4 6h16v12H4zM4 7l8 6 8-6"),
  pin: P("M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"),
  upload: P("M12 16V4M7 9l5-5 5 5M5 20h14"),
};
