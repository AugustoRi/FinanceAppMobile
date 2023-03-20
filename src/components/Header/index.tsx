import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"

import { styles } from "./styles";

interface HeaderProps {
  username: string;
}

export function Header({ username }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{username}</Text>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Icon name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}