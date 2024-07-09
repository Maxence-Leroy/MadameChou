import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import { Animated, Button, ColorValue, View } from "react-native";
import AnimatedSample from "./animated-sample";
import { DNASample } from "../state";

type SampleProps = {
    id: number,
    colors: DNASample | undefined
}

export default function Sample({
    id,
    colors
}: SampleProps) {
    if(colors && colors.length != 17) {
        throw new Error("Need 17 elements")
    }
    const samples: React.ReactElement[] = [];
    const [showSamples, setShowSamples] = useState(false)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if(!colors) {
            setShowSamples(false)
        }
    }, [colors])

    if(colors && showSamples) {
        for(let i = 0; i < colors.length; i++){
            const color = colors[i];
            samples.push(
                <AnimatedSample key={i} containerHeight={height} color={color} index={i} numberOfColors={colors.length} />
            )
        }
    }

    return(
        <View style={{flexDirection: 'column', justifyContent: 'space-between', flex:1}}>
            <View style={{borderColor: '#54a8d6', borderWidth: 2,  flexGrow: 1, padding: 5, justifyContent: 'space-between'}} onLayout={(event) => {setHeight(event.nativeEvent.layout.height)}}>
                { showSamples && 
                    (samples)
                }
            </View>
            <ThemedText style={{alignSelf: 'center'}}>{id}</ThemedText>
            <View style={{marginHorizontal: 5}}><Button title='On / Off' onPress={() => { if(colors) setShowSamples(!showSamples)}}/></View>
        </View>
    )
}