import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { useState, useEffect } from "react"
import { LinearGradient } from "expo-linear-gradient"
import DropDownPicker from 'react-native-dropdown-picker';

import BodypartItem from "../states/bodyparts";
import EquipmentItem from "../states/equipments";

import { fetchMovements } from "../utils/fetchMovements";

export default function SearchMovementsPage() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;
    const [movementData, setMovementData] = useState([{
        id: "",
        name: "",
        target: "",
        bodypart: "",
        equipment: "",
        gifUrl: "",
        instructions: ""
    }])

    const [name, setName] = useState("");

    const [openBodypart, setOpenBodypart] = useState(false);
    const [bodypartValue, setBodypartValue] = useState(null);
    const [bodypartItems, setBodypartItems] = BodypartItem();

    const [openEquipment, setOpenEquipment] = useState(false);
    const [equipmentValue, setEquipmentValue] = useState(null);
    const [equipmentItems, setEquipmentItems] = EquipmentItem();
    
    const renderItem = ({item}) => {

        return (
        <View className="justify-center items-center">
            <Text className="text-white font-bold text-md">{item.name}</Text>
            <Image style={{width:250, height: 200}}
                source={{uri: item.gifUrl}} />
        </View>
        )
    }  
    
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
                        open={openBodypart}
                        value={bodypartValue}
                        items={bodypartItems}
                        setOpen={setOpenBodypart}
                        setValue={setBodypartValue}
                        setItems={setBodypartItems}
                        placeholder="Select bodypart"
                        zIndex={3000}
                        zIndexInverse={1000}
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
                        open={openEquipment}
                        value={equipmentValue}
                        items={equipmentItems}
                        setOpen={setOpenEquipment}
                        setValue={setEquipmentValue}
                        setItems={setEquipmentItems}
                        placeholder="Select equipment"
                        zIndex={2000}
                        zIndexInverse={2000}
                    />
                    <TouchableOpacity
                        className="border-2 border-solid border-black rounded-md m-5 p-3 bg-white text-black w-40 items-center"
                        onPress={() => fetchMovements(apiUrl, apiKey, setMovementData)}
                    >
                        <Text className="text-lg font-bold">Search</Text>
                    </TouchableOpacity>
                </View>
                <View className="justify-center items-center">
                    <FlatList
                        data={movementData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </LinearGradient>
        </View>
    )
};