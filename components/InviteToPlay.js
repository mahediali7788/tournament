import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Caption } from "react-native-paper";
import { colors } from "../theme/colors";
import IonIcon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";


const InviteToPlay = ({gameName, gameType, matchDate, iconName, colorsGrad, gameNameColor, gameTypeColor, matchDateColor}) => {
  return (
    <LinearGradient colors={colorsGrad} style={styles.tournamentDetailsLayout}>
      <Avatar.Icon
        icon={({ color, size }) => (
          <IonIcon name={iconName} size={size} color={colors.colorBlack} />
        )}
        style={{ backgroundColor: colors.colorAccent }}
      />
      <View style={styles.tournamentDetailsText}>
        <Text style={{ color: gameNameColor, fontSize: 20, fontWeight:'bold' }}>{gameName}</Text>
        <Caption style={{ color: matchDateColor }}>{matchDate}</Caption>
      </View>
      <View style={{ alignItems: "center", position: "absolute", end: 20 }}>
        <Text
          style={{
            fontSize: 23,
            color: gameTypeColor,
            fontWeight: "bold",
          }}
        >
          {gameType}
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
  },
  tournamentDetailsLayout: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    borderRadius:10
  },
  tournamentDetailsText: {
    flexDirection: "column",
    marginStart: 20,
  },
});

export default InviteToPlay;
