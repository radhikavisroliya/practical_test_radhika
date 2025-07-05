import React from "react";
import { Text } from "react-native";
import { ms } from "react-native-size-matters";

export default function RnFont({
    children,
    onPress,
    numberOfLines = 0,
    color = 'black',
    size = ms(14),
    type = 'Regular',
    textAlign = 'left',
    style,
    props,
    fontWeight,
    onLayout
}) {
    return (
        <Text
            numberOfLines={numberOfLines}
            onPress={onPress}
            onLayout={onLayout}
            style={{
                fontWeight: fontWeight,
                color,
                fontSize: size,
                fontFamily: `Roboto-${type}`,
                textAlign: textAlign,
                ...style,
            }}
            {...props}>
            {children}
        </Text>
    )
}