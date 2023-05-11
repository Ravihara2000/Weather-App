import { View, Text, ImageBackground, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { deviceHeight, deviceWidth } from "./Dimensions";
import { API_KEY } from "./Constants";

export default function Details(props) {
  const { date, setDate } = useState();
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setDate(res))
      .catch((err) => console.log(err));
  }, []);

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
      </View>
      {date ? (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: deviceHeight - 100,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 40 }}>{name}</Text>
            <Text style={{ fontSize: 22, color: "white" }}>
              {date["weather"][0]["main"]}
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}
