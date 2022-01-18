import { ActivityIndicator } from "react-native";
import React from "react";
interface Fetching {
  animating: boolean;
  color: string;
}
export const Fetching = ({ animating, color }: Fetching) => {
  return <ActivityIndicator size="large" animating={animating} color={color} />;
};
