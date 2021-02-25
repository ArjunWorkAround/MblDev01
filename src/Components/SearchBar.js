import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.BackgroundStyle}>
      <Feather name="search" style={styles.Iconstyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.Inputstyle}
        placeholder="Search"
        value={term}
        //onChangeText={onTermChange}
        // onEndEditing={onTermSubmit}
        //
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  BackgroundStyle: {
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  Inputstyle: {
    flex: 1,
    fontSize: 18,
  },
  Iconstyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
