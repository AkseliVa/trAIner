import { useState } from "react";

const EquipmentItem = () => {
    const [equipmentItems, setEquipmentItems] = useState([
        { label: "Assisted", value: "assisted" },
        { label: "Band", value: "band" },
        { label: "Barbell", value: "barbell" },
        { label: "Body Weight", value: "body weight" },
        { label: "Bosu Ball", value: "bosu ball" },
        { label: "Cable", value: "cable" },
        { label: "Dumbbell", value: "dumbbell" },
        { label: "Elliptical Machine", value: "elliptical machine" },
        { label: "Ez Barbell", value: "ez barbell" },
        { label: "Hammer", value: "hammer" },
        { label: "Kettlebell", value: "kettlebell" },
        { label: "Leverage Machine", value: "leverage machine" },
        { label: "Medicine Ball", value: "medicine ball" },
        { label: "Olympic Barbell", value: "olympic barbell" },
        { label: "Resistance Band", value: "resistance band" },
        { label: "Roller", value: "roller" },
        { label: "Rope", value: "rope" },
        { label: "Skierg Machine", value: "skierg machine" },
        { label: "Sled Machine", value: "sled machine" },
        { label: "Smith Machine", value: "smith machine" },
        { label: "Stability Ball", value: "stability ball" },
        { label: "Stationary Bike", value: "stationary bike" },
        { label: "Stepmill Machine", value: "stepmill machine" },
        { label: "Tire", value: "tire" },
        { label: "Trap Bar", value: "trap bar" },
        { label: "Upper Body Ergometer", value: "upper body ergometer" },
        { label: "Weighted", value: "weighted" },
        { label: "Wheel Roller", value: "wheel roller" }
    ]
    );
    return [equipmentItems, setEquipmentItems];
};

export default EquipmentItem;