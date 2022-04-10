import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//input the figma width/height to get your screens width/height

export const LAYOUTS = {
  window: {
    width,
    height,
  },
  getWidth: (figma:any) => {
    return (figma * width / 395)
  },
  getHeight: (figma: any) => {
    return (figma * height / 830)
  },

  isSmallDevice: width < 375,
};
