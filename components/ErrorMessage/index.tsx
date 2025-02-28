import { Text, View } from "react-native";
import styles from "./styles";

interface IErrorMessage {
  message: string;
}

export default function ErrorMessage({ message }: IErrorMessage) {
  return (
    <View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}
