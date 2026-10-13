export function SectionLabel({ number, name }: { number: string; name: string }) {
  return (
    <p className="label flex items-center gap-3">
      <span>
        <span className="text-cobalt">{number}</span> / {name}
      </span>
      <span aria-hidden="true" className="h-px w-10 bg-ink" />
    </p>
  );
}
