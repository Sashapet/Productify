import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    mode: string;
    // type: string;
    colors: AppColors;
    fonts: AppFonts;
    // fonts: {
    //   size: {
    //     xs: number;
    //     s: number;
    //     m: number;
    //     l: number;
    //     xl: number;
    //     xxl: number;
    //     xxxl: number;
    //     x64: number;
    //   };
    //   weight: {
    //     regular: string;
    //     bold: string;
    //     italic: string;
    //   };
    // };
    // shadows: {
    //   default: string;
    //   light: string;
    //   medium: string;
    //   strong: string;
    // };
    // headers: {
    //   main: number;
    //   inner: number;
    //   paralax: number;
    // };
    // hitSlop?: {
    //   top?: number;
    //   left?: number;
    //   bottom?: number;
    //   right?: number;
    // };
  }
}

export interface AppColors {
  primary: string;
  secondary: string;
  black: string;
  white: string;
  black01: string;
  black02: string;
  black03: string;
  black04: string;
  black05: string;
  black06: string;
  black07: string;
  black08: string;
  black09: string;
}
export interface AppFonts {
  Montserrat: MONTSERRAT;
  Poppins: POPPINS;
  size: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
    xxxl: number;
    x64: number;
  };
}

interface MONTSERRAT {
  MontserratBold: string;
  MontserratExtraBold: string;
  MontserratExtraLight: string;
  MontserratLight: string;
  MontserratMedium: string;
  MontserratRegular: string;
  MontserratSemiBold: string;
  MontserratThin: string;
}

interface POPPINS {
  PoppinsBold: string;
  PoppinsExtraBold: string;
  PoppinsExtraLight: string;
  PoppinsLight: string;
  PoppinsMedium: string;
  PoppinsRegular: string;
  PoppinsSemiBold: string;
  PoppinsThin: string;
}
