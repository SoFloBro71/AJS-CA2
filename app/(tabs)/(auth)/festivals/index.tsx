import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import GameItem from "@/components/GameItem";

import { Link } from 'expo-router';

import { GameType } from "@/types";

export default function Tab() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get(`https://ajs-ca.vercel.app/api/games`)

      .then(response => {
        console.log(response.data);
        setGames(response.data);
      })

      .catch(e => {
        console.log(e);
      })
  }, []);

  if (games.length === 0) return <Text>No Games Found </Text>

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={games}
          renderItem={({ item }) => <GameItem game={item} />}
          keyExtractor={(game: GameType) => game._id}
        />

      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});
