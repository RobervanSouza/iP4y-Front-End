import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../app/home/tela";
import React from "react";
import { Ionicons } from 'react-native-vector-icons/Ionicons';



const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#0B3B60",
  },
  tabBarActiveTintColor: "#1e92ea",
  tabBarInactiveTintColor: "#FFF",
};

const navegacao = [
  {
    id: 1,
    name: "Home",
    components: Home,
    icone: "home",
  },
  {
    id: 2,
    name: "cadastrar",
    components: Home,
    icone: "home",
  }

]

const Tela = createBottomTabNavigator()

export default function TelasNavegacao (){
    return (
      <Tela.Navigator screenOptions={screenOptions}>
        {navegacao.map((telas) => (
          <Tela.Screen
            key={telas.id}
            name={telas.name}
            component={telas.components}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={telas.icone} color={color} size={size} />
              ),
            }}
          />
        ))}
      </Tela.Navigator>
    );
}