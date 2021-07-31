import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import IconDivideText from "../components/IconDivideText";
import TournamentCard from "../components/TournamentCard";
import TournamentCardTable from "../components/TournamentCardTable";
import { colors } from "../theme/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import { Avatar, Caption } from "react-native-paper";
import { Badge } from "react-native-elements";
import Searchbar from "../components/Searchbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("screen");

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar translucent={true} />
      <View style={styles.appbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <FontAwesome5 name="user-alt" size={20} color={colors.colorBlack} />
            <Caption>Profile</Caption>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 10,
            marginTop: 10,
          }}
          onPress={() => {
            navigation.navigate("CommunityScreen");
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <FontAwesome5
              name="user-friends"
              size={20}
              color={colors.colorBlack}
            />
            <Badge
              status="error"
              value="2"
              containerStyle={{ position: "absolute", top: -10, end: 16 }}
            />
            <Caption>Community</Caption>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 20,
          }}
        >
          <Searchbar flex={0.9} />
          <Ionicons
            name="qr-code"
            size={25}
            color={colors.primary}
            style={{ flex: 0.1, marginEnd: -10, marginLeft: 5 }}
          />
        </View>

        <View style={{ margin: 20 }}>
          <TournamentCard />
        </View>
        {/* <View style={{ marginHorizontal: 20 }}>
          <TournamentCardTable  />
        </View> */}

        <View style={{ alignItems: "center", margin: 20 }}>
          <Avatar.Icon
            style={{ backgroundColor: colors.primary }}
            icon={({ color, size }) => (
              <Entypo name="plus" size={45} color={colors.colorWhite} />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  appbar: {
    width: width,
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: StatusBar.currentHeight,
    padding: 10,
  },
  searchBar: {
    flexDirection: "row",
  },
});

export default Dashboard;
