import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react"
import { LinearGradient } from "expo-linear-gradient"
import DropDownPicker from 'react-native-dropdown-picker';

export default function SearchMovementsPage() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;

    const [name, setName] = useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [bodypart, setBodypart] = useState([
        { label: "Back", value: "back" },
        { label: "Cardio", value: "cardio" },
        { label: "Chest", value: "chest" },
        { label: "Lower Arms", value: "lower arms" },
        { label: "Lower Legs", value: "lower legs" },
        { label: "Neck", value: "neck" },
        { label: "Shoulders", value: "shoulders" },
        { label: "Upper arms", value: "upper arms" },
        { label: "Upper Legs", value: "upper legs" },
        { label: "Waist", value: "waist" },
    ]);
    const [equipment, setEquipment] = useState("");

    /* useEffect(() => {
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
) */

    
    
    return (
        <View className="flex-1">
            <LinearGradient
                style={{ flex: 1 }}
                colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
            >
                <Text className="text-black text-center text-5xl font-bold pt-10">Search Movements page</Text>
                <View className="items-center content-center w-90 border-2 border-solid border-black rounded-md">
                    <TextInput
                        className="border-2 border-solid border-black rounded-md m-5 p-3 bg-white text-black w-40"
                        placeholder="Name"
                        placeholderTextColor="black"
                        value={name}
                        onChangeText={setName}
                    />
                    <DropDownPicker
                        style={{
                            backgroundColor: "white",
                            borderColor: "black",
                            borderWidth: 2,
                        }}
                        containerStyle={{
                            width: 140,
                            margin: 5,
                        }}
                        open={open}
                        value={value}
                        items={bodypart}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setBodypart}
                    />
                    <TextInput
                        className="border-2 border-solid border-black rounded-md m-5 p-3 bg-white text-black w-40"
                        placeholder="Equipment"
                        placeholderTextColor="black"
                        value={equipment}
                        onChangeText={setEquipment}
                    />
                    <TouchableOpacity
                        className="border-2 border-solid border-black rounded-md m-5 p-3 bg-white text-black w-40 items-center"
                    >
                        <Text className="text-lg font-bold">Search</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
};