import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import RenderizarItem from "../../components/card/card";
import { styles } from "./styled";
import { Box, VStack } from "native-base";

const Home = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function pegarDados() {
      try {
        const response = await axios.get(
          "http://10.0.2.2:8000/api/formulario/"
        );
        console.log("itens api", response.data);
        setDados(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      }
    }

    pegarDados();
  }, []);

    const handleEditar = (item) => {
      // Lógica para ação de editar
      console.log("Editar:", item);
    };

    const handleDeletar = (itemId) => {
      // Lógica para ação de deletar
      console.log("Deletar:", itemId);
    };

  return (
    <ScrollView>

    <VStack flex={1} p={5}>
      <Box>
        <Text style={styles.titulo}>Lista de usuários:</Text>
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RenderizarItem
              item={item}
              onEditar={handleEditar}
              onDeletar={handleDeletar}
            />
          )}
        />
      </Box>
    </VStack>
    </ScrollView>
  );
};

export default Home;
