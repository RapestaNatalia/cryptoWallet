import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../components/auth/Context";
import { Users } from "../models/Users";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { getSensitiveData, setSensitiveData } from "../config/utils";
import { theme } from "../style/theme";

/* 
  Implement form using any user/pass combination 
  Store data using React context
  💯 Handling Sensitive Info and Secure Storage is a great plus
*/
export default function HomeScreen() {
  const { setUser } = useContext(AuthContext);
  const navigation = useNavigation();
  const [data, setData] = useState({
    username: "",
    password: "",
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const [preLogTest, setPreLogTest] = useState(false);

  useEffect(() => {
    checkUserStatus();
  }, []);

  useEffect(() => {
    if (preLogTest && data.username != "" && data.password != "") {
      login(data.username, data.password);
    }
  }, [data.password, data.username]);

  const checkUserStatus = async () => {
    const username = await getSensitiveData("username");
    const password = await getSensitiveData("password");
    if (username && password) {
      setPreLogTest(true);
      setData({
        ...data,
        username,
        password,
      });
    }
  };

  const login = async (userName: string, password: string) => {
    const foundUser = Users.filter((item) => {
      return userName == item.username && password == item.password;
    });

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
    setUser(userName);
    setSensitiveData("username", userName);
    setSensitiveData("password", password);
    setPreLogTest(false);
    navigation.navigate("List");
  };
  const textInputChange = (val: string): void => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        isValidUser: false,
      });
    }
  };
  const handleValidUser = (val: string): void => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handlePasswordChange = (val: string): void => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  return (
    <View
      style={styles.container}
      accessibilityLabel="Log In Screen"
      accessibilityHint="Should enter username and password here "
    >
      <Text style={styles.title}>Welcome</Text>

      <TextInput
        accessibilityLabel="Username."
        accessibilityHint="Enter the username."
        style={[styles.textInput, styles.marginInput]}
        placeholder="Enter your name"
        onChangeText={(val) => textInputChange(val)}
        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
      />
      {data.isValidUser ? null : (
        <Text style={styles.errorMsg}>Name must be 4 characters long.</Text>
      )}
      <TextInput
        accessibilityLabel="Password."
        accessibilityHint="Enter the Password."
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Enter your passowrd"
        onChangeText={(val) => handlePasswordChange(val)}
      />
      {data.isValidPassword ? null : (
        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
      )}
      <PrimaryButton
        accessibilityLabel="Log in."
        accessibilityHint="Press the button to start session."
        title="Sign in"
        onPress={() => login(data.username, data.password)}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 44,
  },
  errorMsg: {
    color: theme.colors.red,
    fontSize: 14,
  },
  textInput: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    height: 42,
    width: 353,
    borderColor: theme.colors.lightSilver,
    borderWidth: 1,
  },
  marginInput: {
    marginBottom: 16,
  },
});
