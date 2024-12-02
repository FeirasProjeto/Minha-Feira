import { METHODS } from "http";

export async function getFeiras() {
  const res = await fetch("https://back-end-feira.vercel.app/feira");
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  if (!data) return [] as TypeFeira[];
  return data as TypeFeira[];
}

export async function sendFeira(
  feira: addFeira,
  tags: Tag[],
  dias: diaSemana[]
) {
  const res = JSON.stringify({
    ...feira,
    tags: tags.map((t) => ({ id: t.id })),
    diaSemana: dias.map((d) => ({ id: d.id })),
  });

  const data = await fetch("https://back-end-feira.vercel.app/feira", {
    method: "POST",
    body: res,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
