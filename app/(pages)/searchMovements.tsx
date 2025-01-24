import { View, Text } from "react-native";
import { useState, useEffect } from "react"

export default function SearchMovementsPage() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    useEffect(() => {
        async function fetchMovements() {
            const url = "https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0";
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': apiUrl
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error("Error fetching: ", error);
            }
        }
        fetchMovements();
    }, []
)

    
    
    return (
        <View className="flex-1">
            <Text className="text-black text-center text-5xl font-bold pt-10">Search Movements page</Text>
        </View>
    )
};