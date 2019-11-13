import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView} from 'react-native'

import withContext from '../../Components/Connect'
import styles from './styles'

class Event extends React.Component {
  state={
    isTracked: false
  }
  
  componentDidMount() {
    const event = this.props.navigation.getParam('event')
    const trackedEvents = this.props.selectedUserTrackedEvents
    const isTracked = trackedEvents.filter(te => te.id === event.id).length > 0
    this.setState({ isTracked })
  }

  static getDerivedStateFromProps(props, state) {
    const event = props.navigation.getParam('event')
    const trackedEvents = props.selectedUserTrackedEvents
    const isTracked = trackedEvents.filter(te => te.id === event.id).length > 0
    return {...state, isTracked}
  }

  eventTracker = () => {
    const { isTracked } = this.state
    const event = this.props.navigation.getParam('event')
    if(isTracked) {
      this.setState({ isTracked: false })
      this.props.removeEvent(event.id)
    } else {
      this.setState({ isTracked: true })
      this.props.addEvent(event)
    }
  }

  render() {
    const event = this.props.navigation.getParam('event')
    const { isTracked } = this.state
    return (
      <View style={{flex: 1}}>
        <View style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{paddingLeft: 10, paddingBottom: 10}}>
            <Image source={require('../../assets/placeholder.png')} style={styles.eventImage}/>
            <Text style={styles.eventName}>{event.eventName}</Text>
            <Text style={styles.eventPlace}>Venue: {event.venue}</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.entryContainer}><Text style={styles.eventEntry}>{event.entry}</Text></View>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={this.eventTracker} style={styles.button}>
          <Text>{ isTracked ? 'Untrack' : 'Track' }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const EventWithContext = withContext(Event)
export default EventWithContext

