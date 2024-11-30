interface Props {
  onChange: (e: string) => void;
  value: string;
}

export function DateInput({ onChange, value }: Props) {
  return (
    <input
      type="date"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
    />
  );
}
