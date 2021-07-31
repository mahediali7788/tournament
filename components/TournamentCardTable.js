import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Avatar, Caption, Divider } from "react-native-paper";
import { colors } from "../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import AvatarWithName from "./AvatarWithName";
import { dataTable } from "../API/dataTable";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("screen");

const TournamentCardTable = () => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={styles.mainLayout}
    >
      <View style={styles.tournamentDetailsLayout}>
        <Avatar.Icon
          icon={({ color, size }) => (
            <Entypo name="trophy" size={size} color={colors.colorBlack} />
          )}
          style={{ backgroundColor: colors.colorWhite }}
        />
        <View style={styles.tournamentDetailsText}>
          <Text style={{ color: colors.colorWhite, fontSize: 25 }}>
            Football
          </Text>
          <Caption style={{ color: colors.colorWhiteTwo }}>15/06/2021</Caption>
        </View>
        <View style={{ alignItems: "center", position: "absolute", end: 20 }}>
          <Text
            style={{
              fontSize: 28,
              color: colors.colorWhite,
              fontWeight: "bold",
            }}
          >
            PLAYOFF
          </Text>
        </View>
      </View>

      <View style={{flexDirection:'row-reverse', padding:10}}>
            {
                HeadTable.map((item, index)=>{
                    return(
                        <Text style={{color:'white', marginHorizontal:18}} key={item.id}>{item.name}</Text>
                    )
                })
            }
      </View>

      <View style={styles.userAndTableView}>
        <FlatList
          data={dataTable}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                margin: 10,
                flex: 8,
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ color: "white" }}>{item.id}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Avatar.Image source={{ uri: item.avatar }} size={30} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tableDataStyle}>{item.points}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tableDataStyle}>{item.P}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tableDataStyle}>{item.W}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tableDataStyle}>{item.D}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tableDataStyle}>{item.L}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.tableDataStyle}>{item.rate}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </LinearGradient>
  );
};

const HeadTable = [
    { name: "+/-", id: "6" },
    { name: "L", id: "5" },
    { name: "D", id: "4" },
    { name: "W", id: "3" },
    { name: "P", id: "2" },
  { name: "Pts", id: "1" },
];

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: colors.primary,
    // width: width,
    borderRadius: 10,
    paddingBottom: 10,
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
    alignItems: "center",
    justifyContent: "center",
  },
  tableHeadStyle: {
    color: "white",
    textAlign: "center",
  },
  tableDataStyle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  userAndTableView: {
    flexDirection: "column",
  },
  userListView: {
    flex: 0.3,
    marginTop: 18,
  },
  tableView: {},
});

export default TournamentCardTable;
