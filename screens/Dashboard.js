import React from "react";
import { Text, View } from "react-native";
import TournamentCard from "../components/TournamentCard";
import TournamentCardTable from "../components/TournamentCardTable";

const Dashboard = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <TournamentCard />
      <TournamentCardTable />
    </View>
  );
};

export default Dashboard;
