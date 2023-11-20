import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  invalidInput: {
    borderColor: "red",
  },
  botaoCadastrar: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
  },
  erroMensagem: {
    backgroundColor: "red",
  },
  erroInput: {
    alignSelf: "center",
    color: "red",
    marginBottom: 8,
  },
  invalidText: {
    color: "red", 
    marginTop: 1,
  },
});
