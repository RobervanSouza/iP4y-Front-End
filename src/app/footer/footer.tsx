import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Desenvolvedor:</Text>
      <Text style={styles.footerText}> @ Robervan Souza</Text>
    </View>
  );
};



export default Footer;
