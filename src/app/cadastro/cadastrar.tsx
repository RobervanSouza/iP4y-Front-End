import React, { useState } from "react";
import { Button, Text } from "react-native";
import moment from "moment";
import cpfCheck from "cpf-check";
import { ScrollView } from "native-base";
import { styles } from "./styled";
import { useNavigation } from "@react-navigation/native";
import api from "../../service/integracao";
import { TextInput } from "react-native-paper";
import { validaEmail } from "../../utils/validandoEmail";
import { validaData } from "../../utils/validaData";

const CadastroFuncionario = () => {
  
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
  const [erroMensagem, setErroMensagem] = useState(null);

 

 

  const validateCPF = (cpf: string) => {
    const isValid = cpfCheck.validate(cpf);
    setIsValidCPF(isValid);
    return isValid;
  };

  const formataCPF = (cpf) => {
    const numericCPF = cpf.replace(/[^\d]/g, "");

    if (numericCPF.length <= 11) {
      return numericCPF.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        "$1.$2.$3-$4"
      );
    }

    return cpf;
  };

  const cadastrarFuncionario = async () => {
   

    if (
      !validaEmail(dadosFuncionario.email) ||
      !validaData(dadosFuncionario.nascimento) ||
      !dadosFuncionario.nome ||
      !dadosFuncionario.sobrenome ||
      !dadosFuncionario.nascimento ||
      !dadosFuncionario.genero ||
      !validateCPF(dadosFuncionario.cpf)
    ) {
      setIsValidEmail(validaEmail(dadosFuncionario.email));
      setIsValidDate(validaData(dadosFuncionario.nascimento));
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

    try {
      setErroMensagem(null);
      // Fazer a requisição POST para o backend
      const response = await api.post("/formulario", dadosFuncionario);

         setDadosFuncionario({
           cpf: "",
           nome: "",
           sobrenome: "",
           nascimento: "",
           email: "",
           genero: "",
         });
      // Aqui você pode lidar com a resposta, se necessário
      console.log("Funcionário cadastrado com sucesso:", response.data);
      alert("Funcionário cadastrado com sucesso");
      // Navegar para a tela Home após o cadastro
    } catch (error) {
      setErroMensagem(
        `CPF já está cadastrado ou inválido. Digite outro CPF válido!!!`
      );
      setTimeout(() => {
        setErroMensagem(null);
      }, 5000);
    }



  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={[styles.input, !isValidCPF && styles.invalidInput]}
        placeholder="CPF"
        value={formataCPF(dadosFuncionario.cpf)}
        onChangeText={(text) => {
          setDadosFuncionario((prev) => ({ ...prev, cpf: text }));
          setIsValidCPF(true);
          setIsRequiredFieldEmpty(false);
        }}
      />

      {!isValidCPF && (
        <Text style={styles.invalidText}>Digite um CPF válido.</Text>
      )}

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
        onChangeText={(text) => {
          setDadosFuncionario((prev) => ({ ...prev, nascimento: text }));
          setIsValidDate(true);
          setIsRequiredFieldEmpty(false);
        }}
      />
      {!isValidDate && (
        <Text style={styles.invalidText}>
          Digite uma data de nascimento válida.
        </Text>
      )}

      <TextInput
        style={[styles.input, !isValidEmail && styles.invalidInput]}
        placeholder="E-mail"
        value={dadosFuncionario.email}
        onChangeText={(text) => {
          setDadosFuncionario((prev) => ({ ...prev, email: text }));
          setIsValidEmail(true);
          setIsRequiredFieldEmpty(false);
        }}
      />
      {!isValidEmail && (
        <Text style={styles.invalidText}>
          E-mail invalido, digite um email valido!.
        </Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={dadosFuncionario.genero}
        onChangeText={(text) =>
          setDadosFuncionario((prev) => ({ ...prev, genero: text }))
        }
      />

      {erroMensagem && <Text style={styles.erroMensagem}>{erroMensagem}</Text>}

      {isRequiredFieldEmpty && <Text>Todos os campos são obrigatórios.</Text>}

      <Button title="Cadastrar" onPress={cadastrarFuncionario} />
    </ScrollView>
  );
};

export default CadastroFuncionario;
