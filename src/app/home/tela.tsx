import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import RenderizarItem from "../../components/card/card";
import { styles } from "./styled";
import { Box, VStack } from "native-base";
import api from "../../service/integracao";

const Home = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function pegarDados() {
      try {
        const response = await api.get("/formulario"
        );
        setDados(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      }
    }

    pegarDados();
  }, []);

     const handleEditar = async (editedItem) => {
       try {
         // Fazer a requisição PUT para o backend com os dados atualizados
         await api.put(`/formulario/${editedItem.id}`, editedItem);

         // Atualizar a lista com os dados atualizados
         setDados((prevDados) =>
           prevDados.map((item) =>
             item.id === editedItem.id ? editedItem : item
           )
         );
       } catch (error) {
         console.error("Erro ao editar item:", error.message);
       }
     };


    const handleDeletar = async (itemId) => {
      try {
        // Fazer a requisição DELETE para o backend
        await api.delete(`/formulario/${itemId}`);

        // Atualizar a lista removendo o item excluído
        setDados((prevDados) => prevDados.filter((item) => item.id !== itemId));
      } catch (error) {
        console.error("Erro ao deletar item:", error.message);
      }
    };

  return (
    <ScrollView>
      <VStack flex={1} p={5}>
        <Box>
          <Text style={styles.titulo}>Lista de usuários:</Text>

          {dados.map((item) => (
            <RenderizarItem
              key={item.id}
              item={item}
              onEditar={handleEditar}
              onDeletar={handleDeletar}
            />
          ))}
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default Home;
