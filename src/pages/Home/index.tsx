import React from "react";
import { View } from "react-native"

import { Header } from "../../components/Header"
import { Balance } from "../../components/Balance"
import { MovementsList } from "../../components/Movements/List"

import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>
      <Header username="AugustoRi" />
      <Balance balance="20.000" expenses="1243.84" />
      <MovementsList />
    </View>
  );
}