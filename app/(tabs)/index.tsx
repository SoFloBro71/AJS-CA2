import {View, Text, StyleSheet} from "react-native"
import LoginForm from "@/components/LoginForm"
import { useSession } from "@/context/AuthContext"
import { Button } from "react-native";

export default function Tab() {

	const { session, signOut } = useSession();


	return (
		<View style={styles.container}>
			<Text>Tab Home</Text>

			{(session) ? (
				<Button 
				onPress={signOut} 
				title="Log Out" 
				color="#6064b3" />) : (<LoginForm/>)}

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
})
