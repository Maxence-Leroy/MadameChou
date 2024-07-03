import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import { Button, ColorValue, View } from "react-native";

type SampleProps = {
    id: number,
    colors: ColorValue[] | null
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

    useEffect(() => {
        if(!colors) {
            setShowSamples(false)
        }
    }, [colors])

    if(colors) {
        for(let i = 0; i < colors.length; i++){
            const color = colors[i];
            samples.push(
                <View style={{flex: 1, backgroundColor: color, marginVertical: 2}} />
            )
        }
    }

    return(
        <View style={{flexDirection: 'column', justifyContent: 'space-between', flex:1}}>
            <View style={{borderColor: '#54a8d6', borderWidth: 2,  flexGrow: 1, padding: 5}}>
                { showSamples && 
                    (samples)
                }
            </View>
            <ThemedText style={{alignSelf: 'center'}}>{id}</ThemedText>
            <View style={{marginHorizontal: 5}}><Button title='On / Off' onPress={() => { if(colors) setShowSamples(!showSamples)}}/></View>
        </View>
    )
}