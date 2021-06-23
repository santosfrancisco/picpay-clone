import React from "react";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from "react-native";

import { Container, Label } from "./styles";

interface PayButtonProps extends TouchableWithoutFeedbackProps {
  focused: boolean;
}

const PayButton = ({ onPress, focused }: PayButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container
        colors={focused ? ["#fff", "#ccc"] : ["#00fc6c", "#00ac4a"]}
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? "#000" : "#fff"}
        />
        <Label focused={focused}>Pagar</Label>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;
