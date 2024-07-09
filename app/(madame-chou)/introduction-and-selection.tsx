import { ThemedText } from "@/components/ThemedText";
import { ColorValue, Image, View } from "react-native";
import SampleSelector, { SetStateCallback } from "./sample-selector";
import { Dispatch } from "react";
import { ItemType, ValueType } from "react-native-dropdown-picker";


type IntroductionAndSelectionProps<T> = {
    sample1: T | null,
    sample2: T | null,
    sample3: T | null,
    sample4: T | null,
    sample5: T | null,
    sample6: T | null,
    setSample1: Dispatch<SetStateCallback<T | null>>,
    setSample2: Dispatch<SetStateCallback<T | null>>,
    setSample3: Dispatch<SetStateCallback<T | null>>,
    setSample4: Dispatch<SetStateCallback<T | null>>,
    setSample5: Dispatch<SetStateCallback<T | null>>,
    setSample6: Dispatch<SetStateCallback<T | null>>,
    items: ItemType<T>[]
}


export default function IntroductionAndSelection({
    sample1,
    sample2,
    sample3,
    sample4,
    sample5,
    sample6,
    setSample1,
    setSample2,
    setSample3,
    setSample4,
    setSample5,
    setSample6,
    items
}: IntroductionAndSelectionProps<ColorValue[]>) {
    return (
        <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <ThemedText>Meurtre de Madame Chou-Fleur</ThemedText>
                <ThemedText>Empreintes ADN Electrophorèse</ThemedText>
                <Image 
                    source={require('@/assets/images/mme-chou.png')} 
                    style={{width: 50, height: 50}}
                />
            </View>
            <View style={{flexDirection: 'column'}}>
                <ThemedText>Sélectionnez les échantillons à analyser</ThemedText>
                <SampleSelector
                    id={1}
                    value={sample1}
                    setValue={setSample1}
                    items={items}
                />
                <SampleSelector
                    id={2}
                    value={sample2}
                    setValue={setSample2}
                    items={items}
                />
                <SampleSelector
                    id={3}
                    value={sample3}
                    setValue={setSample3}
                    items={items}
                />
                <SampleSelector
                    id={4}
                    value={sample4}
                    setValue={setSample4}
                    items={items}
                />
                <SampleSelector
                    id={5}
                    value={sample5}
                    setValue={setSample5}
                    items={items}
                />
                <SampleSelector
                    id={6}
                    value={sample6}
                    setValue={setSample6}
                    items={items}
                />
            </View>
        </View>
    )
}