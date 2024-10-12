type TypeFeira = {
    id: string,
    name: string,
    address: string,
    number: string,
    city: string,
    description: string,
    image: string,
    feiranteID: string,
    date: Date,
    tags: {
        id: string,
        name: string
    }[],
    nota: number
}