import React, { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import Zomoto from "../Api/Zomoto";
import { ScrollView } from "react-native-gesture-handler";
// import { FlatList } from "react-native-gesture-handler";

const ResultsDetails = ({ result }) => {
  const [imgResults, setImgResults] = useState([]);

  // const imgApi = async (cityId) => {
  //   try {
  //     const response = await Zomoto.get("/collections", {
  //       params: {
  //         limit: 50,
  //         city_id: cityId,
  //       },
  //     });
  //     setImgResults(response.data.collections);
  //   } catch (err) {
  //     //  setErrorMessage("erorr in img loading!");
  //     console.log("erorr in img loading!");
  //   }
  // };

  // imgApi(result.restaurant.location.city_id);
  // // imgApi(11494);
  // //console.log(typeof imgResults);
  // // console.log(Object.keys(imgResults));
  // // console.log(imgResults);
  // console.log("heyeheyeyeh");
  // console.log(imgResults[0]["collection"]);
  // // console.log(setImgResults);
  // // console.log(imgResults[0]["collection"]["image_url"]);
  // // console.log(imgResults.length);

  return (
    <View>
      <ScrollView>
        {/* <Image
        stlye={styles.img}
        source={{ uri: imgResults[0]["collection"]["image_url"] }}
      /> */}
        <Text style={styles.name}>{result.restaurant.name}</Text>
        <Text style={styles.name}>
          Site ID: {result.restaurant.location.city_id}
        </Text>
        <Text style={styles.name}>
          Average cost for two: {result.restaurant.average_cost_for_two}
        </Text>
        {/* <FlatList
          data={result.restaurant.highlights}
          keyExtractor={(id) => result.restaurant.id}
          renderItem={({ item }) => {
            return <Text>{item}</Text>;
          }}
        /> */}
      </ScrollView>
    </View>
  );
};

//console.log({result.restaurant.city_id});

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ResultsDetails;
