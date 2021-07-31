import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Avatar, Caption, Divider } from "react-native-paper";
import { colors } from "../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import AvatarWithName from "./AvatarWithName";

const { width } = Dimensions.get("screen");

const TournamentCard = () => {
  return (
    <View style={styles.mainLayout}>
      <View style={styles.tournamentDetailsLayout}>
        <Avatar.Icon
          icon={({ color, size }) => (
            <Entypo name="trophy" size={size} color={colors.colorBlack} />
          )}
          style={{ backgroundColor: colors.colorWhite }}
        />
        <View style={styles.tournamentDetailsText}>
          <Text style={{ color: colors.colorWhite, fontSize: 25 }}>
            FIFA World Cup
          </Text>
          <Caption style={{ color: colors.colorWhiteTwo }}>24/02/2021</Caption>
        </View>
        <View style={{ alignItems: "center", position: "absolute", end: 20 }}>
          <Text
            style={{
              fontSize: 28,
              color: colors.colorWhite,
              fontWeight: "bold",
            }}
          >
            CUP
          </Text>
        </View>
      </View>

      <View style={styles.dividerWithText}>
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: colors.colorWhite,
          }}
        >
          Round 2
        </Text>
        <Divider style={{ backgroundColor: colors.colorWhiteTwo }} />
      </View>

      <View style={styles.gamePointArea}>
        <Caption style={{ color: colors.colorWhiteTwo }}>LAST GAME</Caption>
        <View style={styles.lastUserDetalisLayout}>
          <AvatarWithName
            userName="Alex Hilton"
            flexDirection="row"
            userAvatar="https://i.pinimg.com/280x280_RS/1c/a0/46/1ca046c89d753aa437e946391318e730.jpg"
          />

          <Text
            style={{
              fontSize: 25,
              color: colors.colorWhite,
              fontWeight: "bold",
              marginHorizontal:20
            }}
          >
            2-1
          </Text>
          <AvatarWithName userName="Tim Carter" flexDirection="row-reverse" userAvatar="https://pagesix.com/wp-content/uploads/sites/3/2019/10/matt-damon.jpg?quality=90&strip=all&w=618&h=410&crop=1" />
        </View>
      </View>



      <View style={styles.gamePointArea}>
        <Caption style={{ color: colors.colorWhiteTwo }}>NEXT GAME</Caption>
        <View style={styles.lastUserDetalisLayout}>
          <AvatarWithName
            userName="Nike Williams"
            flexDirection="row"
            userAvatar="https://www.hollywoodreporter.com/wp-content/uploads/2017/10/gettyimages-462730932-h_2017.jpg?w=681&h=383&crop=1"
          />

          <Text
            style={{
              fontSize: 25,
              color: colors.colorWhite,
              fontWeight: "bold",
              marginHorizontal:20
            }}
          >
            -
          </Text>
          <AvatarWithName userName="Ben McLean" flexDirection="row-reverse" userAvatar="https://d3qz1qhhp9wxfa.cloudfront.net/growingproduce/wp-content/uploads/2011/09/3998.jpg" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: colors.primary,
    // width: width,
    borderRadius: 10,
    paddingBottom:10,
    margin:20
  },
  tournamentDetailsLayout: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  tournamentDetailsText: {
    flexDirection: "column",
    marginStart: 20,
  },
  dividerWithText: {
    marginHorizontal: 10,
  },
  gamePointArea: {
    padding: 10,
  },
  lastUserDetalisLayout: {
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center'
  },
});

export default TournamentCard;
