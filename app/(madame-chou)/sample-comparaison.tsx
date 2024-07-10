import { View, ViewStyle } from "react-native";
import Sample from "./sample";
import { AllSamples, dnaAttributionState, DNASample } from "../state";
import { useRecoilValue } from "recoil";

type SampleComparaisonProps = {
    sample1: AllSamples | null,
    sample2: AllSamples | null,
    sample3: AllSamples | null,
    sample4: AllSamples | null,
    sample5: AllSamples | null,
    sample6: AllSamples | null,
    style: ViewStyle
}

export default function SampleComparaison({
    sample1,
    sample2,
    sample3,
    sample4,
    sample5,
    sample6,
    style
}: SampleComparaisonProps) {
    const dna = useRecoilValue(dnaAttributionState);
    function getDna(sample: AllSamples | null): DNASample | undefined {
        if(!sample) return undefined;

        return dna.get(sample);
    }
    return(
        <View style={{...style, ...{flexDirection: 'row', alignItems: 'stretch', flexGrow: 3}}}>
            <Sample id={1} colors={getDna(sample1)} />
            <Sample id={2} colors={getDna(sample2)} />
            <Sample id={3} colors={getDna(sample3)} />
            <Sample id={4} colors={getDna(sample4)} />
            <Sample id={5} colors={getDna(sample5)} />
            <Sample id={6} colors={getDna(sample6)} />
        </View>
    )
}