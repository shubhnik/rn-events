import { AsyncStorage } from 'react-native'

const TRACKED_EVENTS = 'TRACKED_EVENTS'

export default class UserData {
  allTrackedEvents;
  selectedUserTrackedEvents;
  user = ''

  static shared = new UserData()

  /**
   * gets all tracked events
  */
  getTrackedEvents = async () => {
    try {
      if(this.allTrackedEvents){
        return this.allTrackedEvents
      }
      const data = await AsyncStorage.getItem(TRACKED_EVENTS)
      if(data){
        const events = JSON.parse(data)
        this.allTrackedEvents = events
        return events
      } else {
        this.allTrackedEvents = {}
        return {}
      }
    } catch(error) {
      throw error
    }
  }
  
  /**
   * @param {Array} events 
   */
  setTrackedEvents = async (events) => {
    try {
      let data = events
      if(typeof events !== 'String') {
        data = JSON.stringify(events)
      }
      await AsyncStorage.setItem(TRACKED_EVENTS, data)
    } catch(eror) {
      throw error
    }
  }
}

