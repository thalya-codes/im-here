import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontWeight: "700",
    fontSize: 24,
    marginTop: 32,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  form: {
    width: '100%',
    gap: 16,
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    flex: 1,
    height:56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16
  },
  button: {
    width: 64,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  }
});

export default styles