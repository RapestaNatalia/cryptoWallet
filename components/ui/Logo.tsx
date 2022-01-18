import * as React from "react";
import { Image } from "react-native";

export const Logo = () => {
  return (
    <Image
      style={{ width: 28.53, height: 26.07 }}
      source={require("../../assets/logo.png")}
    />
  );
};
