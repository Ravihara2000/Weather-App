import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { deviceHeight, deviceWidth } from "./Dimensions";

export default function Home() {
  return (
    <View style={styles.bgimg}>
      <ImageBackground
        source={require("./assets/bgpic1.jpg")}
        style={{ width: deviceWidth, height: deviceHeight }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bgimg: {},
});
