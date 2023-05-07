import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { deviceHeight, deviceWidth } from "./Dimensions";
import Cards from "./Cards";
const color = {
  white: "#FFFFFF",
};
export default function Home(props) {
  const [city, setCity] = useState("");

  const cities = [
    {
      name: "New Delhi",
      image: require("./assets/image3.jpg"),
    },
    {
      name: "New York",
      image: require("./assets/image4.jpg"),
    },
    {
      name: "London",
      image: require("./assets/image5.jpg"),
    },
    {
      name: "San Francisco",
      image: require("./assets/image6.jpg"),
    },
    {
      name: "New Jersy",
      image: require("./assets/image7.jpg"),
    },
  ];
  return (
    <View style={styles.bgimg}>
      <ImageBackground
        source={require("./assets/image2.jpg")}
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
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("Details", { name: city })
              }
            >
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}
          >
            My Location
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards name={item.name} image={item.image} />
            )}
          />
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
