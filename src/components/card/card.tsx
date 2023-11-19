import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
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
  onEditar: (item: any) => void; 
  onDeletar: (itemId: number) => void; 
};

const RenderizarItem: React.FC<RenderizarItemProps> = ({
  item,
  onDeletar,
  onEditar,
}) => {

    
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState({
    nome: item.nome,
    sobrenome: item.sobrenome,
    nascimento: item.nascimento,
    email: item.email,
    genero: item.genero,
    cpf: item.cpf,
});


const handleSave = () => {
    setIsEditing(false);
    // Passe o item editado para a função de edição no componente pai
    onEditar({ ...item, ...editedItem });
};

return (
  <View style={styles.card}>
    {isEditing ? (
      <View>
        <Text>Nome:</Text>
        <TextInput
          value={editedItem.nome}
          onChangeText={(text) =>
            setEditedItem((prev) => ({ ...prev, nome: text }))
          }
        />
        {/* Adicione inputs para os outros campos do formulário */}
      </View>
    ) : (
      <>
        <Text>{`Nome: ${item.nome}`}</Text>
        <Text>{`Sobrenome: ${item.sobrenome}`}</Text>
        <Text>{`Nascimento: ${item.nascimento}`}</Text>
        <Text>{`Email: ${item.email}`}</Text>
        <Text>{`Gênero: ${item.genero}`}</Text>
        <Text>{`CPF: ${item.cpf}`}</Text>
      </>
    )}

    <View style={styles.botoesContainer}>
      {isEditing ? (
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.botaoEditar}>Salvar</Text>
        </TouchableOpacity>
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
}

export default RenderizarItem;
