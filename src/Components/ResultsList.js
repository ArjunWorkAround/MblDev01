import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResutsDetails from "./ResultsDetails";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.tilte}>{title}</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.restaurant.id}
        renderItem={({ item }) => {
          //   return <Text>{item.restaurant.name}</Text>;
          return <ResutsDetails result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tilte: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultsList;
