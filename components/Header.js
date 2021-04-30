import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styleExterno from "../styles";

const Header = ({ titulo }) => {
  return (
    <View style={styles.conteiner}>
      <Text style={styleExterno.fontStyle}>{titulo ? titulo : "Header"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "rgb(84,50,168)",
    padding: 20,
    width: "100%",
  },
});

export default Header;
