import { ColorValue, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { NUMBER_OF_ELEMENTS } from "../state";

type AnimatedSampleProps = {
    containerHeight: number
    color: ColorValue,
    index: number
}

export default function AnimatedSample({
    containerHeight,
    color,
    index
}: AnimatedSampleProps) {
    const sampleHeight = containerHeight / 25;
    const spaceBetweenSamples = (containerHeight - NUMBER_OF_ELEMENTS * sampleHeight) / (NUMBER_OF_ELEMENTS - 1);
    const translationAnimation = useSharedValue(
        Math.max(0, (NUMBER_OF_ELEMENTS - 2 - index) * (sampleHeight + spaceBetweenSamples))
    );
    translationAnimation.value = withTiming(0, { duration: 5000 })
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translationAnimation.value}],
        height: sampleHeight, 
        backgroundColor: color, 
        marginVertical: 2
    }))

    return(
        <View>
            <Animated.View style={animatedStyle} />
        </View>
    )
}