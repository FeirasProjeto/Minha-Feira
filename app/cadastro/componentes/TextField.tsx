interface Props {
  label: string;
  placeholder: string;
  required?: boolean;
  onChange: (e: string) => void;
  value: string;
}

export function TextField({ label, placeholder, required, onChange, value }: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black text-2xl">
        {label} {required && "*"}
      </label>
      <textarea
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
      />
    </div>
  );
}
