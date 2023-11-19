import React from "react";
import Home from "./src/app/home/tela";
import { NativeBaseProvider, StatusBar } from "native-base";
import { TEMAS } from "./src/style/temas";

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS} >
      <StatusBar backgroundColor={TEMAS.colors.red[900]} />
      <Home />
    </NativeBaseProvider>
  );
}
