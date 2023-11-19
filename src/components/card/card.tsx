import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styled";
import { Box } from "native-base";

type RenderizarItemProps = {
  item: {
    nome: string;
    sobrenome: string;
    nascimento: string;
    email: string;
    genero: string;
    cpf: string;
    id: number;
  };
  onEditar: (item: any) => void; // ou ajuste o tipo conforme necessário
  onDeletar: (itemId: number) => void; // ou ajuste o tipo conforme necessário
};

const RenderizarItem: React.FC<RenderizarItemProps> = ({
  item,
  onDeletar,
  onEditar,
}) => (
  <View style={styles.card}>
    <Text>{`Nome: ${item.nome}`}</Text>
    <Text>{`Sobrenome: ${item.sobrenome}`}</Text>
    <Text>{`Nascimento: ${item.nascimento}`}</Text>
    <Text>{`Email: ${item.email}`}</Text>
    <Text>{`Gênero: ${item.genero}`}</Text>
    <Text>{`CPF: ${item.cpf}`}</Text>

    <Box p={2}  >
      <View style={styles.botoesContainer}>
        <TouchableOpacity onPress={() => onEditar(item)}>
          <Text style={styles.botaoEditar}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDeletar(item.id)}>
          <Text style={styles.botaoDeletar}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </Box>
  </View>
);

export default RenderizarItem;
