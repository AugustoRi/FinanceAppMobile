import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    paddingTop: 22,
    paddingBottom: 22,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    zIndex: 999,
  },
  itemTitle: {
    fontSize: 20,
    color: "#303030",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  currencySymbol: {
    color: "#303030",
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: "#2ECC71",
  },
  expenses: {
    fontSize: 22,
    color: "#E74C3C",
  },
});