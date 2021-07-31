import React from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { colors } from "../theme/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, Button, Caption } from "react-native-paper";
import dataTable, { friendsList } from "../API/dataTable";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        translucent={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <View style={styles.appbar}>
        <Ionicons name="ios-settings" size={27} color={colors.colorBlack} />
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: -27,
            fontSize: 17,
          }}
        >
          Profile
        </Text>
      </View>

      <View style={styles.userDetailsLayout}>
        <Avatar.Image source={{ uri: dataTable[0].avatar }} size={100} />
        <View style={styles.userTextLayout}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Nick Williams
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="pencil" color="grey" size={10} />
            <Text style={{ fontSize: 10, marginLeft: 5 }}>EDIT PROFILE</Text>
          </View>
        </View>
      </View>

      <GridPoints />
      <FriendsList />
    </View>
  );
};

const GridPoints = () => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={{
        flexDirection: "row",
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 5,
      }}
    >
      <View style={{ flexDirection: "column", alignItems: "center", flex: 1 }}>
        <Caption style={{ color: "white" }}>POINTS</Caption>
        <Text style={{ fontWeight: "bold", fontSize: 28, color: "white" }}>
          54
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          borderLeftWidth: 1,
          borderLeftColor: colors.colorSmokeWhite,
        }}
      >
        <Caption style={{ color: "white" }}>WIN</Caption>
        <Text style={{ fontWeight: "bold", fontSize: 28, color: "white" }}>
          12
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          borderLeftWidth: 1,
          borderLeftColor: colors.colorSmokeWhite,
        }}
      >
        <Caption style={{ color: "white" }}>DRAW</Caption>
        <Text style={{ fontWeight: "bold", fontSize: 28, color: "white" }}>
          7
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 1,
          borderLeftWidth: 1,
          borderLeftColor: colors.colorSmokeWhite,
        }}
      >
        <Caption style={{ color: "white" }}>LOSE</Caption>
        <Text style={{ fontWeight: "bold", fontSize: 28, color: "white" }}>
          5
        </Text>
      </View>
    </LinearGradient>
  );
};

const FriendsList = () => {
  return (
    <View style={{ flexDirection: "column", margin: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>FRIENDS</Text>
        <Text style={{ color: colors.primary, marginLeft: 5 }}>(54)</Text>
      </View>
      <FlatList
        data={friendsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={{ marginEnd: 20, marginTop: 10 }}>
            <Avatar.Image size={60} source={{ uri: item.avatar }} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.colorWhite,
  },
  appbar: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 10,
    marginTop: StatusBar.currentHeight,
  },
  userDetailsLayout: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  userTextLayout: {
    flexDirection: "column",
    marginLeft: 10,
  },
});

export default ProfileScreen;
