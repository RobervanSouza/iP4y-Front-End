export type CardsProps = {
  item: {
    nome: string;
    sobrenome: string;
    nascimento: string;
    email: string;
    genero: string;
    cpf: string;
    id: number;
  };
  onDeletar: (itemId: number) => void;
  onEditar: (editedItem: any) => void;
};
