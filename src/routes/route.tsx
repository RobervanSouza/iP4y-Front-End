import React from "react";

import Home from "../app/home/tela";
import CadastroFuncionario from "../app/cadastro/cadastrar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Telas = createNativeStackNavigator();

export default function Rotas (){
    return (
        <NavigationContainer>
           <Telas.Navigator>
            <Telas.Screen 
            name="todos"
            component={Home} 
            options={{
                headerShown: false,
            }}       
            />
            <Telas.Screen 
            name="cadastro"
            component={CadastroFuncionario}          
            />
           </Telas.Navigator>
        </NavigationContainer>
    )
}