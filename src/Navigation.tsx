import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import WalletScreen from "./screens/Wallet";
import PayScreen from "./screens/Pay";
import PayButton from "./components/PayButton";

type RootParamList = {
  Home: undefined;
  Wallet: undefined;
  Pay: undefined;
  Notifications: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay") {
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = icons[route.name];
          // @ts-ignore
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: "#131418",
        inactiveBackgroundColor: "#131418",
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Início",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          title: "Carteira",
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          title: "",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{
          title: "Notificações",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{
          title: "Ajustes",
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
