export async function getTags(): Promise<Tag[]> {
  const res = await fetch("https://back-end-feira.vercel.app/tag");
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error);
  }

  return data;
}

