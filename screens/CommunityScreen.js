import React from "react";
import { StyleSheet, StatusBar, View, Text, FlatList } from "react-native";
import InviteToPlay from "../components/InviteToPlay";
import { colors } from "../theme/colors";
import { invite } from "../API/dataTable";

const CommunityScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.appbar}>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 17,
          }}
        >
          Community
        </Text>
      </View>
      <Invite />
    </View>
  );
};

const Invite = () => (
  <View style={{marginHorizontal: 20,marginTop:20}}>
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom:20 }}>
      <Text style={{ fontWeight: "bold" }}>INVITE TO PLAY</Text>
      <Text style={{ color: colors.primary, marginLeft: 5 }}>(2)</Text>
    </View>
    <FlatList
      data={invite}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{  marginBottom: 20 }}>
          <InviteToPlay
            gameName={item.gameName}
            gameType={item.gameType}
            iconName={item.iconName}
            matchDate={item.matchData}
            colorsGrad={[colors.colorBlackOne, colors.colorBlackTwo]}
            gameNameColor="white"
            gameTypeColor="white"
            matchDateColor="white"
          />
        </View>
      )}
    />
  </View>
);

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
});

export default CommunityScreen;
