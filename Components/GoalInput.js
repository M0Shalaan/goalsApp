import { TextInput, Button, StyleSheet, View } from "react-native";

const GoalInput = (props) => {
  return (
    <>
      <TextInput
        placeholder="Enter your Goals Here"
        textAlign="center"
        style={styles?.inputStyle}
        onChangeText={(e) => props?.setGoalEntered(e)}
        value={props?.value}
        placeholderTextColor={"#000"}
      />
      <View style={styles?.buttonList}>
        <Button
          title="Add Goal"
          color="green"
          onPress={props?.addGoalHandler}
        />
        <Button
          title="View Goals"
          color="blue"
          onPress={() => {
            props?.setModalVisible(false);
            props?.setGoalEntered("");
          }}
        />
      </View>
    </>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    width: "100%",
    borderColor: "#000",
    color: "#000",
    fontSize: 18,
  },
  buttonList: {
    width: "100%",
    // flex: 1,
    // flexDirection: "row",
    // display: "flex",
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
