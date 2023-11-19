import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styled";

const RenderizarItem = ({ item }) => (
  <View style={styles.card}>
    <Text>{`Nome: ${item.nome}`}</Text>
    <Text>{`Sobrenome: ${item.sobrenome}`}</Text>
    <Text>{`Nascimento: ${item.nascimento}`}</Text>
    <Text>{`Email: ${item.email}`}</Text>
    <Text>{`Gênero: ${item.genero}`}</Text>
    <Text>{`CPF: ${item.cpf}`}</Text>
  </View>
);


export default RenderizarItem;
