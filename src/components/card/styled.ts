import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    width: "100%",
    borderColor: "black",
    borderRadius: 8,
    padding: 6,
    marginBottom: 7,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 1,
    gap: 22,
    width: "100%",
  },
  botaoEditar: {
    color: "white",
    fontSize: 16,
  },
  botaoDeletar: {
    color: "white",
    fontSize: 16,
  },
  texto: {
    fontSize: 18,
    fontWeight: "500",
    color: "green",
  },
  itemTexto: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
  },
});
