import React from "react"
import { View, Text } from "react-native"

import { MotiView } from "moti"

import { styles } from "./styles"

interface BalanceProps {
  balance: string;
  expenses: string;
}

const TRANSITION_DURATION = 900;
const TRANSITION_DELAY = 300;

export function Balance({ balance, expenses }: BalanceProps) {
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY,
      }}
    >
      <View>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}> -{expenses} </Text>
        </View>
      </View>
    </MotiView>
  );
}