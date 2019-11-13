import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '50%',
    height: height/3.5
  },
  innerContainer: {
    borderRadius: 5,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(200, 200, 200, 0.5)'
  },
  thumbnailContainer: {
    flex: 3
  },
  thumbnail: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover'
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 5
  },
  eventText: {
    fontSize: 16,
    fontWeight: '500'
  }
})

export default styles