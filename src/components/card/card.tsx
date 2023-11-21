import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styled";
import EditarModal from "../editar/editar"; // Importe o componente EditarModal
import { Box, Center, ScrollView } from "native-base";

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
    <ScrollView>
      <View style={styles.card}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto}>
            Nome:
          </Text>
          <Text style={styles.itemTexto} >{` ${item.nome}`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto}>
            Sobre Nome:
          </Text>
          <Text
            style={styles.itemTexto}>{` ${item.sobrenome}`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto}>Data Nascimento:</Text>
          <Text style={styles.itemTexto}>{` ${item.nascimento}`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto}>E-mail:</Text>
          <Text style={styles.itemTexto}>{` ${item.email}`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto}>Genero:</Text>
          <Text style={styles.itemTexto}>{` ${item.genero}`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.texto}>CPF:</Text>
          <Text style={styles.itemTexto}>{` ${item.cpf}`}</Text>
        </View>

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
              <Box
                backgroundColor="green.600"
                w={122}
                alignItems="center"
                borderColor="black"
                color="white.400"
                borderWidth={2}
                borderRadius={22}>
                <TouchableOpacity onPress={() => setIsEditing(true)}>
                  <Text style={styles.botaoEditar}>Editar</Text>
                </TouchableOpacity>
              </Box>
              <Box
                backgroundColor="red.600"
                w={122}
                alignItems="center"
                borderRadius={22}
                borderColor="black"
                color="white.400"
                borderWidth={2}>
                <TouchableOpacity onPress={() => onDeletar(item.id)}>
                  <Text style={styles.botaoDeletar}>Deletar</Text>
                </TouchableOpacity>
              </Box>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default RenderizarItem;
