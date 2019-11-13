import {Dimensions, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerContainer: {
    height: height/3,
    width: width/1.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgray',
    height: 40,
    borderRadius: 5,
    paddingLeft: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center'
  },
  button: {
    padding: 10,
    backgroundColor: 'rgb(249, 210, 72)',
    borderRadius: 5
  }
})

export default styles