export const feirasArray: TypeFeira[] = [
  {
    id: "1",
    name: "Feira de Arte",
    address: "Praça da República, 00",
    number: "123",
    city: "São Paulo",
    description:
      "A feira de arte é um evento que reúne artistas de various estilos.",
    image: "https://via.placeholder.com/331x100?text=1",
    feiranteID: "1",
    date: new Date(),
    tags: [
      { id: "1", name: "Arte" },
      { id: "1", name: "Cultura" },
    ],
    nota: 4.5,
  },
  {
    id: "2",
    name: "Feira de Comida",
    address: "Rua dos Bobos, 00",
    number: "456",
    city: "São Paulo",
    description:
      "A feira de comida é um evento que reúne vendedores de various tipos de comida.",
    image: "https://via.placeholder.com/331x100?text=2",
    feiranteID: "2",
    date: new Date("2024-01-01"),
    tags: [
      { id: "2", name: "Comida" },
      { id: "2", name: "Gastronomia" },
    ],
    nota: 4.8,
  },
  {
    id: "3",
    name: "Feira de Música",
    address: "Rua da Música, 00",
    number: "789",
    city: "São Paulo",
    description:
      "A feira de música é um evento que reúne músicos de various estilos.",
    image: "https://via.placeholder.com/331x100?text=3",
    feiranteID: "3",
    date: new Date("2024-02-01"),
    tags: [
      { id: "3", name: "Música" },
      { id: "3", name: "Rock" },
    ],
    nota: 5.0,
  },
];
