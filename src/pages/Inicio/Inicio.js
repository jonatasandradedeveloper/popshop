import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import logo from "../../assets/image/popshop.png";
import { StackActions, NavigationActions } from "react-navigation";

export default class Inicio extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Produto" })]
        })
      );
    }, 1000);
  }

  render() {

    return (
      <View style={{flex: 1,backgroundColor: '#FFF',alignItems: 'center',justifyContent: 'center'}}>
        <Image source={logo} />
      </View>
    );
  }
}
