/// <reference types="react" />
import * as ReactNative from 'react-native';
import { LinearGradientProps } from 'react-native-linear-gradient';
export declare type StretchyImage = ReactNative.ImageSourcePropType;
export declare type StretchyOnScroll = (position: number, reachedToBottomOfHeader: boolean) => void;
export interface StretchyProps {
    backgroundColor?: string;
    image?: StretchyImage;
    imageHeight?: number;
    imageResizeMode?: ReactNative.ImageResizeMode;
    imageWrapperStyle?: ReactNative.ViewStyle;
    foreground?: React.ReactElement;
    onScroll?: StretchyOnScroll;
    gradient?: Pick<LinearGradientProps, 'colors' | 'start' | 'end' | 'locations' | 'useAngle' | 'angleCenter' | 'angle'>;
    parallaxIntensity?: number;
}
