import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import type { MovementsModel } from "../../models/Movements"

import { MotiView, MotiText, AnimatePresence } from "moti"

import { styles } from "./styles/item"

interface MovementsItemProps {
  data: MovementsModel
}

export function MovementsItem({ data } : MovementsItemProps) {
  const [showValue, setShowValue] = useState<boolean>(true);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date.split('-').reverse().join('/')}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {
          showValue ? (
            <AnimatePresence exitBeforeEnter>
              <MotiText
                style={data.type === 1 ? styles.balance : styles.expenses}
                from={{
                  translateX: 100,
                }}
                animate={{
                  translateX: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 500,
                }}
              >
                {data.type === 0 && "-"} R${data.value}
              </MotiText>
            </AnimatePresence>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <MotiView
                style={styles.skeleton}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "timing" }}
              >
              </MotiView>
            </AnimatePresence>
          )
        }
      </View>
    </TouchableOpacity>
  )
}