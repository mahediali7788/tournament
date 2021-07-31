import React from "react";
// import { Image } from "react-native-elements";
import Onboarding from "react-native-onboarding-swiper";
import { Image, AsyncStorage } from "react-native";
import { colors } from "../theme/colors";
import { StackActions, NavigationAction } from "@react-navigation/native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      titleStyles={{ fontSize: 35, fontWeight: "bold" }}
      subTitleStyles={{ color: "grey", padding: 20 }}
      controlStatusBar={false}
      transitionAnimationDuration={300}
      onDone={ () => {
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
          subtitle: "You've just started to change your games for better",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
