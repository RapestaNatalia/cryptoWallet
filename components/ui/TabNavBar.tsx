import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { theme } from "../../style/theme";

export interface props {
  name: string;
  isFocus: boolean;
}
export const TabNavBar = ({ name, isFocus }: props) => {
  return (
    <View style={[styles.container, { borderTopWidth: isFocus ? 3 : 0 }]}>
      <Text style={[styles.labelStyle,isFocus?styles.activeColor:styles.inactiveColor]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: theme.colors.batteryChargedBlue,
    paddingTop: 10  },
  labelStyle: {
    fontSize: 16,
    fontStyle:'normal',
    fontWeight:'bold',
  },
  activeColor:{
    color:theme.colors.bondiBlue,
  },
  inactiveColor:{
    color:theme.colors.zinnwalditeBrown,
  }
});
