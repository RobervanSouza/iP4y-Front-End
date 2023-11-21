import { View } from "native-base";
import React from "react";
import { Text, Linking } from "react-native";
import { styles } from "./styles";

const Footer = () => {
  const url = "https://www.linkedin.com/in/robervan-souza/";

  return (
    <View style={styles.footer}>
      <Text>
        <Text style={styles.footerText} >Desenvolvedor:</Text>
        <Text onPress={() => Linking.openURL(url)} style={styles.footerLink}>
         
          @ Robervan Souza
        </Text>
      </Text>
    </View>
  );
};

export default Footer;
