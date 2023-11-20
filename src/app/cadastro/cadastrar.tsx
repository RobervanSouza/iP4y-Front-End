import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import moment from "moment";
import cpfCheck from "cpf-check";
import { ScrollView } from "native-base";
import { styles } from "./styled";
import { useNavigation } from "@react-navigation/native";
import api from "../../service/integracao";


const CadastroFuncionario = () => {

const navigation = useNavigation();

  const [dadosFuncionario, setDadosFuncionario] = useState({
    cpf: "",
    nome: "",
    sobrenome: "",
    nascimento: "",
    email: "",
    genero: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);
  const [isRequiredFieldEmpty, setIsRequiredFieldEmpty] = useState(false);
  const [isValidCPF, setIsValidCPF] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDate = (date) => {
    return moment(date, "YYYY-MM-DD", true).isValid();
  };

  const validateCPF = (cpf) => {
    const numericCPF = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos
    setIsValidCPF(cpfCheck.validate(numericCPF));
    return isValidCPF;
  };

  const formatCPF = (cpf) => {
    const numericCPF = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos

    if (numericCPF.length <= 11) {
      return numericCPF.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        "$1.$2.$3-$4"
      );
    }

    return cpf;
  };

  const cadastrarFuncionario =  async () => {
      const cpfForValidation = dadosFuncionario.cpf.replace(/[.-]/g, "");

    if (
      !validateEmail(dadosFuncionario.email) ||
      !validateDate(dadosFuncionario.nascimento) ||
      !dadosFuncionario.nome ||
      !dadosFuncionario.sobrenome ||
      !dadosFuncionario.nascimento ||
      !dadosFuncionario.genero ||
      !validateCPF(dadosFuncionario.cpf)
    ) {
      setIsValidEmail(validateEmail(dadosFuncionario.email));
      setIsValidDate(validateDate(dadosFuncionario.nascimento));
      setIsValidCPF(validateCPF(dadosFuncionario.cpf));
      setIsRequiredFieldEmpty(true);
      return;
    }

    setIsValidEmail(true);
    setIsValidDate(true);
    setIsValidCPF(true);
    setIsRequiredFieldEmpty(false);

    // Lógica para cadastro
    console.log("Dados do cadastro:", dadosFuncionario);

    // Simulando um cadastro bem-sucedido
     try {
       // Fazer a requisição POST para o backend
       const response = await api.post("/formulario", dadosFuncionario);

       // Aqui você pode lidar com a resposta, se necessário
       console.log("Funcionário cadastrado com sucesso:", response.data);
alert("Funcionário cadastrado com sucesso")
       // Navegar para a tela Home após o cadastro
       
     } catch (error) {
       console.error("Erro ao cadastrar funcionário:", error.message);
     }
}
  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={[styles.input, !isValidCPF && styles.invalidInput]}
        placeholder="CPF"
        value={formatCPF(dadosFuncionario.cpf)}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, cpf: text }))
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={dadosFuncionario.nome}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, nome: text }))
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={dadosFuncionario.sobrenome}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, sobrenome: text }))
        }
      />
      <TextInput
        style={[styles.input, !isValidDate && styles.invalidInput]}
        placeholder="Data de Nascimento (AAAA-MM-DD)"
        value={dadosFuncionario.nascimento}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, nascimento: text }))
        }
      />
      <TextInput
        style={[styles.input, !isValidEmail && styles.invalidInput]}
        placeholder="E-mail"
        value={dadosFuncionario.email}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, email: text }))
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={dadosFuncionario.genero}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, genero: text }))
        }
      />
      <TextInput
        style={[styles.input, !isValidCPF && styles.invalidInput]}
        placeholder="CPF"
        value={formatCPF(dadosFuncionario.cpf)}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, cpf: text }))
        }
      />
      {/* Restante dos TextInput e outros elementos */}
      <Button title="Cadastrar" onPress={cadastrarFuncionario} />
      {/* Restante do código */}
    </ScrollView>
  );
};



export default CadastroFuncionario;
