interface Props {
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
  onChange: (e: string) => void;
  value: string;
}

export function Input({ label, placeholder, required, type, onChange, value }: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black text-2xl">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
      />
    </div>
  );
}
