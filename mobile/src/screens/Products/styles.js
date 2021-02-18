import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "web" ? "100vh" : "100%",
    backgroundColor: "black",
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  image: {
    resizeMode: "contain",
  },
  button: {
    height: 50,
    margin: 15,
    alignItems: "center",
    borderRadius: 30,
    justifyContent: "center",
    backgroundColor: "lightslategray",
  },
  buttonComprar: {
    marginHorizontal: 80,
    backgroundColor: 'slategray'
  }
});

export default styles;
