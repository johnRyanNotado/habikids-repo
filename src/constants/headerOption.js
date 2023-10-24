import { CardStyleInterpolators } from '@react-navigation/stack'

export const MAIN_HEADER_OPT = {
  headerShown: false,
}

const config = {
  animation: 'timing',
  config: {
    duration: 120,
  },
}

export const MAIN_TRANSITION_SPEC = {
  cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
  // transitionSpec: {
  //   open: config,
  //   close: config,
  // },
}
