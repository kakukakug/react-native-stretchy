import React, { useMemo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AnimatedImageBackground } from './animatedImageBackground';
import { stretchyImageStyles as styles } from './styles';
export const StretchyImage = ({ animation, gradient, image, imageResizeMode, imageWrapperStyle, imageHeight, onLayout, parallaxIntensity, }) => {
    const transformStyles = useMemo(() => {
        const parallaxOffset = parallaxIntensity === undefined ? 0 : Math.max(parallaxIntensity, -1);
        return {
            transform: [
                {
                    translateY: animation.interpolate({
                        inputRange: [-imageHeight, 0, imageHeight],
                        outputRange: [
                            imageHeight / 2,
                            0,
                            -imageHeight / (2 + parallaxOffset),
                        ],
                    }),
                },
                {
                    scale: animation.interpolate({
                        inputRange: [-imageHeight, 0, imageHeight],
                        outputRange: [2, 1, 1],
                    }),
                },
            ],
        };
    }, [animation, imageHeight, parallaxIntensity]);
    return (React.createElement(View, { style: [imageWrapperStyle, styles.wrapper, { height: imageHeight }], onLayout: onLayout },
        React.createElement(AnimatedImageBackground, { source: image || {}, resizeMode: imageResizeMode, style: [styles.animatedImageBackground, transformStyles] }, !!gradient && (React.createElement(LinearGradient, { style: { flex: 1 }, colors: gradient.colors, start: gradient.start, end: gradient.end, locations: gradient.locations })))));
};
