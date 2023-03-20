import React from "react"
import { View, Text } from "react-native"

import { styles } from "./styles"

interface BalanceProps {
  balance: string;
  expenses: string;
}

export function Balance({ balance, expenses }: BalanceProps) {
  return (
    <View style={styles.container}>
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
          <Text style={styles.expenses}>{expenses}</Text>
        </View>
      </View>
    </View>
  );
}