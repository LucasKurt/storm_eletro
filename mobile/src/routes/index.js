import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Products from "../screens/Products";

const Rotas = {
  Login: {
    nome: "Login",
    screen: Login,
  },
  Home: {
    nome: "Home",
    screen: Home,
  },
  Products: {
    nome: "Products",
    screen: Products,
  },
};

const Nav = createSwitchNavigator(Rotas);

export default createAppContainer(Nav);
