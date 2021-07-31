import React from "react";
// import { Image } from "react-native-elements";
import Onboarding from "react-native-onboarding-swiper";
import { Image, AsyncStorage, View, Text } from "react-native";
import { colors } from "../theme/colors";
import { StackActions, NavigationAction } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      titleStyles={{ fontSize: 35, fontWeight: "bold" }}
      subTitleStyles={{ color: "grey", padding: 20 }}
      controlStatusBar={false}
      containerStyles={{flex:1, justifyContent:'center', backgroundColor:colors.colorSmokeWhite}}
      transitionAnimationDuration={300}
      showDone={false}
      // showPagination={false}
      onDone={() => {
        navigation.replace("SignupScreen");
      }}
      onSkip={() => {
        navigation.replace("SignupScreen");
      }}
      bottomBarColor={colors.colorSmokeWhite}
      pages={[
        {
          backgroundColor: colors.colorSmokeWhite,
          image: (
            <Image
              style={{ width: 350, height: 350 }}
              source={require("../assets/images/pic1.png")}
            />
          ),
          title: "Oversee",
          subtitle: "Many any kind of tournament: Cup, League and KickOff.",
        },
        {
          backgroundColor: colors.colorSmokeWhite,
          image: (
            <Image
              style={{ width: 350, height: 350 }}
              source={require("../assets/images/pic2.png")}
            />
          ),
          title: "Play",
          subtitle:
            "Connect to an existing game or watch the game of friends ideal for tournament FIFA and PES.",
        },
        {
          backgroundColor: colors.colorSmokeWhite,
          image: (
            <Image
              style={{ width: 350, height: 350 }}
              source={require("../assets/images/pic3.png")}
            />
          ),
          title: "Open",
          subtitle: (
            <View>
              <Text>You've just started to change your games for better</Text>
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={styles.button}
              >
                <Text
                  style={styles.text}
                  onPress={() => {
                    navigation.replace("SignupScreen");
                  }}
                >
                  GET STARED
                </Text>
              </LinearGradient>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop:60
                }}
              >
                <Text>Already have an account?</Text>
                <Text
                  style={{ fontWeight: "bold" }}
                  onPress={() => {
                    navigation.replace("LoginScreen");
                  }}
                >
                  SING IN
                </Text>
              </View>
            </View>
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
});

export default OnboardingScreen;
