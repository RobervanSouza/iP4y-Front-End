import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
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

  const handleSave = () => {
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
          {/* Adicione inputs estilizados para os outros campos do formulário */}

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
