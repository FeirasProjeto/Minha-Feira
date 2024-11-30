export async function getWeek() {
    const res = await fetch("https://back-end-feira.vercel.app/diasemana");
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.error);
    }
    return data;
}