import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useNavigation } from "@react-navigation/core";
import { theme } from "../style/theme";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.illustration}
        source={require("../assets/home-illustration.png")}
      />
      <Text style={styles.title}>Howdy partner!</Text>
      <Text style={styles.description}>This is your assignment.</Text>
      <Text style={styles.description}>
        Follow the instructions on the Readme file.
      </Text>
      <Text style={styles.description}>
        Don’t worry, it’s easy! You should have the app looking smooth in no
        time.
      </Text>
      <PrimaryButton
        accessibilityHint="Press here to start your session into the app."
        accessibilityLabel="Getting started button."
        title="Get Started"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  illustration: {
    width: 206,
    height: 194,
  },
  description: {
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 24,
  },
});
