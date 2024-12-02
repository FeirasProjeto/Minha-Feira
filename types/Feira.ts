type TypeFeira = {
  id: string;
  nome: string;
  endereco: string;
  numero: string;
  cidade: string;
  horario: string;
  data: string;
  descricao: string;
  imagem: string;
  tags: [{ tag: Tag }];
  diaSemana: [{ diaSemana: diaSemana }];
  userId: string;
  nota: number;
};
