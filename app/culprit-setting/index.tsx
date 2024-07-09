import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { Button, Platform, View } from "react-native";
import DropDownPicker, { ValueType } from "react-native-dropdown-picker";

export default function CulpritSetting() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<ValueType | null>(null);
    const items = [
        { label: "toto", value: "titi"}
    ]
    return(
        <View style={{flexDirection: 'column', flex: 1, justifyContent: 'flex-start', marginHorizontal: 10, alignItems: 'center'}}>
            <ThemedText style={{alignSelf: 'flex-start'}}>Sélectionner le coupable</ThemedText>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                placeholder={"Choisir un personnage"}
                containerStyle={{
                    paddingVertical: 10,
                }}
                dropDownDirection='AUTO'
                bottomOffset={400}
                listMode= {Platform.OS === 'android' ? 'MODAL' : 'DEFAULT'}
            />
            <Button
                title="Valider"
                onPress={() => {}}
            />
        </View>
    )
}