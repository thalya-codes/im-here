import { View } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";

interface IFieldContainer {
  children: ReactNode;
}

export default function FieldContainer({ children }: IFieldContainer) {
  return <View style={styles.container}>{children}</View>;
}
