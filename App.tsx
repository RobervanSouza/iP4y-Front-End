import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { TEMAS } from "./src/style/temas";
import Rotas from "./src/routes/route";

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS} >
      <StatusBar backgroundColor={TEMAS.colors.red[900]} />
    <Rotas/>
    </NativeBaseProvider>
  );
}
