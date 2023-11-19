import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styled";
import EditarModal from "../editar/editar"; // Importe o componente EditarModal

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
  onDeletar: (itemId: number) => void;
  onEditar: (editedItem: any) => void;
};

const RenderizarItem: React.FC<RenderizarItemProps> = ({
  item,
  onDeletar,
  onEditar,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (editedItem) => {
    onEditar(editedItem);
    setIsEditing(false);
  };

  return (
    <View style={styles.card}>
      <Text>{`Nome: ${item.nome}`}</Text>
      <Text>{`Sobrenome: ${item.sobrenome}`}</Text>
      <Text>{`Nascimento: ${item.nascimento}`}</Text>
      <Text>{`Email: ${item.email}`}</Text>
      <Text>{`Gênero: ${item.genero}`}</Text>
      <Text>{`CPF: ${item.cpf}`}</Text>

      <View style={styles.botoesContainer}>
        {isEditing ? (
          // Modal de Edição
          <EditarModal
            isVisible={isEditing}
            onEditar={handleSave}
            onCancel={() => setIsEditing(false)}
            editedItem={item}
          />
        ) : (
          <>
            <TouchableOpacity onPress={() => setIsEditing(true)}>
              <Text style={styles.botaoEditar}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDeletar(item.id)}>
              <Text style={styles.botaoDeletar}>Deletar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default RenderizarItem;
