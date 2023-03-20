import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"

import { MotiView, MotiText } from "moti"

import { styles } from "./styles";

interface HeaderProps {
  username: string;
}

const TRANSITION_DURATION = 1000;
const TRANSITION_DELAY = 300;

export function Header({ username }: HeaderProps) {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: TRANSITION_DURATION,
          delay: TRANSITION_DELAY,
        }}
      >
        <MotiText
          style={styles.username}
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "timing",
            duration: TRANSITION_DURATION,
            delay: 2 * TRANSITION_DELAY,
          }}
        >
          {username}
        </MotiText>

        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Icon name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}