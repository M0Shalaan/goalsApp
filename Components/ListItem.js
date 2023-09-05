import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ToastAndroid,
  Platform,
  AlertIOS,
} from "react-native";
import Moment from "moment";
const ListItem = (props) => {
  const deleteHandler = (id) => {
    console.log(id);
    // filter out the object from array , whose id is not equal to this.id
    let temp = props?.list.filter((current) => current.id != id);
    props?.setList(temp);
    if (Platform.OS === "android") {
      ToastAndroid.show("Goal Completed ", ToastAndroid.LONG);
    } else {
      AlertIOS.alert("Goal Completed Succesfully! ✅");
    }

    console.log(Platform.OS);
  };

  return (
    <View style={styles?.ListItem}>
      <Pressable
        onPress={() => deleteHandler(props?.id)}
        android_ripple={{ color: "#301934" }}
      >
        <Text style={styles?.listItemText}>{props?.text}</Text>
        <Text style={styles?.listItemDate}>
          {Moment(props?.id).format("MMMM Do YYYY, h:mm a")}
        </Text>
      </Pressable>
    </View>
  );
};
export default ListItem;


const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#000",
    marginVertical: 8,
    borderRadius: 5,
  },
  listItemText: {
    color: "black",
    fontSize: 18,
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontWeight: "bold",
    backgroundColor: "#98979776",
  },
  listItemDate: {
    color: "black",
    textAlign: "right",
    paddingHorizontal: 8,
    fontSize: 12,
    paddingVertical: 6,
  },
});
