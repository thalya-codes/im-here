import { TextInputProps, TextInput } from "react-native";
import styles from "./styles";

export default function Input(props: TextInputProps) {
  return (
    <TextInput {...props} placeholderTextColor="#6B6B6B" style={styles.input} />
  );
}
