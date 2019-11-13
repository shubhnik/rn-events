import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  eventImage: {
    height: 300,
    width,
    resizeMode: 'cover'
  },
  eventName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600'
  },
  eventPlace: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500'
  },
  eventEntry: {
    fontSize: 15,
    fontWeight: '600'
  },
  entryContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10
  },
  button: {
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(249, 210, 72)'
  }
})

export default styles