import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import { FestivalType } from "@/types";

export default function Tab() {
	const [festival, setFestival] = useState<FestivalType | null>(null);
	const { id } = useLocalSearchParams();

	useEffect(() => {
		axios
			.get(`https://festivals-api.vercel.app/api/festivals/${id}`, {
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RpbmdAZ21haWwuY29tIiwiZnVsbF9uYW1lIjoib29waWUiLCJfaWQiOiI2NzQ1YTM1MTU5YTZiMjAwMDkyNDRkZWUiLCJpYXQiOjE3MzI2MTcwNjd9.k2dcrl9kI_IhvScTZWZalg0b_bAj5RsCk8JNeYvyzD8",
				},
			})

			.then((response) => {
				console.log(response.data);
				setFestival(response.data);
			})

			.catch((e) => {
				console.log(e);
			});
	}, [id]);

	if (!festival) return <Text>Festival Not Found</Text>;

	return (
		<View style={styles.container}>
			<Text>{festival.title}</Text>
			<Text>{festival.city}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
