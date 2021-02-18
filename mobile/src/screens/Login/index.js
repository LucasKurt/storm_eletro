import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import styles from "./styles";
import Logo from "../../../assets/storm.png";
import Nome from "../../../assets/storm-eletro.png";

// const apiUsuario = {
//   id: 1,
//   email: "gabs@gmail.com",
//   senha: "123"
// }

function Login({ navigation }) {
  function auth() {
    // if(apiUsuario.email === usuario && apiUsuario.senha === senha){
    navigation.navigate("Home");
    // } else{
    //     Alert.alert("Usuário inválido")
    // }
  }

  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
      <View style={styles.top}>
        <Image style={styles.img} source={Logo} />
      </View>
      <View style={styles.nomeview}>
        <Image style={styles.nome} source={Nome} />
      </View>

      <View style={styles.inputs}>
        <TextInput
          placeholder="Digite seu usuário"
          style={styles.input}
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.button} onPress={auth}>
          <Text style={{ color: "#f1f1f1", fontSize: 20, fontWeight: "bold" }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
export default Login;
