interface Props {
  weekdays: string[];
  setWeekdays: (weekdays: string[]) => void;
}

export function Weekly({ weekdays, setWeekdays }: Props) {
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
    <div className="flex flex-col gap-2 ">
      <label className="text-black text-2xl">Semanal?</label>
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
              onChange={(e) => {
                if (e.target.checked) {
                  setWeekdays([...weekdays, dia]);
                } else {
                  setWeekdays(weekdays.filter((d) => d !== dia));
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
