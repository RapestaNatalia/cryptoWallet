import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import ChevronLeft from "../icons/ChevronLeft";
import { theme } from "../../style/theme";

export interface Header {
  onPress: () => void;
  name: string;
}
export const HeaderLeft = ({ onPress, name }: Header) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ChevronLeft />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    color: theme.colors.bondiBlue,
    fontSize: 14,
    marginLeft: 7,
  },
});
