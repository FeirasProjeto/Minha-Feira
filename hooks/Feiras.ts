import { METHODS } from "http";

export async function getFeiras() {
  const res = await fetch("https://back-end-feira.vercel.app/feira");
  const data = await res.json();
  console.log(data);
  if (data.error) throw new Error(data.error);
  if (!data) return [] as TypeFeira[];
  return data as TypeFeira[];
}

export async function sendFeira(feira: addFeira) {
  console.log(JSON.stringify(feira));
}
