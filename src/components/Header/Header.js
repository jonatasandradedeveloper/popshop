import React from "react";
import { ContainerHeader, Logo, Menu } from "./HeaderStyles";
import { StyleSheet, Image } from "react-native";

import logo from '../../assets/image/popshop.png';
import menu from '../../assets/image/menu.png';


export default  navigationOptions = ({ navigation }) => ({

  headerStyle: {
    backgroundColor: "#FFF",
    height: 70,
    elevation: 0,
    borderBottomWidth: 0,
  },
  //headerRight: null,
  headerLeft: null,
  headerTintColor: '#0174E7',
  headerTitle: (
    <ContainerHeader>
      <Logo source={logo} style={{ resizeMode: 'contain'}} />
      <Menu onPress={() => navigation.navigate('Settings')}>
        <Image style={{ resizeMode: 'contain', width: 70}} source={menu} />
      </Menu>
    </ContainerHeader>
  )

});

  
