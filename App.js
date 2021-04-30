import React from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
import Body from "./components/Body";
import Header from "./components/Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageAndroid: "Regras Fut Castilla II",
      messageIos: "Regras Castilla II",
    };
  }
  render() {
    let { state } = this;
    return (
      <View style={styles.container}>
        <Header
          titulo={
            Platform.OS == "android" ? state.messageAndroid : state.messageIos
          }
        />
        <ScrollView>
          <Body />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
