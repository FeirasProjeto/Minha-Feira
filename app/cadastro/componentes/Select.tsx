interface Props {
  label: string;
  placeholder: string;
  items: string[];
  required: boolean;
}

export function Select({ label, placeholder, items, required }: Props) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-black text-2xl">
        {label} {required && "*"}
      </label>
      <select
        required={required}
        className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
      >
        <option value="">{placeholder}</option>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
