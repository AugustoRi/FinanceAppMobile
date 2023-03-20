import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import type { MovementsModel } from "../../models/Movements"

import { styles } from "./styles/item"

interface MovementsItemProps {
  data: MovementsModel
}

export function MovementsItem({ data } : MovementsItemProps) {
  const [showValue, setShowValue] = useState<boolean>(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date.split('-').reverse().join('/')}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {
          showValue ? (
            <Text style={data.type === 1 ? styles.balance : styles.expenses}>
              {data.type === 0 && "-"} R${data.value}
            </Text>
          ) : (
            <View style={styles.skeleton}>
            </View>
          )
        }
      </View>
    </TouchableOpacity>
  )
}