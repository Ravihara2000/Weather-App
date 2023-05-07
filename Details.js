import { View, Text } from "react-native";
import React from "react";

export default function Details(props) {
  const name = props.route.params;
  return (
    <View>
      <Text style={{ fontSize: 22 }}>{name}</Text>
    </View>
  );
}
