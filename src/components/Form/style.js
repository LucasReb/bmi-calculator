import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    width: "100 %",
    height: "100 %",
    bottom: 0,
    backgroundColor: "#ffff",
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 60,
    padding: 10,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90 %",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalc: {
    fontSize: 20,
    color: "#fff",
  },
  buttonCalc: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#3EB489",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
  },
});

export default styles