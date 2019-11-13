import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

import withContext from '../../Components/Connect'
import ListItem from '../../Components/ListItem'
import styles from './styles'

class EventTracking extends React.Component {
  renderItem = ({ item, move, moveEnd }) => 
  <ListItem 
    item={item} 
    onPress={this.navigateToEventDetail} 
    onLongPress={move}
    onPressOut={moveEnd}/>

  navigateToEventDetail = async (event) => {
    this.props.navigation.navigate('EventDetailScreen', {event})
  }

  emptyListComponent = () => 
  <View style={styles.emptyListContainer}>
    <Text style={styles.emptyListText}>
      You are not tracking any event :(
    </Text>
    <Text style={[ styles.emptyListText, { marginTop: 15}]}>
      We've got some exciting events. Do check them.
    </Text>
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.button}
      onPress={() => this.props.navigation.navigate('Home')}
    >
      <Text style={styles.buttonText}>
        Check Events
      </Text>
    </TouchableOpacity>
  </View>

  render() {
    const { selectedUserTrackedEvents, reorderEvents } = this.props
    return (
      <View style={{flex: 1, backgroundColor: 'rgba(249, 210, 72, 0.5)'}}>
        <DraggableFlatList
          contentContainerStyle={{flex: 1}}
          ListEmptyComponent={this.emptyListComponent}
          data={selectedUserTrackedEvents}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          scrollPercent={5}
          onMoveEnd={({ data }) => reorderEvents(data)}
        />
      </View>
    )
  }
}

const EventTrackingWithContext = withContext(EventTracking)
export default EventTrackingWithContext