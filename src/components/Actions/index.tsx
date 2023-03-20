import React from "react"
import { 
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native"

import Icon from "react-native-vector-icons/AntDesign"
import { ActionsList } from "../../providers/services/api/actions"

import { styles } from "./styles"

export function Actions() {
  return (
    <ScrollView 
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={true}
    >
      {
        ActionsList.map((action) => (
          <TouchableOpacity key={action.id} style={styles.actionButton}>
            <View style={styles.areaButton}>
              <Icon name={action.nameIcon} size={24} color="#000" />
            </View>
            <Text style={styles.labelButton}>{action.nameAction}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
}