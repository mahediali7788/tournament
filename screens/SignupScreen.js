import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../theme/colors";
import { Image } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

const SignupScreen = ({navigation}) => {
  const [showSecurity, setSecurity] = React.useState(false);

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

          <View>
            <LinearGradient
              colors={[colors.primary, colors.secondary]}
              style={styles.button}
            >
              <Text style={styles.text} onPress={()=>{navigation.navigate("Dashboard")}}>CREATE ACCOUNT</Text>
            </LinearGradient>

            <View style={styles.facebookButton}>
              <Entypo name="facebook-with-circle" color="blue" size={40} />
              <Text style={styles.facebookButtonText}>
                CONNECT WITH FACEBOOK
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Text>Already have an account?</Text>
        <Text style={{ fontWeight: "bold" }} onPress={()=>{navigation.navigate("LoginScreen")}}>SING IN</Text>
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
  facebookButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  facebookButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default SignupScreen;
