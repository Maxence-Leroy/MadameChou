import { ColorValue, Dimensions, Platform, Pressable, SafeAreaView, StatusBar, View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import IntroductionAndSelection from "./introduction-and-selection";
import SampleComparaison from "./sample-comparaison";
import { AllSamples, Character, SalivaSample } from "../state";
import Ionicons from '@expo/vector-icons/Ionicons';
import PasswordModal from "./password-modal";
import { router } from "expo-router";
import { ItemType } from "react-native-dropdown-picker";

function isOrientationPortrait(orientation: ScreenOrientation.Orientation): Boolean {
    return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
}


export default function MadameChou() {
    const [modalVisible, setModalVisible] = useState(false);
    const [sample1, setSample1] = useState<AllSamples | null>(null);
    const [sample2, setSample2] = useState<AllSamples | null>(null);
    const [sample3, setSample3] = useState<AllSamples | null>(null);
    const [sample4, setSample4] = useState<AllSamples | null>(null);
    const [sample5, setSample5] = useState<AllSamples | null>(null);
    const [sample6, setSample6] = useState<AllSamples | null>(null);
    const [orientation, setOrientation] = useState(ScreenOrientation.Orientation.UNKNOWN);
    useEffect(() => {
        ScreenOrientation.getOrientationAsync().then((currentOrientation) => {
            setOrientation(currentOrientation)
        })
    })
    ScreenOrientation.addOrientationChangeListener((event: ScreenOrientation.OrientationChangeEvent) => {
        setOrientation(event.orientationInfo.orientation)
    })

    const characterItems: ItemType<AllSamples>[] = Object.values(Character).map((character) => { return {label: "ADN de " + character, value: character}});
    const salivaItems: ItemType<AllSamples>[] = Object.values(SalivaSample).map((saliva) => { return {label: saliva, value: saliva}});
    const items: ItemType<AllSamples>[] = salivaItems.concat(characterItems);
    const buttonSize = 30
    return (
        <SafeAreaView style={{flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <PasswordModal 
                isVisible={modalVisible} 
                closeModal={() => { setModalVisible(false) }} 
                onSuccess={() => { router.navigate("/culprit-setting") }}                
            />
            <TouchableOpacity onPress={() => { 
                setModalVisible(true)
            }}
                style={{height: buttonSize, width: buttonSize, backgroundColor: '#2196F3', justifyContent: 'center', alignItems: 'center', borderRadius: buttonSize, zIndex: 1000}}>
                    <Ionicons name="settings" size={0.6*buttonSize} color="white" />
            </TouchableOpacity>
            <View style={{flexDirection: isOrientationPortrait(orientation) ? 'column' : 'row', flex: 1, marginTop: -buttonSize }}>
                <IntroductionAndSelection
                    sample1={sample1}
                    sample2={sample2}
                    sample3={sample3}
                    sample4={sample4}
                    sample5={sample5}
                    sample6={sample6}
                    setSample1={setSample1}
                    setSample2={setSample2}
                    setSample3={setSample3}
                    setSample4={setSample4}
                    setSample5={setSample5}
                    setSample6={setSample6}
                    items={items}
                />
                <SampleComparaison
                    sample1={sample1}
                    sample2={sample2}
                    sample3={sample3}
                    sample4={sample4}
                    sample5={sample5}
                    sample6={sample6}
                />
            </View>
        </SafeAreaView>
    )
}