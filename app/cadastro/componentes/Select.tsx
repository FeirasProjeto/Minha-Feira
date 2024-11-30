interface Props {
  label: string;
  value: string;
  placeholder: string;
  items: string[];
  required: boolean;
  onChange: (e: string) => void;
}

export function Select({
  label,
  value,
  placeholder,
  items,
  required,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black text-2xl">
        {label} {required && "*"}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
      >
        <option value="">{placeholder}</option>
        {items.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
