import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { GameType } from "@/types";

interface MyProps {
	game: GameType;
}

export default function GameItem({ game }: MyProps) {
	return (
		<View style={styles.item}>
			<Link
				href={{
					pathname: "/games/[id]",
					params: { id: game._id },
				}}
			>
				<Text>{game.title}</Text>
			</Link>
			<Text>{game.description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#9c79ba",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
});
