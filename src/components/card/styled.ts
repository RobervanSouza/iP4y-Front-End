import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 12,
  },
  botaoEditar: {
    color: "green",
    fontSize: 16,
  },
  botaoDeletar: {
    color: "red",
    fontSize: 16,
  },
});
