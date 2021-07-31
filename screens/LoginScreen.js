import React, { useEffect } from "react";
import { AsyncStorage, StyleSheet, Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  const [showSecurity, setSecurity] = React.useState(true);
//   const [val, setval] = React.useState('');

  useEffect(()=>{
    // getData();
  }, [])

//   const getData = async()=>{
//       setval(await (await AsyncStorage.getItem("showedOnboardingScreen")).toString())
//   }

  return (
    <View style={styles.root}>
      <View style={styles.layout}>
        <View style={styles.tournamentLogoWithText}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 150, height: 150 }}
          />
          <Text style={styles.logoText}>Tournament</Text>
        </View>

        <View style={styles.authArea}>
          <TextInput
            label="EMAIL"
            mode="flat"
            dense
            // value={val}
            theme={{ colors: { primary: colors.colorGrey } }}
            style={styles.defaultTextInputStyle}
          />

          <TextInput
            label="PASSWORD"
            mode="flat"
            dense
            secureTextEntry={showSecurity}
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => {
                  setSecurity(!showSecurity);
                }}
              />
            }
            theme={{ colors: { primary: colors.colorGrey } }}
            style={styles.defaultTextInputStyle}
          />

          <View style={{ alignItems: "center" }}>
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              style={styles.button}
            >
              <Text onPress={()=>{
                navigation.replace("Dashboard")
              }} style={styles.text}>SIGN IN</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  layout: {
    flex: 1,
    justifyContent: "center",
  },
  tournamentLogoWithText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
    marginEnd: 30,
  },
  defaultTextInputStyle: {
    backgroundColor: colors.colorWhite,
    paddingHorizontal: 0,
    fontWeight: "bold",
  },
  authArea: {
    marginHorizontal: 20,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
});

export default LoginScreen;
