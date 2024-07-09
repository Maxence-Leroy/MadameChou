import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import { Button, Platform, View } from "react-native";
import DropDownPicker, { ItemType, ValueType } from "react-native-dropdown-picker";
import { Character, CharacterType, PotentialSuspects, typeAttributionState, victim } from "../state";
import { useRecoilState } from "recoil";
import { router } from "expo-router";

export default function CulpritSetting() {
    const [attribution, setAttribution] = useRecoilState(typeAttributionState);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<Character | null>(null);
    const items: ItemType<Character>[] = Object.values(PotentialSuspects).map((character) => { return {label: character, value: character}});

    useEffect(() => {
        for (const [key, value] of attribution) {
            if(value === CharacterType.Culprit) {
                setValue(key);
                break;
            }
        }
    }, [attribution])
    
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
                onPress={() => {
                    const newAttribution = new Map<Character, CharacterType>();
                    newAttribution.set(victim, CharacterType.Victim);
                    if(!!value) {
                        newAttribution.set(value, CharacterType.Culprit);
                    }
                    let i = 0
                    for (const character of Object.values(PotentialSuspects)) {
                        if(character !== value) {
                            if(i === 0) newAttribution.set(character, CharacterType.Innocent0);
                            else if(i === 1) newAttribution.set(character, CharacterType.Innocent1);
                            else if(i === 2) newAttribution.set(character, CharacterType.Innocent2);
                            i += 1;
                        }
                    }
                    setAttribution(newAttribution);
                    router.back();
                }}
            />
        </View>
    )
}