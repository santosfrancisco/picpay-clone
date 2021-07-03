import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/Navigation";
import { StatusBar } from "react-native";

export default function Main() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}
