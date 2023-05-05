import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { deviceHeight, deviceWidth } from "./Dimensions";

export default function Home() {
  return (
    <View style={styles.bgimg}>
      <ImageBackground
        source={require("./assets/bgpic1.jpg")}
        style={{ width: deviceWidth, height: deviceHeight }}
      />
      <View style={{ position: "absolute" }}>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: deviceHeight - 20,
          }}
        >
          <Icon name="menu" size={46} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgimg: {
    flex: 1,
  },
});
