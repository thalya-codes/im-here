import { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import styles from "./styles";

interface IForm {
  children: ReactNode;
}

export default function Form({ children }: IForm) {
  return <View style={styles.form as ViewStyle}>{children}</View>;
}
