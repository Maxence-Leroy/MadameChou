import { ColorValue, Platform, SafeAreaView, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import IntroductionAndSelection from "./introduction-and-selection";
import SampleComparaison from "./sample-comparaison";
import { dnaSamples } from "./colors";

function isOrientationPortrait(orientation: ScreenOrientation.Orientation): Boolean {
    return orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN || orientation === ScreenOrientation.Orientation.PORTRAIT_UP
}


export default function MadameChou() {
    const [sample1, setSample1] = useState<ColorValue[] | null>(null);
    const [sample2, setSample2] = useState<ColorValue[] | null>(null);
    const [sample3, setSample3] = useState<ColorValue[] | null>(null);
    const [sample4, setSample4] = useState<ColorValue[] | null>(null);
    const [sample5, setSample5] = useState<ColorValue[] | null>(null);
    const [sample6, setSample6] = useState<ColorValue[] | null>(null);
    const [orientation, setOrientation] = useState(ScreenOrientation.Orientation.UNKNOWN);
    useEffect(() => {
        ScreenOrientation.getOrientationAsync().then((currentOrientation) => {
            setOrientation(currentOrientation)
        })
    })
    ScreenOrientation.addOrientationChangeListener((event: ScreenOrientation.OrientationChangeEvent) => {
        setOrientation(event.orientationInfo.orientation)
    })

    const items = dnaSamples;
    return (
        <SafeAreaView style={{flexDirection: isOrientationPortrait(orientation) ? 'column' : 'row', flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
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
        </SafeAreaView>
    )
}