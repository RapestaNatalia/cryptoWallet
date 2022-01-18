import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { theme } from "../../style/theme";

export interface PrimaryBtn {
  title: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}
export const PrimaryButton = ({
  title,
  onPress,
  accessibilityHint,
  accessibilityLabel,
}: PrimaryBtn) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.batteryChargedBlue,
        height: 42,
        borderRadius: 6,
        width: "100%",
        marginTop: 44,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      >
        <Text style={styles.textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    color: theme.colors.batteryChargedBlue,
  },
  textStyle: {
    color: theme.colors.white,
    fontSize: 16,
    textAlign: "center",
    padding: 9,
  },
});
