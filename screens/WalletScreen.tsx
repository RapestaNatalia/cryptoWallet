import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { AuthContext } from "../components/auth/Context";
import { TabNavBar } from "../components/ui/TabNavBar";
import { partnerList } from "../interfaces/interfaces";
import { theme } from "../style/theme";

/**
 * ToDo: Create a Bottom Tab Navigation for: Account and Partners sections
 * ToDo: In the Account tab, print the name submited in the Sign-In form
 * ToDo: In the Partners tab, manually list some apps you create
 *
 * 💯 Published apps where you been involved is great plus
 */
export type TabNavigatorParamsList = {
  Account: undefined;
  Partners: undefined;
};
export default function WalletScreen() {
  const Tab = createBottomTabNavigator<TabNavigatorParamsList>();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        activeTintColor: theme.colors.bondiBlue,
        inactiveTintColor: theme.colors.zinnwalditeBrown,
        showLabel: false,
        tabBarIcon: ({ focused }) => {
          return <TabNavBar name={route.name} isFocus={focused} />;
        },
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "",
        }}
        name="Account"
        component={AccountSection}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
        }}
        name="Partners"
        component={PartnersSection}
      />
    </Tab.Navigator>
  );
}

export const AccountSection = () => {
  const { userName } = React.useContext(AuthContext);
  return (
    <View style={[styles.container, styles.containerAccount]}>
      <Image
        style={styles.illustration}
        source={require("../assets/finish-illustration.png")}
      />
      <Text style={styles.title}>Hello, {userName}</Text>
      <Text style={styles.description}>
        Glad you are here. Hope to see you soon.
      </Text>
    </View>
  );
};

export const PartnersSection = () => {
  const partnerList = [
    {
      name: "Personal Pay",
      url: "https://www.personalpay.com.ar/",
      comments:
        "This is a virtual wallet of Personal for paying,send, save and manage your money. In this case I have participated as front end and back end engineer.",
    },
    {
      name: "Omint Assistance",
      url: "https://www.omintassistance.com.ar/",
      comments:
        "The main purpose of this app is give the user a wide variety of services and assistance in connection with travel's needs. In this case I have developed all the mobile app.",
    },
  ];

  const ListItem = ({ name, comments, url }: partnerList) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemComment}>{comments}</Text>
        <View style={styles.url}>
          <Text style={styles.itemTitleUrl}>URL: </Text>
          <Text style={styles.itemUrl}>{url}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[styles.container, styles.containerPartners]}
      accessibilityLabel="Partners"
      accessibilityHint="These are some app where I was involved in."
    >
      <Text style={styles.title}>Partners</Text>
      <Text>Here are some apps I was involved in:</Text>
      {partnerList && partnerList.length > 0 ? (
        <ScrollView>
          {partnerList.map((item) => (
            <ListItem key={item.name} {...item} />
          ))}
        </ScrollView>
      ) : (
        <Text>No Apps 🙈</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 30,
  },
  containerAccount: {
    backgroundColor: theme.colors.white,
  },
  containerPartners: {
    backgroundColor: theme.colors.platinium,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: theme.colors.maastrichtBlue,
  },
  illustration: {
    width: 354,
    height: 139,
  },
  itemContainer: {
    display: "flex",
    backgroundColor: theme.colors.white,
    marginVertical: 6,
    borderRadius: 8,
    padding: 20,
  },
  description: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginTop: 12,
  },
  itemName: {
    color: theme.colors.bondiBlue,
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 16,
  },
  itemComment: {
    color: theme.colors.maastrichtBlue,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    textAlign: "left",
  },
  itemUrl: {
    color: theme.colors.auroMetalSaurus,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  itemTitleUrl: {
    color: theme.colors.maastrichtBlue,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
  },
  url: {
    flexDirection: "row",
    marginTop: 24,
  },
});
