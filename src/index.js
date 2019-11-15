import NavigatorConfig from "./components/Header/Header";
import "./components/sidebar";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Inicio from "./pages/Inicio/Inicio";
import Produto from "./pages/Produto/Produto";
import Ckeckout from "./pages/Ckeckout/Ckeckout";
import Settings from "./pages/Settings/Settings";

const Navegador = createStackNavigator({
  Inicio: {
    screen: Inicio,
    navigationOptions: () => ({
      header: null
    })
  },
  Produto: {
    screen: Produto,
    navigationOptions: NavigatorConfig
  },
  Ckeckout: {
    screen: Ckeckout,
    navigationOptions: NavigatorConfig
  },
  Settings: {
    screen: Settings,
    navigationOptions: NavigatorConfig
  },
});

export default createAppContainer(Navegador);
