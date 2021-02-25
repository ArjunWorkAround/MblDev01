import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../Hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.restaurant.price_range === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        //  onTermChange={(Term) => setTerm(newTerm)}
        //     onTermSubmit={() => console.log("term submitted!")}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We found results: {results.length}</Text>
      <ResultsList results={filterResultsByPrice(2)} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice(3)} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice(4)} title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
