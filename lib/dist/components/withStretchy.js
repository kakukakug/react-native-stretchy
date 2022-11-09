import React from 'react';
import { View } from 'react-native';
import { commonStyles } from './styles';
import { StretchyImage } from './stretchyImage';
import { useStretchy } from '../hooks/useStretchy';
export const WithStretchy = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const { backgroundColor, gradient, image, imageHeight, imageWrapperStyle, imageResizeMode, onScroll, parallaxIntensity, } = props;
        const stretchy = useStretchy({
            image,
            scrollListener: onScroll,
        });
        return (React.createElement(View, { style: [commonStyles.container, { backgroundColor }] },
            React.createElement(StretchyImage, { image: image, imageResizeMode: imageResizeMode, imageWrapperStyle: imageWrapperStyle, gradient: gradient, animation: stretchy.animation, imageHeight: imageHeight || stretchy.heightBasedOnRatio, onLayout: stretchy.onImageWrapperLayout, parallaxIntensity: parallaxIntensity }),
            React.createElement(WrappedComponent, Object.assign({ stretchy: stretchy }, props))));
    };
    return EnhancedComponent;
};
