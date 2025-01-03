import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: "pink" }}>
			{/* INDEX */}
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="home" color={color} />
					),
				}}
			/>

			{/* GAMES */}
			<Tabs.Screen
				name="games/index"
				options={{
					title: "Games",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="heart" color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="games/[id]/index"
				options={{
					href: null,
				}}
			/>

			{/* SETTINGS */}
			<Tabs.Screen
				name="settings"
				options={{
					title: "Settings",
					tabBarIcon: ({ color }) => (
						<FontAwesome size={28} name="cog" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
