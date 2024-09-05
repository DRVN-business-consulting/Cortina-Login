import React from "react";
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
  StatusBar,
  SectionList,
  Item,
} from "react-native";
import { styles } from "../assets/styles";

const Listing = () => {
  const DATA = [
    { id: 0, name: "John Doe", bgc: "green" },
    { id: 1, name: "Doe Jown", bgc: "blue" },
    { id: 2, name: "A C", bgc: "red" },
  ];

  const DATA_SECTIONLIST = [
    {
      title: "Manila",
      data: ["Makati", "Mandaluyong", "Taguig"],
    },
    {
      title: "Bulacan",
      data: ["San Miguel", "San Jose", "Del Monte"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  return (
    <>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text
            style={{
              ...styles.text,
              ...{ color: "white", backgroundColor: item.bgc },
            }}
          >
            {item.id} - {item.name}
          </Text>
        )}
      ></FlatList>
      <SectionList
        sections={DATA_SECTIONLIST}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </>
  );
};

export default Listing;
