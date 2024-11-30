import { useEffect, useState } from "react";
import { getWeek } from "../../../hooks/Week";

interface Props {
  weekdays: diaSemana[];
  onChange: (e: diaSemana, bool: boolean) => void;
}

export function Weekly({ weekdays, onChange }: Props) {
  const [dias, setDias] = useState<diaSemana[]>([]);

  useEffect(() => {
    async function getDias() {
      const temp = await getWeek();
      setDias(temp || []);
    }
    getDias();
  }, []);

  return (
    <div className="flex flex-col w-full bg-white shadow-big rounded-xl">
      {dias.map((dia) => (
        <div
          key={dia.id}
          className={
            "flex items-center justify-between w-full px-5 py-1 gap-5 " +
            (dia.nome === "Domingo" ? "" : "border-b border-black/5")
          }
        >
          <label htmlFor={dia.nome}>{dia.nome}</label>
          <input
            type="checkbox"
            id={dia.id}
            checked={weekdays.some((w) => w.id === dia.id)}
            onChange={(e) => {
              onChange(dia, e.target.checked);
            }}
          />
        </div>
      ))}
    </div>
  );
}

