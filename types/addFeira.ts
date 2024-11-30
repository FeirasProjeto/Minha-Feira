type addFeira = {
  nome: string;
  endereco: string;
  numero: string;
  cidade: string;
  coordenada: string;
  horario: string;
  data: string;
  descricao: string;
  imagem: string;
  diaSemana: {
    id: string;
  }[];
  tags: {
    id: string;
  }[];
  userId: string;
};
