import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { deviceHeight, deviceWidth } from "./Dimensions";

export default function Details(props) {
  const { name } = props.route.params;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("./assets/image2.jpg")}
        style={{ width: deviceWidth, height: deviceHeight }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />
      <View
        style={{
          position: "absolute",
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: deviceHeight - 20,
          }}
        >
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require("./assets/user.jpg")}
            style={{ marginTop: 26, height: 46, width: 46, borderRadius: 50 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 40, color: "white", marginTop: 100 }}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
}
