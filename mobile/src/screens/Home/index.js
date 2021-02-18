import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";

import styles from "./styles";
import Earth from "../../../assets/dark-storm.jpg";
import Logo from "../../../assets/storm-eletro.png";

function Home({ navigation }) {
  function ver() {
    navigation.navigate("Products");
  }
  function logoff() {
    navigation.navigate("Login");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <ImageBackground style={styles.img} source={Earth} />
      </View>

      <View style={styles.logoview}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.inputs}>
        <Text
          style={{
            color: "#F1F1F1",
            fontSize: 30,
            alignSelf: "center",
            marginBottom: 20,
          }}
        >
          Seja bem vindo(a)!
        </Text>
        <Text
          style={{
            color: "#F1F1F1",
            fontSize: 20,
            textAlign: "justify",
            marginBottom: 20,
            fontWeight: "300",
          }}
        >
          Aqui em nossa loja, programadores tem desconto nos produtos para a sua
          casa!
        </Text>
        <TouchableOpacity style={styles.button} onPress={ver}>
          <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
            Ver Produtos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonLogoff]}
          onPress={logoff}
        >
          <Text style={{ color: "#F1F1F1", fontSize: 20, fontWeight: "bold" }}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Home;
