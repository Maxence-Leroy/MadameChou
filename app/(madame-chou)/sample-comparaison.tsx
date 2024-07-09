import { ThemedText } from "@/components/ThemedText";
import { ColorValue, View } from "react-native";
import Sample from "./sample";

type SampleComparaisonProps = {
    sample1: ColorValue[] | null,
    sample2: ColorValue[] | null,
    sample3: ColorValue[] | null,
    sample4: ColorValue[] | null,
    sample5: ColorValue[] | null,
    sample6: ColorValue[] | null,
}

export default function SampleComparaison({
    sample1,
    sample2,
    sample3,
    sample4,
    sample5,
    sample6
}: SampleComparaisonProps) {
    return(
        <View style={{flexDirection: 'row', alignItems: 'stretch', flexGrow: 1}}>
            <Sample id={1} colors={sample1} />
            <Sample id={2} colors={sample2} />
            <Sample id={3} colors={sample3} />
            <Sample id={4} colors={sample4} />
            <Sample id={5} colors={sample5} />
            <Sample id={6} colors={sample6} />
        </View>
    )
}