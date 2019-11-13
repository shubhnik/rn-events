import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  innerContainer: {
    padding: 5,
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(200, 200, 200, 0.5)'
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    height: 75,
    width: 75,
    resizeMode: 'contain'
  },
  infoContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingTop: 5
  },
  eventText: {
    fontSize: 16,
    fontWeight: '500'
  },
  venueText: {
    color: 'gray'
  },
  entryContainer: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    flexGrow: 0,
    alignSelf: 'flex-end'
  }
})

export default styles