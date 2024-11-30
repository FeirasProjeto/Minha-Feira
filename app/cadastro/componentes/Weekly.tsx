interface Props {
  weekdays: {
    id: string;
    dia: string;
  }[];
  onChange: (e: string, bool: boolean) => void;
}

export function Weekly({ weekdays, onChange }: Props) {
  const dias = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
  return (
    <div className="flex flex-col w-full bg-white shadow-big rounded-xl">
      {dias.map((dia) => (
        <div
          className={
            "flex items-center justify-between w-full px-5 py-1 gap-5 " +
            (dia === "Domingo" ? "" : "border-b border-black/5")
          }
        >
          <label htmlFor={dia}>{dia}</label>
          <input
            type="checkbox"
            id={dia}
            checked={weekdays?.some((w) => w.dia === dia)}
            onChange={(e) => {
              onChange(dia, e.target.checked);
            }}
          />
        </div>
      ))}
    </div>
  );
}
