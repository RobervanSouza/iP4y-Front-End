// styled.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalLabel: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botaoSalvar: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  botaoCancelar: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },

  invalidInput: {
    borderColor: "red", // Adapte conforme necessário
    borderWidth: 1,
  },

  invalidText: {
    color: "red", // Adapte conforme necessário
    marginTop: 5,
  },
  inputComErro: {
    backgroundColor: "red",
  }
});
