import { ThemedText } from "@/components/ThemedText";
import { ColorValue, View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type AnimatedSampleProps = {
    containerHeight: number
    color: ColorValue,
    index: number,
    numberOfColors: number
}

export default function AnimatedSample({
    containerHeight,
    color,
    index,
    numberOfColors
}: AnimatedSampleProps) {
    const translationAnimation = useSharedValue((numberOfColors - 1 - index) * (containerHeight/25 + 4));
    translationAnimation.value = withTiming(0, { duration: 5000 })
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translationAnimation.value}],
        height: containerHeight/25, 
        backgroundColor: color, 
        marginVertical: 2
    }))

    return(
        <View>
            <Animated.View style={animatedStyle} />
        </View>
    )
}