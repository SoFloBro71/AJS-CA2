import {Slot, Redirect} from "expo-router"
import {Text} from "react-native"
import {useSession} from "@/context/AuthContext"

export default function Root() {
	const {session, isLoading}: any = useSession()

	if (isLoading) {
		return <Text>Loading...</Text>
	}

	if (!session) {
		return <Redirect href="/" />
	}

	return <Slot />
}
