import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { Formulario } from "../../interface/interface";
import { ScrollView } from "native-base";
import api from "../../service/integracao";


const CadastroFuncionario = () => {
  const [dadosFuncionario, setDadosFuncionario] = useState<Formulario>({
    cpf: "",
    nome: "",
    sobrenome: "",
    nascimento: "",
    email: "",
    genero: "",
  });

 const cadastrarFuncionario = async () => {
   console.log("Dados a serem enviados:", dadosFuncionario);
   try {
     // Fazer a requisição POST para o backend
     const response = await api.post("/formulario/", dadosFuncionario);
     console.log("Funcionário cadastrado com sucesso:", response.data);
   } catch (error) {
     console.error("Erro ao cadastrar funcionário:", error.message);
     console.error("Detalhes do erro:", error);
   }
 };


  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={dadosFuncionario.cpf}
          onChangeText={(text) =>
            setDadosFuncionario({ ...dadosFuncionario, cpf: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={dadosFuncionario.nome}
          onChangeText={(text) =>
            setDadosFuncionario({ ...dadosFuncionario, nome: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={dadosFuncionario.sobrenome}
          onChangeText={(text) =>
            setDadosFuncionario({ ...dadosFuncionario, sobrenome: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          value={dadosFuncionario.nascimento}
          onChangeText={(text) =>
            setDadosFuncionario({ ...dadosFuncionario, nascimento: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={dadosFuncionario.email}
          onChangeText={(text) =>
            setDadosFuncionario({ ...dadosFuncionario, email: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Gênero"
          value={dadosFuncionario.genero}
          onChangeText={(text) =>
            setDadosFuncionario({ ...dadosFuncionario, genero: text })
          }
        />
        <Button title="Cadastrar" onPress={cadastrarFuncionario} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default CadastroFuncionario;
