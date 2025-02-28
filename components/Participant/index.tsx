import { Text, View, ViewStyle } from "react-native";
import Button from "@/components/Button";
import styles from "./styles";

interface IParticipant {
  name: string;
  onRemove: () => void
}

export default function Participant({ name, onRemove }: IParticipant) {

  return (
    <View style={styles.container as ViewStyle}>
      <Text style={styles.name}>{name}</Text>
      <Button onPress={onRemove} backgroundColor="#E23C44">
        -
      </Button>
    </View>
  );
}
