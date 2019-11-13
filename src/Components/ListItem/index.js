import React from 'react'
import { View, Image, Text, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

/**
 * List item for events listing
 */
export default class ListItem extends React.Component {
  render() {
    const { item, onPress, onLongPress, onPressOut } = this.props
    return (
      <View style={styles.outerContainer}>
        <TouchableOpacity
          onPress={() => onPress(item)}
          activeOpacity={0.8}
          style={styles.innerContainer}
          onLongPress={onLongPress}
          onPressOut={onPressOut}
        >
          <View style={styles.thumbnailContainer}>
            <Image source={require('../../assets/placeholder.png')} style={styles.thumbnail}/>
          </View>
          <View style={styles.infoContainer}>
            <View style={{flexShrink: 1}}>
              <Text style={styles.eventText}>{item.eventName}</Text>
              <Text style={styles.venueText}>{item.venue}</Text>
            </View>
            <View style={{flexGrow: 1}}>
              <View style={styles.entryContainer}><Text>{item.entry}</Text></View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
  })
}
