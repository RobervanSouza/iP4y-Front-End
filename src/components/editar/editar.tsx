import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import moment from "moment";
import { styles } from "./styled";

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateDate = (date: string) => {
    // Utilize moment para validar a data
    return moment(date, "YYYY-MM-DD", true).isValid();
  };

  const handleSave = () => {
    if (
      !validateEmail(editedValues.email) ||
      !validateDate(editedValues.nascimento) ||
      !editedValues.nome ||
      !editedValues.sobrenome ||
      !editedValues.nascimento ||
      !editedValues.genero
      // Adicione validações para outros campos conforme necessário
    ) {
      setIsValidEmail(validateEmail(editedValues.email));
      setIsValidDate(validateDate(editedValues.nascimento));
      setIsRequiredFieldEmpty(true);
      return;
    }

    setIsValidEmail(true);
    setIsValidDate(true);
    setIsRequiredFieldEmpty(false);
    onEditar(editedValues);
    onCancel();
  };

  return (
    <Modal transparent={true} animationType="slide" visible={isVisible}>
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
            style={[styles.modalInput, !isValidEmail && styles.invalidInput]}
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
    </Modal>
  );
};

export default EditarModal;
