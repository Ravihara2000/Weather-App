import { View, Text, ImageBackground, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { deviceHeight, deviceWidth } from "./Dimensions";
import { API_KEY } from "./Constants";

export default function Details(props) {
  const { data, setData } = useState();
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  const Data = ({ title, value }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "gray", fontSize: 22 }}>{title}</Text>
      <Text style={{ color: "white", fontSize: 22 }}>{value}</Text>
    </View>
  );
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
      {data ? (
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
            <Text style={{ fontSize: 22, color: "white", textAlign: "center" }}>
              {data["weather"][0]["main"]}
            </Text>
          </View>
          <Text style={{ color: "white", fontSize: 64 }}>
            {(data["main"]["temp"] - 273).toFixed(2)}&deg; C
          </Text>
          <View>
            <Text style={{ color: "white", fontSize: 22, marginBottom: 16 }}>
              Weather Details
            </Text>
            <View style={{ width: deviceWidth - 60 }}>
              <Data value={data["wind"]["speed"]} title="Wind" />
              <Data value={data["main"]["pressure"]} title="Pressure" />
              <Data value={`${data["main"]["humidity"]}%`} title="Humidity" />
              <Data value={data["visibility"]} title="Visibility" />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}
