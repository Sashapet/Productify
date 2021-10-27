import { Dimensions } from 'react-native';

//DIMENSIONS
export const { width: dWidth } = Dimensions.get('window');
export const { height: dHeight } = Dimensions.get('window');

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 411;
const guidelineBaseHeight = 823;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
