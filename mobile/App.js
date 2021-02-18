import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
// import Login from "./src/screens/Login";
// import Home from "./src/screens/Home";
// import Products from "./src/screens/Products";
import Routes from "./src/routes";

function App() {
  return (
    <View>
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Products /> */}
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}
export default App;
