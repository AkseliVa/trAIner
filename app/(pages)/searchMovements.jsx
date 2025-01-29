import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import { SafeAreaView } from "react-native-safe-area-context";

import kettlebell from "@/assets/images/kettlebell.jpg";

import { fetchMovements } from "../utils/fetchMovements";
import useMovements from "../utils/useMovements";

import MovementModal from "../components/movementModal";
import CustomDropDownPicker from "../components/customDropDownPicker";
import RenderSearchPageItem from "../components/renderSearchPageItem";

export default function SearchMovementsPage() {
    const {
        movementData, setMovementData,
        name, setName,
        openBodypart, setOpenBodypart,
        bodypartValue, setBodypartValue,
        bodypartItems, setBodypartItems,
        openEquipment, setOpenEquipment,
        equipmentValue, setEquipmentValue,
        equipmentItems, setEquipmentItems,
        modalVisible, setModalVisible,
        selectedMovement, setSelectedMovement
    } = useMovements();
    
    return (
        <View className="flex-1">
            <ImageBackground
                source={kettlebell}
                resizeMode="cover"
                className="flex-1"
            >
            <LinearGradient
                style={{ flex: 1 }}
                colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
            >
            <SafeAreaView>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                        {selectedMovement && (
                            <MovementModal
                                {...selectedMovement}
                                onClose={() => setModalVisible(false)}
                            />
                        )}
                    </View>
                </Modal>

                <Text className="text-white text-center text-5xl font-bold">Search Movements</Text>
                <View className="items-center content-center w-90">
                    {!bodypartValue && !equipmentValue && (
                        <TextInput
                            className="border-2 border-solid border-black rounded-md mt-5 mb-2 p-3 bg-white text-black w-40"
                            placeholder="Name"
                            placeholderTextColor="black"
                            value={name}
                            onChangeText={setName}
                        />
                    )}
                    {!name && !equipmentValue && (
                        <CustomDropDownPicker 
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
                    )}
                    {!name && (bodypartValue === "" || !bodypartValue) && (
                        <CustomDropDownPicker 
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
                    )
                    }
                    <TouchableOpacity
                        className="border-2 border-solid border-black rounded-md m-5 p-3 bg-white text-black w-40 items-center"
                        onPress={() => {
                            fetchMovements(setMovementData, name, bodypartValue, equipmentValue)
                            console.log(`name: ${name}, bodypartvalue: ${bodypartValue}, equipmentvalue: ${equipmentValue}`)
                        }}
                    >
                        <Text className="text-lg font-bold">Search</Text>
                    </TouchableOpacity>
                </View>
                <View className="justify-center items-center">
                    <FlatList
                        data={movementData}
                        renderItem={({ item }) => (
                            <RenderSearchPageItem 
                                item={item} 
                                setSelectedMovement={setSelectedMovement} 
                                setModalVisible={setModalVisible} 
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
            </LinearGradient>
            </ImageBackground>
        </View>
    )
};