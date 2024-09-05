import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Switch,
  FlatList,
} from "react-native";
import { styles } from "./assets/styles";
import { useState } from "react";
import Listing from "./components/Listing";
import Form from "./components/Form";
import Main from "./components/Main";

export default function App() {
  const [value, setValue] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <Main></Main>
    </SafeAreaView>
    // <SafeAreaView>
    //   <View>
    //     <View
    //       style={{
    //         borderColor: "black",
    //         borderWidth: 4,
    //       }}
    //     >
    //       <StatusBar style="auto" backgroundColor="white">
    //         <Text>ASdbadbhasdasjhdasdf</Text>
    //       </StatusBar>
    //       <Text style={styles.text}>
    //         Open up App.js to start working on your app! asdasdasds
    //       </Text>
    //       <Image
    //         source={{
    //           uri: "https://placedog.net/500/500",
    //         }}
    //         style={{
    //           with: 500,
    //           height: 500,
    //         }}
    //       ></Image>
    //       <Image source={require("./assets/favicon.png")}></Image>
    //       <Button
    //         title="ASBDjhasb"
    //         color="blue"
    //         onPress={() => {
    //           console.log(232112321);
    //         }}
    //       ></Button>
    //       <TouchableOpacity
    //         style={styles.buttonStyle}
    //         onPress={() => {
    //           console.log(232112321);
    //         }}
    //       >
    //         <Text>Press Here</Text>
    //       </TouchableOpacity>
    //     </View>
    //     <TextInput
    //       value={value}
    //       placeholder="Input text"
    //       onChageText={setValue}
    //       style={styles.inputStyle}
    //     ></TextInput>
    //     <Switch
    //       trackColor={{ false: "green", true: "black" }}
    //       thumbColor={isEnabled ? "yellow" : "red"}
    //       ios_backgroundColor="#3e3e3e"
    //       onValueChange={toggleSwitch}
    //       value={isEnabled}
    //     />
    //   </View>
    // </SafeAreaView>
  );
}
