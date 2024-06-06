import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-svg-icon' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type SvgIconProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'SvgIconView';

export const SvgIconView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<SvgIconProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
