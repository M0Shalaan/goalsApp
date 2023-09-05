import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Modal,
  Image,
  ToastAndroid,
  AlertIOS,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalInput from "./Components/GoalInput.js";
import ListItem from "./Components/ListItem.js";

export default function App() {
  const [goalEntered, setGoalEntered] = useState("");
  const [isModalVisible, setModalVisible] = useState(true);
  const [list, setList] = useState([]);
  const addGoalHandler = () => {
    if (goalEntered !== "") {
      let temp = list;
      temp.push({ task: goalEntered, id: Date.now() });
      setList(temp);
      setGoalEntered("");
      if (Platform.OS === "android") {
        ToastAndroid.show("Goal Added Succesfully! 🎉", ToastAndroid.LONG);
      } else {
        AlertIOS.alert("Goal Added Succesfully! 🎉");
      }
      setModalVisible(false);
    } else {
      if (Platform.OS === "android") {
        ToastAndroid.show("Enter a Goal to Add", ToastAndroid.LONG);
      } else {
        AlertIOS.alert("Enter a Goal to Add");
      }
    }
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles?.divlayer1}>
        <Modal animationType="slide" visible={isModalVisible} style={{}}>
          <View style={styles?.inputContainer}>
            <GoalInput
              value={goalEntered}
              setGoalEntered={setGoalEntered}
              addGoalHandler={addGoalHandler}
              setModalVisible={setModalVisible}
            />
          </View>
        </Modal>
        <View>
          <Button
            title="Add Goal"
            onPress={() => setModalVisible(true)}
            color="#1256af"
          />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={list}
            renderItem={(item) => (
              <ListItem
                text={item?.item?.task}
                id={item?.item?.id}
                list={list}
                setList={setList}
              />
              
            )}
            keyExtractor={(item, index) => item?.id}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  divlayer1: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#e0e4e8",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#e0e4e8",
  },

  heading: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "900",
  },
  goalsContainer: {
    flex: 5,
    paddingVertical: 5,
  },
  modalStyle: {},
});
