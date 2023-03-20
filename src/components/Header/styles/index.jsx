import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 22,
  },
});
