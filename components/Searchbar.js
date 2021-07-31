import React, { useRef } from "react";
import { TextInput, View } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const Searchbar = ({flex}) => {

const textinput = useRef(null);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        padding: 8,
        borderRadius:40,
        flex:flex
      }}
      
    >
      <EvilIcons name="search" size={24} color="grey" />
      <TextInput ref={textinput} placeholder="Search" />
    </View>
  );
};

export default Searchbar;
