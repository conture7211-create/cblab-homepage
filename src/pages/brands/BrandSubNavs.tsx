import { Link } from 'react-router-dom';

const sep = (
  <span className="mx-2 text-[#d8d2c8]" aria-hidden>
    |
  </span>
);

const navClass =
  'mb-6 flex flex-wrap items-center gap-x-1 font-sans text-[12px] tracking-[0.04em] text-[#6e665c] md:text-[13px]';

const activeClass = 'border-b border-[#b89a6a] pb-0.5 font-medium text-[#111111]';
const linkClass = 'transition-colors hover:text-[#111111]';

type DivalineKey = 'skincare' | 'device' | 'homecare' | null;

export function DivalineSubNav({ active }: { active: DivalineKey }) {
  const item = (key: Exclude<DivalineKey, null>, to: string, label: string) =>
    active === key ? (
      <span className={activeClass}>{label}</span>
    ) : (
      <Link to={to} className={linkClass}>
        {label}
      </Link>
    );

  return (
    <nav className={navClass} aria-label="DIVALINE lines">
      {item('skincare', '/brands/divaline/skincare', 'Skincare')}
      {sep}
      {item('device', '/brands/divaline/device', 'Device')}
      {sep}
      {item('homecare', '/brands/divaline/homecare', 'Homecare')}
    </nav>
  );
}

type LtlKey = 'academy' | 'pmu-system' | 'heritage' | null;

export function LongTimeLinerSubNav({ active }: { active: LtlKey }) {
  const item = (key: Exclude<LtlKey, null>, to: string, label: string) =>
    active === key ? (
      <span className={activeClass}>{label}</span>
    ) : (
      <Link to={to} className={linkClass}>
        {label}
      </Link>
    );

  return (
    <nav className={navClass} aria-label="LONG-TIME-LINER lines">
      {item('academy', '/brands/long-time-liner/academy', 'Academy')}
      {sep}
      {item('pmu-system', '/brands/long-time-liner/pmu-system', 'PMU System')}
      {sep}
      {item('heritage', '/brands/long-time-liner/heritage', 'Heritage')}
    </nav>
  );
}

type BpKey = 'consumer' | 'professional' | 'partnership' | null;

export function BrandPlatformSubNav({ active }: { active: BpKey }) {
  const item = (key: Exclude<BpKey, null>, to: string, label: string) =>
    active === key ? (
      <span className={activeClass}>{label}</span>
    ) : (
      <Link to={to} className={linkClass}>
        {label}
      </Link>
    );

  return (
    <nav className={navClass} aria-label="Brand Platform lines">
      {item('consumer', '/brands/brand-platform/consumer', 'Consumer')}
      {sep}
      {item('professional', '/brands/brand-platform/professional', 'Professional')}
      {sep}
      {item('partnership', '/brands/brand-platform/partnership', 'Partnership')}
    </nav>
  );
}
