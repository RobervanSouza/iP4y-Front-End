import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { TEMAS } from "./src/style/temas";
import Rotas from "./src/routes/route";
import Footer from "./src/app/footer/footer";

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS} >
      <StatusBar backgroundColor={TEMAS.colors.black[900]} />
    <Rotas/>
    <Footer/>
    </NativeBaseProvider>
  );
}
