import { View, Text, Pressable, Image } from "react-native";

export default function RenderSearchPageItem ({ item, setSelectedMovement, setModalVisible }) {
    return (
        <View className="justify-center items-center">
            <Pressable
                className="justify-center items-center"
                onPress={() => {
                    setSelectedMovement(item)
                    setModalVisible(true)
                }
                }
            >
                <Text className="text-white font-bold text-md">{item.name}</Text>
                <Image style={{ width: 250, height: 200 }}
                    source={{ uri: item.gifUrl }} />
            </Pressable>
        </View>
    )
}; 