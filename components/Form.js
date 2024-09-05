import React, { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { Text, TextInput, SafeAreaView, Button, Switch } from "react-native";
import { styles } from "../assets/styles";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   componentDidMount() {
//     Alert.alert("1", "componentDidMount");
//   }

//   componentDidUpdate() {
//     Alert.alert("2", "componentDidUpdate");
//   }

//   componentWillUnmount() {
//     Alert.alert("3", "componentWillUnmount");
//   }

//   render() {
//     return (
//       <SafeAreaView>
//         <Text>Component Rendered count: {this.state.count}</Text>
//         <Button
//           title="Button From Class"
//           onPress={() => this.setState({ count: this.state.count + 1 })}
//         ></Button>
//       </SafeAreaView>
//     );
//   }
// }

const Form = () => {
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [count, setCount] = useState(0);

  const [isDark, setIsDark] = useState(false);
  const [isDarkText, setIsDarkTExt] = useState("default");

  const USERNAME = "aljuncortina";
  const PASSWORD = "cortinA1%";

  const [stringLength, setStringLength] = useState(0);
  const [messageUsername, setMessageUsername] = useState(null);
  const [messagePassword, setMessagePassword] = useState(null);

  const [isINValidUsername, setIsValidUsername] = useState(true);
  const [isINValidPassword, setIsValidPassword] = useState(true);

  useEffect(() => {
    setStringLength(username?.length);
  }, [username]);

  useEffect(() => {
    if (isDark) {
      setIsDarkTExt("dark");
    } else {
      setIsDarkTExt("default");
    }
  }, [isDark]);

  const PrintFunction = () => {
    const a = password?.split("").filter((el) => !isNaN(+el) && +el != []);
    if (!isINValidUsername && !isINValidPassword) {
      Alert.alert("Success", "You are login");
    } else {
      if (stringLength < 5) {
        setMessageUsername("Username is minumum of 5 character");
        setIsValidUsername(true);
      } else if (stringLength > 20) {
        setMessageUsername("Username is maximum of 5 character");
        setIsValidUsername(true);
      } else if (stringLength == undefined) {
        setMessageUsername("Username is required");
        setIsValidUsername(true);
      } else {
        if (username == USERNAME) {
          setMessageUsername(null);
          setIsValidUsername(false);
        } else {
          setMessageUsername("Invalid Username");
          setIsValidUsername(true);
        }
      }

      if (!password?.split("").some((el) => el == el.toUpperCase())) {
        setMessagePassword("Password must have uppercase");
        setIsValidPassword(true);
      } else if (!password?.split("").some((el) => el == el.toLowerCase())) {
        setMessagePassword("Password must have lowercase");
        setIsValidPassword(true);
      } else if (a?.length == 0) {
        setMessagePassword("Password must have number");
        setIsValidPassword(true);
      } else if (!/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(password)) {
        setMessagePassword("Password must special case");
        setIsValidPassword(true);
      } else {
        if (password == PASSWORD) {
          setMessagePassword(null);
          setIsValidPassword(false);
        } else {
          setMessagePassword("Invalid Password");
          setIsValidPassword(true);
        }
      }
    }
  };

  return (
    <SafeAreaView style={isDark ? styles.dark : styles.default}>
      <Text>{stringLength}</Text>
      <View>
        <Text>Username</Text>
        <TextInput
          value={username}
          placeholder="Input text"
          onChangeText={setUsername}
          style={styles.inputStyle}
        ></TextInput>
        {isINValidUsername && <Text>{messageUsername}</Text>}
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          value={password}
          placeholder="Input text"
          onChangeText={setPassword}
          style={styles.inputStyle}
        ></TextInput>
        {isINValidPassword && <Text>{messagePassword}</Text>}
      </View>
      {/* <View>
        {true && <Text>Aljun</Text>}
        {false || <Text>Cortina</Text>}

        {false ? <Text>Dota 1</Text> : <Text>Dota 2</Text>}
      </View> */}
      <View>
        {/* <Text>
          Username is: {username}, Password is: {password} {count}
        </Text> */}
        <Button title="Print Values" onPress={PrintFunction}></Button>
      </View>
      {/* <MyComponent></MyComponent> */}
      {isDarkText == "dark" ? <Text>🙈</Text> : <Text>🐵</Text>}
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsDark}
        value={isDark}
      />
      {/* {Text()} */}
    </SafeAreaView>
  );
};

export default Form;
