import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./src/Navigation";

export default function Main() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
