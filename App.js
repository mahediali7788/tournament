import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import {AsyncStorage} from 'react-native'
import TournamentCard from "./components/TournamentCard";
import TournamentCardTable from "./components/TournamentCardTable";
import Dashboard from "./screens/Dashboard";
import OnboardingScreen from "./screens/OnboardingScreen";
import AppStack from "./stack/AppStack";
import AuthStack from "./stack/AuthStack";

export default function App() {
  const [isFirstLaunched, setIsFirstLaunched] = React.useState(null);

  useEffect(() => {
    _Auth()
  }, []);

  const _Auth = async() =>{
   await AsyncStorage.getItem("isFirstLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("isFirstLaunched", "true");
        setIsFirstLaunched(true);
      } else {
        setIsFirstLaunched(false);
      }
    });
  }

  // if(isFirstLaunched === null){
  //   return null
  // }
  // else if (isFirstLaunched === true) {
  //   return (
  //     <OnboardingScreen />
  //   );
  // } else {
  //   return (
  //     <NavigationContainer>
  //       <AuthStack />
  //     </NavigationContainer>
  //   );
  // }

  return(<Dashboard />)
}
