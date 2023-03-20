import React from "react"
import { View, Text, FlatList } from "react-native"

import { List } from "../../providers/services/api/movements"
import { MovementsItem } from "./Item"

import { styles } from "./styles/list"

export function MovementsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={List}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <MovementsItem data={item} />}
      />
    </View>
  )
}