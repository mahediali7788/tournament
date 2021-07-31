import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";
import React from 'react';
import Dashboard from "../screens/Dashboard";
import LoginScreen from "../screens/LoginScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignupScreen from "../screens/SignupScreen";

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{
        gestureEnabled: true,
        gestureResponseDistance: {
          horizontal: 50,
        },
        ...MyTransition,
      }}
    >
      <Auth.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />

      <Auth.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: null,
        }}
      />
      <Auth.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: null,
        }}
      />
      
    </Auth.Navigator>
  );
};

const MyTransition = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          // {
          //   rotate: current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [1, 0],
          //   }),
          // },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 0.7],
          outputRange: [0, 0.4],
        }),
      },
    };
  },
};

export default AuthStack;
