import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import RenderizarItem from "./src/components/card/card";

export default function App() {
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

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de usuários:</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={RenderizarItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, // Adicione margem superior para afastar do topo
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10, // Adicione margem inferior ao título
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    
  },
});
