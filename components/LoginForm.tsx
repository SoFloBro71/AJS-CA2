import {ChangeEvent, useState} from "react"
import {Button, StyleSheet, Text, TextInput} from "react-native"
import axios from "axios"
import {useSession} from "@/context/AuthContext"
import { IAuthContext } from "@/types"

export default function LoginForm() {
	const [form, setForm] = useState({
		email: "",
		password: "",
	})

	const [error, setError] = useState("")

    const { signIn } = useSession();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}

	const handlePress = () => {
		console.log("Clicked")

		axios
			.post("https://festivals-api.vercel.app/api/users/login", {
				email: form.email,
				password: form.password,
			})
			.then((response) => {
				console.log(response.data)
                signIn(response.data.token);
			})
			.catch((e) => {
				console.log(e)
				setError(e.response.data.message)
			})
	}

	return (
		<>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
				id="email"
			/>

			<TextInput
				style={styles.input}
				placeholder="Password"
				value={form.password}
				onChange={handleChange}
				id="password"
			/>

			<Text>{error}</Text>

			<Button onPress={handlePress} title="Submit" color="#6064b3" />
		</>
	)
}

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 10,
		borderWidth: 1,
		padding: 10,
	},
})
