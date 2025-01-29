import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

export default function AddMovementModal({ item, onClose }) {
    const [added, setAdded] = useState([]);

    console.log("Modal received item:", item);

    return (
        <View className="bg-white rounded-lg p-5 w-3/4">
            <Text className="text-lg font-bold">{item.name}</Text>
            <Image style={{ width: 250, height: 200 }} source={{ uri: item.gifUrl }} />
            <Text>Target: {item.target}</Text>
            <Text>Body Part: {item.bodyPart}</Text>
            <Text>Equipment: {item.equipment}</Text>
            <Text>Instructions: {item.instructions}</Text>
            <TouchableOpacity
                className="mt-5 p-2 bg-green-500 rounded-md"
                onPress={() => {
                    setAdded(prevAdded => [...prevAdded, item])
                    console.log("Added to workout")
                }}
            >
                <Text className="text-white text-center">Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
                className="mt-5 p-2 bg-red-500 rounded-md"
                onPress={onClose}
            >
                <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
        </View>
    );
}
