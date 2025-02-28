import { useState } from "react";
import { Alert, FlatList, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Form from "@/components/Form";
import Participant from "@/components/Participant";
import ErrorMessage from "@/components/ErrorMessage";
import FieldContainer from "@/components/FieldContainer";
import Empty from "@/components/Empty";

interface IParticipant {
  id: number;
  name: string;
}

export default function HomeScreen() {
  const [participantFieldName, setParticipantNameField] = useState<string>("");
  const [partipants, setParticipants] = useState<IParticipant[]>([
    { id: 1, name: "Thalya" },
    { id: 2, name: "Mario" },
  ]);
  const [participantNameErrorMsg, setParticipantNameErrorMsg] = useState<
    string | null
  >(null);

  const createNewParticipant = (name: string) => {
    const id = partipants.length + 1;
    return { id, name };
  };

  const removeParticipant = (id: number) => {
    const filteredParticipants = partipants.filter(
      (participant) => participant.id !== id
    );

    setParticipants(filteredParticipants);
  };

  const handleParticipantNameError = () => {
    const fieldIsEmpty = participantFieldName === "" || !participantFieldName;

    if (fieldIsEmpty) {
      setParticipantNameErrorMsg(
        "Para adicionar um novo participante, por favor insira um nome."
      );
      return true;
    } else {
      setParticipantNameErrorMsg(null);
      return false;
    }
  };

  const handleAddParticipant = (name: string) => {
    const hasError = handleParticipantNameError();
    if (hasError) return;

    const newParticipant = createNewParticipant(name);
    setParticipants([...partipants, newParticipant]);
    setParticipantNameField("");
  };

  const handleRemoveParticipant = ({ id, name }: IParticipant) => {
    Alert.alert(
      "Remover participante",
      `Tem certeza que deseja remover o/a participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => removeParticipant(id),
        },
        {
          text: "Cancelar",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 27 de fevereiro de 2025</Text>

      <Form>
        <FieldContainer>
          <Input
            keyboardType="default"
            value={participantFieldName}
            placeholder="Nome do participante"
            onChangeText={(name) => setParticipantNameField(name)}
          />
          <Button
            onPress={() => handleAddParticipant(participantFieldName)}
            backgroundColor="#31CF67"
          >
            +
          </Button>
        </FieldContainer>

        {participantNameErrorMsg && (
          <ErrorMessage message={participantNameErrorMsg} />
        )}
      </Form>

      <FlatList
        data={partipants}
        keyExtractor={(item) => `${item.id}--${item.name}`}
        renderItem={({ item }) => (
          <Participant
            key={`${item.id}--${item.name}`}
            name={item.name}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Empty message="Nenhum participante cadastrado" />
        )}
      />

      {partipants && <ScrollView></ScrollView>}
    </View>
  );
}
