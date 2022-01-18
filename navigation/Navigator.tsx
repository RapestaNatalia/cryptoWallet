import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ToDoScreen from "../screens/ToDoScreen";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";
import WalletScreen from "../screens/WalletScreen";
import {Logo} from "../components/ui/Logo";

import { HeaderLeft } from "../components/ui/HeaderLeft";
import { Item } from "../interfaces/interfaces";

/**
 * Use `HomeScreen` as the initial route
 * Replace the screen title with the `Logo` component
 *
 * 💯  Usage of TypeScript is a plus
 */

// import Logo from './components/ui/Logo';

export type RootStackParams = {
  ToDo: undefined;
  Home: undefined;
  List: undefined;
  Detail: { item: Item };
  Wallet: undefined;
};
export const Navigator = () => {
  const Stack = createStackNavigator<RootStackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTitleAlign: "center",
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{
          title: "To Do",
          headerLeft: ()=> null
        }}
        name="ToDo"
        component={ToDoScreen}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => <Logo />,
          headerLeft: () => (
           <HeaderLeft name="To Do" onPress={()=>navigation.navigate("ToDo")}/>
          ),
        })}
      />

      <Stack.Screen name="List" component={ListScreen} 
      options={({navigation}) => ({
        headerLeft: () => (
         <HeaderLeft name="Home" onPress={()=>navigation.goBack()}/>
        ),
      })}
      />
      <Stack.Screen name="Detail" component={DetailScreen}
      options={({navigation}) => ({
        headerLeft: () => (
         <HeaderLeft name="List" onPress={()=>navigation.goBack()}/>
        ),
      })}
      />
      <Stack.Screen name="Wallet" component={WalletScreen} 
      options={({navigation}) => ({
        headerLeft: () => (
         <HeaderLeft name="Detail" onPress={()=>navigation.goBack()}/>
        ),
      })}
      />
    </Stack.Navigator>
  );
};
