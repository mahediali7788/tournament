import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import React from "react";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureResponseDistance: { horizontal: 150 },
        ...MyTransition,
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
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
        //   {
        //     rotate: current.progress.interpolate({
        //       inputRange: [0, 1],
        //       outputRange: [1, 0],
        //     }),
        //   },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7],
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

export default AppStack;
