interface Props {
  onChange: (e: Date) => void;
  value: Date;
}

export function DateInput({ onChange, value }: Props) {
  return (
    <input
      type="date"
      onChange={(e) => onChange(e.target.valueAsDate)}
      value={value.toISOString().split("T")[0] || ""}
      className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
    />
  );
}
