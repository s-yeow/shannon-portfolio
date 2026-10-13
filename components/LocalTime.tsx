'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Taipei',
  hour: 'numeric',
  minute: '2-digit',
});

/** Shannon's local time in Taiwan. Rendered client-side only to avoid hydration mismatch. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="label text-muted">
      Currently in Taiwan{time && ` · ${time}`}
    </span>
  );
}
