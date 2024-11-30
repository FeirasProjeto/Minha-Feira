import { useEffect, useState } from "react";
import { getTags } from "../../../hooks/Tag";
import { X } from "lucide-react";

interface Props {
  onChange: (e: Tag[]) => void;
  value: Tag[];
}

export function TagInput({ onChange, value }: Props) {
  const [options, setOptions] = useState<Tag[]>([]);

  const [selected, setSelected] = useState<string>();

  function onSelect(tag: Tag) {
    onChange([...value, tag]);
  }

  function onDelete(tag: Tag) {
    if (value.length == 1) {
      setSelected("");
    }
    onChange(value.filter((v) => v.id !== tag.id));
  }

  useEffect(() => {
    async function fetch() {
      const res = await getTags();

      setOptions(res);
    }

    fetch();
  });
  return (
    <div className="flex flex-col w-full">
      <label className="text-black text-2xl">Tags</label>
      <div className="flex flex-col gap-2">
        <select
          onChange={(e) =>
            onSelect(options.find((o) => o.id === e.target.value)!)
          }
          value={selected}
          className="bg-white rounded-xl p-2 text-black shadow-big pl-5"
        >
          <option value="">Selecione uma tag</option>
          {options.map((option) => (
            <option
              disabled={value.some((v) => v.id === option.id)}
              value={option.id}
              key={option.id}
            >
              {option.nome}
            </option>
          ))}
        </select>
        <div className="flex gap-2 flex-wrap w-full">
          {value.map((v) => (
            <div
              key={v.id}
              className="flex items-center gap-2 bg-gray-200 p-2 rounded-xl w-fit"
            >
              <span className="text-black">{v.nome}</span>
              <button
                type="button"
                className="text-black hover:text-red-600"
                onClick={() => onDelete(v)}
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
