// Seu modal de edição
import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, TextInput, Platform } from "react-native";

import cpfCheck from "cpf-check";

import { styles } from "./styled";
import { KeyboardAvoidingView, ScrollView } from "native-base";
import { validaEmail } from "../../utils/validandoEmail";
import { validaData } from "../../utils/validaData";

type EditarModalProps = {
  isVisible: boolean;
  onEditar: (editedItem: any) => void;
  onCancel: () => void;
  editedItem: any;
};

const EditarModal: React.FC<EditarModalProps> = ({
  isVisible,
  onEditar,
  onCancel,
  editedItem,
}) => {
  const [editedValues, setEditedValues] = useState({ ...editedItem });
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidDate, setIsValidDate] = useState(true);
  const [isRequiredFieldEmpty, setIsRequiredFieldEmpty] = useState(false);
  const [isValidCPF, setIsValidCPF] = useState(true);
  

 const validateCPF = (cpf: string) => {
   const isValid = cpfCheck.validate(cpf);
   setIsValidCPF(isValid);
   return isValid;
 };

 const formatCPF = (cpf: string) => {
   const numericCPF = cpf.replace(/\D/g, "");
   const formattedCPF = numericCPF.replace(
     /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
     "$1.$2.$3-$4"
   );

   return formattedCPF;
 };

  const handleSave = () => {
    const cpfForValidation = editedValues.cpf.replace(/[.-]/g, "");
    
    if (
      !validaEmail(editedValues.email) ||
      !validaData(editedValues.nascimento) ||
      !editedValues.nome ||
      !editedValues.sobrenome ||
      !editedValues.nascimento ||
      !editedValues.genero ||
      !validateCPF(editedValues.cpf)
      
    ) {
      setIsValidEmail(validaEmail(editedValues.email));
      setIsValidDate(validaData(editedValues.nascimento));
      setIsValidCPF(validateCPF(editedValues.cpf));
      setIsRequiredFieldEmpty(true);


      return;
    }


    setIsValidEmail(true);
    setIsValidDate(true);
    setIsValidCPF(true);
    setIsRequiredFieldEmpty(false);
    onEditar({ ...editedValues, cpf: cpfForValidation });
    onCancel();
  };

  return (
      <Modal transparent={true}  visible={isVisible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalLabel}>Nome:</Text>
              <TextInput
                style={styles.modalInput}
                value={editedValues.nome}
                onChangeText={(text) =>
                  setEditedValues((prev) => ({ ...prev, nome: text }))
                }
              />

              <Text style={styles.modalLabel}>Sobrenome:</Text>
              <TextInput
                style={styles.modalInput}
                value={editedValues.sobrenome}
                onChangeText={(text) =>
                  setEditedValues((prev) => ({ ...prev, sobrenome: text }))
                }
              />

              <Text style={styles.modalLabel}>Data de Nascimento:</Text>
              <TextInput
                style={[styles.modalInput, !isValidDate && styles.invalidInput]}
                value={editedValues.nascimento}
                onChangeText={(text) => {
                  setEditedValues((prev) => ({ ...prev, nascimento: text }));
                  setIsValidDate(true);
                  setIsRequiredFieldEmpty(false);
                }}
              />
              {!isValidDate && (
                <Text style={styles.invalidText}>
                  Digite uma data de nascimento válida.
                </Text>
              )}

              <Text style={styles.modalLabel}>Email:</Text>
              <TextInput
                style={[
                  styles.modalInput,
                  !isValidEmail && styles.invalidInput,
                ]}
                value={editedValues.email}
                onChangeText={(text) => {
                  setEditedValues((prev) => ({ ...prev, email: text }));
                  setIsValidEmail(true);
                  setIsRequiredFieldEmpty(false);
                }}
              />
              {!isValidEmail && (
                <Text style={styles.invalidText}>Digite um e-mail válido.</Text>
              )}

              <Text style={styles.modalLabel}>Gênero:</Text>
              <TextInput
                style={styles.modalInput}
                value={editedValues.genero}
                onChangeText={(text) =>
                  setEditedValues((prev) => ({ ...prev, genero: text }))
                }
              />

              <Text style={styles.modalLabel}>CPF:</Text>
              <TextInput
                style={[styles.modalInput, !isValidCPF && styles.invalidInput]}
                value={formatCPF(editedValues.cpf)}
                onChangeText={(text) => {
                  setEditedValues((prev) => ({ ...prev, cpf: text }));
                  setIsValidCPF(true);
                  setIsRequiredFieldEmpty(false);
                }}
              />

              {!isValidCPF && (
                <Text style={styles.invalidText}>Digite um CPF válido.</Text>
              )}

              {isRequiredFieldEmpty && (
                <Text style={styles.invalidText}>
                  Todos os campos são obrigatórios.
                </Text>
              )}

              <TouchableOpacity onPress={handleSave} style={styles.botaoSalvar}>
                <Text style={styles.botaoTexto}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onCancel} style={styles.botaoCancelar}>
                <Text style={styles.botaoTexto}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
  
  );
};

export default EditarModal;
