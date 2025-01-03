import { useState, useEffect } from 'react';
import { Text, TextInput, StyleSheet, Button } from 'react-native';
import { useSession } from '@/context/AuthContext';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { GameType } from '@/types';
import useAPI from '@/hooks/useStorageState' 

export default function Page() {
    const router = useRouter();
    const [game, setGame] = useState<GameType | null>(null);
    const { session } = useSession();
    const { id } = useLocalSearchParams();

    const [form, setForm] = useState<GameType>({
        title: "",
        description: "",
        genre_id: "",
        release_date: ""
    });
    const { getRequest, putRequest, data, loading, error } = useAPI();


    useEffect(() => {
        getRequest(`https://ajs-ca.vercel.app/api/games/${id}`, {
            headers: {
                Authorization: `Bearer ${session}`
            }
        }, (data) => {
            setGame(data as GameType);
            setForm(data);
        })
    }, [id]);

    const handleChange = (e: any) => {
        setForm(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const handleSubmit = () => {
        console.log(form);
        putRequest(`https://ajs-ca.vercel.app/api/games/${id}`, form, {
            headers: {
                Authorization: `Bearer ${session}`
            }
        }, (data) => {
            router.push(`/games/${data._id}`);
        });
    }

    if(loading === true) return <Text>Loading API...</Text>
    
    return (
        <>
            <Text>Title</Text>
            <TextInput
                style={styles.input}
                placeholder='Title'
                value={form.title}
                onChange={handleChange}
                id='title'
            />

            <Text>Description</Text>
            <TextInput
                style={styles.input}
                placeholder='Description'
                value={form.description}
                onChange={handleChange}
                id='description'
            />

            <Text>Genre_id</Text>
            <TextInput
                style={styles.input}
                placeholder='Genre_id'
                value={form.genre_id}
                onChange={handleChange}
                id='city'
            />

            <Text>Release_Date</Text>
            <TextInput
                style={styles.input}
                placeholder='Release_Date'
                value={form.release_date}
                onChange={handleChange}
                id='start_date'
            />

            <Text>{error}</Text>
            <Button 
                onPress={handleSubmit}
                title="Submit"
                color="#841584"
            />
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10
    }
});