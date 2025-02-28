import { Text, View } from "react-native";
import styles from "./styles";

interface IEmpty {
  message: string;
}

export default function Empty({ message }: IEmpty) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>

      <Text style={styles.emoji}>😿</Text>
    </View>
  );
}
