import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";

interface IButton {
  children: ReactNode;
  backgroundColor: ColorValue | undefined;
  onPress: (event: GestureResponderEvent) => void;
}

export default function Button({
  onPress,
  children,
  backgroundColor,
}: IButton) {
  const buttonStyle = {
    ...styles.button,
    backgroundColor,
  };

  return (
    <TouchableOpacity
      style={buttonStyle as TouchableOpacityProps}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
