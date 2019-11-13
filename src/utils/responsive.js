/**
 * Shubhnik Singh(for beeCash assignment)
 * If we have base designs(generally 375 * 667), we can use this to scale layouts for various screens.
 */
import { PixelRatio, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

// Scales layout width for various screen dimensions
export const scaledLayoutWidth = (dp) => {
  const baseWidth = 375
  const scaledWidth = PixelRatio.roundToNearestPixel(dp * (width/baseWidth))
  return scaledWidth
}

// Scales layout height for various screen dimensions
export const scaledLayoutHeight = (dp) => {
  const baseHeight = 667
  const scaledHeight = PixelRatio.roundToNearestPixel(dp * (height/baseHeight))
  return scaledHeight
}

// Scales font size for various screen densities
export const scaledFontSize = (dp) => {
  const basePixelRatio = 2
  const baseWidth = 375
  const baseHeight = 667
  const scaleFactor = (width/baseWidth)
  return PixelRatio.roundToNearestPixel(dp * scaleFactor)
}