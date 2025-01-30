import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CustomDropDownPicker({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder,
  zIndex,
  zIndexInverse,
}) {
  return (
    <View>
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
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
      />
    </View>
  );
}
