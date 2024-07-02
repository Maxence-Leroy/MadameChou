import { Image, Platform, SafeAreaView, StatusBar, View } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import SampleSelector from "./sample-selector";


export default function MadameChou() {
    const [sample1, setSample1] = useState<string | null>(null);
    const [sample2, setSample2] = useState<string | null>(null);
    const [sample3, setSample3] = useState<string | null>(null);
    const [sample4, setSample4] = useState<string | null>(null);
    const [sample5, setSample5] = useState<string | null>(null);
    const [sample6, setSample6] = useState<string | null>(null);

    const items = [
        {label: 'Échantillon salive verre n°1', value: 'glass1'},
        {label: 'Échantillon salive verre n°2', value: 'glass2'},
        {label: 'ADN de Madame Chou-Fleur', value: 'chou'},
        {label: 'ADN de Madame Banane', value: 'banane'},
        {label: 'ADN de Monsieur Kiwi', value: 'kiwi'},
        {label: 'ADN de Monsieur Oignon', value: 'oignon'},
        {label: 'ADN de Monsieur Foie', value: 'foie'},
    ];
    return (
        <SafeAreaView style={{flexDirection: 'row', flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <View style={{flexDirection: 'column', justifyContent: 'space-between', flex:1}}>
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
            <View style={{flexDirection: 'column', flex:1}}>

            </View>
        </SafeAreaView>
    )
}