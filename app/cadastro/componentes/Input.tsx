interface Props {
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
  onChange: (e: string) => void;
}

export function Input({ label, placeholder, required, type, onChange }: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black text-2xl">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
      />
    </div>
  );
}
