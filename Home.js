import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { deviceHeight, deviceWidth } from "./Dimensions";
const color = {
  white: "#FFFFFF",
};
export default function Home() {
  const [city, setCity] = useState("");

  return (
    <View style={styles.bgimg}>
      <ImageBackground
        source={require("./assets/bgpic1.jpg")}
        style={{ width: deviceWidth, height: deviceHeight }}
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

        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: "white" }}>Hellow Ravihara</Text>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Serach the city by the name
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "white",
              width: 335,
              marginTop: 10,
            }}
          >
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Serach the city"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: "white", fontSize: 16 }}
            />
            <TouchableOpacity onPress={() => {}}>
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
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
