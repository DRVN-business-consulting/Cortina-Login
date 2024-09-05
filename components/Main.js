import React from "react";
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  ScrollViewBase,
  Image,
  SectionList,
  FlatList,
} from "react-native";
import Form from "./Form";
import Listing from "./Listing";

const Main = () => {
  const Stack = [
    {
      title: "Frontend",
      data: [
        ["Javascript", require("../assets/logo/JavaScript-logo.png")],
        ["Typescript", require("../assets/logo/Typescript_logo_2020.svg.png")],
        ["jQuery", require("../assets/logo/jquery.png")],
        ["Vue", require("../assets/logo/Vue.js_Logo_2.svg.png")],
        ["React", require("../assets/logo/react.png")],
        ["NextJs", require("../assets/logo/next-js.svg")],
        ["VueRouter", require("../assets/logo/Vue.js_Logo_2.svg.png")],
        ["Pinia", require("../assets/logo/Vue.js_Logo_2.svg.png")],
        ["Axios", require("../assets/logo/codeigniter.png")],
      ],
    },
    {
      title: "Backend",
      data: [
        ["CodeIgniter", require("../assets/logo/codeigniter.png")],
        ["Lumen-Laravel", require("../assets/logo/laravel.png")],
      ],
    },
    {
      title: "Styling",
      data: [
        ["CSS", require("../assets/logo/css.png")],
        ["Bootstrap", require("../assets/logo/Bootstrap.png")],
        ["TailwindCss", require("../assets/logo/Tailwind_CSS_Logo.svg.png")],
      ],
    },
  ];

  const ProjectExperience = [
    { id: 0, name: "CAF" },
    { id: 1, name: "Agri - Fisheries" },
    { id: 2, name: "CBMS - 1" },
    { id: 3, name: "Innovation Summit" },
    { id: 4, name: "Price Survey" },
  ];
  return (
    <>
      <StatusBar style="auto" backgroundColor="black"></StatusBar>
      <View>
        {/* <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 16,
            marginVertical: 14,
          }}
        >
          <View>
            <Text
              style={{
                color: "#06b6d4",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              Aljun A. Cortina
            </Text>
            <Text
              style={{
                color: "#0e7490",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              +639216312810
            </Text>
            <Text
              style={{
                color: "#0e7490",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              cortinaaljun@gmail.com
            </Text>
          </View>
          <View>
            <Image source={require("../assets/favicon.png")}></Image>
          </View>
        </View>
        <View
          style={{
            marginBottom: 14,
            marginHorizontal: 16,
          }}
        >
          <Text
            style={{
              color: "#0e7490",
              fontWeight: "900",
            }}
          >
            Professional Summary
          </Text>
          <Text
            style={{
              color: "#0e7490",
            }}
          >
            {"    "}Front-end developer with two years of experience developing
            functional and responsive web applications from scratch, I have
            accomplished two government projects the Community Based Monitoring
            System (CBMS) and the Updating of List of Aquaculture Farm (ULAF)
            ensuring to gather all the data with confidentiality, data
            validation, questionnaire skipping and user interfaces.
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "col",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#0e7490",
                  fontWeight: "900",
                  marginHorizontal: 17,
                }}
              >
                Experience Framework and Libraries
              </Text>
              <SectionList
                style={{
                  marginHorizontal: 16,
                }}
                sections={Stack}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        marginRight: 6,
                      }}
                    >
                      <Image
                        style={{
                          height: 16,
                          width: 16,
                        }}
                        source={item[1]}
                      ></Image>
                    </View>
                    <Text
                      style={{
                        color: "#0e7490",
                        marginTop: 4,
                      }}
                    >
                      {item[0]}
                    </Text>
                  </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Text
                    style={{
                      color: "#0e7490",
                      fontSize: 16,
                      fontWeight: "bold",
                      marginTop: 12,
                      paddingVertical: 12,
                      borderBottomWidth: 2,
                      borderColor: "#06b6d4",
                    }}
                  >
                    {title}
                  </Text>
                )}
              />
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  marginHorizontal: 16,
                  marginTop: 17,
                  color: "#0e7490",
                  borderBottomWidth: 2,
                  borderColor: "#06b6d4",
                  paddingBottom: 12,
                }}
              >
                Project Accomplished
              </Text>
              <FlatList
                style={{
                  marginHorizontal: 16,
                }}
                data={ProjectExperience}
                renderItem={({ item }) => (
                  <Text
                    style={{
                      marginTop: 10,
                      color: "#0e7490",
                    }}
                  >
                    {item.name}
                  </Text>
                )}
              ></FlatList>
            </View>
          </View>
        </View> */}
        <Form></Form>
      </View>
      {/* <ScrollView
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          borderColor: "green",
          borderWidth: 4,
        }}
      >
        <Listing></Listing>
        <Form></Form>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
      </ScrollView> */}
    </>
  );
};

export default Main;
