interface Props {
  label: string;
  placeholder: string;
  required: boolean;
  onChange: (e: string) => void;
}

export function Time({ label, placeholder, required, onChange }: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black text-2xl">
        {label} {required && "*"}
      </label>
      <input
        type="time"
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
        step={60}
      />
    </div>
  );
}
