type TypeFeira = {
    id: string,
    nome: string,
    endereco: string,
    numero: string,
    cidade: string,
    descricao: string,
    imagem: string,
    userId: string,
    data: string,
    tags: {
        id: string,
        nome: string
    }[],
    nota: number
}