import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Avatar, Caption, Divider } from "react-native-paper";
import { colors } from "../theme/colors";
import Entypo from "react-native-vector-icons/Entypo";
import AvatarWithName from "./AvatarWithName";
import { Table, Row, Rows } from "react-native-table-component";
import { Header } from "react-native/Libraries/NewAppScreen";

const { width } = Dimensions.get("screen");

const TournamentCardTable = () => {
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

      <View style={styles.userAndTableView}>
        <View style={styles.userListView}>
          <FlatList
            data={DataTable}
            keyExtractor={(item) => Math.random()}
            renderItem={({ item, index }) => (
              <View key={index} style={{ marginTop: 15 }}>
                <AvatarWithName
                  avatarSize={35}
                  userName={index + 1}
                  flexDirection="row"
                  userAvatar="https://i.pinimg.com/280x280_RS/1c/a0/46/1ca046c89d753aa437e946391318e730.jpg"
                  marginStart={20}
                />
              </View>
            )}
          />

        </View>
        <Table style={{ flex: 0.7 }}>
          <Row textStyle={styles.tableHeadStyle} data={HeadTable} />
          <Rows textStyle={styles.tableDataStyle} data={DataTable} />
          
        </Table>
      </View>
    </View>
  );
};

const HeadTable = ["Pts", "P", "W", "D", "L", "+/-"];

const DataTable = [
  ["21", "21", "11", "3", "2", "9-2"],
  ["21", "21", "11", "3", "2", "9-2"],
  ["21", "21", "11", "3", "2", "9-2"],
  ["21", "21", "11", "3", "2", "9-2"],
];

const styles = StyleSheet.create({
  mainLayout: {
    backgroundColor: colors.primary,
    // width: width,
    borderRadius: 10,
    paddingBottom: 10,
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
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  userAndTableView: {
    flexDirection: "row",
    padding: 10,
  },
  userListView: {
    flex: 0.3,
    marginTop: 18,
  },
  tableView: {},
});

export default TournamentCardTable;
