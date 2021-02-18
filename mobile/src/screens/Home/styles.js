import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "lightslategray",
  },
  top: {
    backgroundColor: "lightslategray",
    height: 250,
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoview: {
    height: 80,
    margin: 15,
  },
  logo: {
    flex: 1,
    resizeMode: "contain",
  },
  inputs: {
    marginHorizontal: 30,
    marginTop: 10,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    margin: 5,
    padding: 15,
    textAlign: "center",
    borderRadius: 30,
    backgroundColor: "#fff",
    fontSize: 20,
  },
  button: {
    height: 50,
    width: "100%",
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "black",
  },
  buttonLogoff: {
    borderColor: "black",
    backgroundColor: "transparent",
    borderWidth: 2,
    marginTop: 15,
  },
});

export default styles;
