import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

/**
 * Grid item for events listing
 */
export default class GridItem extends React.Component {
  render() {
    const { item } = this.props
    return (
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.thumbnailContainer}>
            <Image source={require('../../assets/placeholder.png')} style={styles.thumbnail}/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.eventText}>{item.eventName}</Text>
          </View>
        </View>
      </View>
    )
  }
}

GridItem.propTypes = {
  item: PropTypes.shape({
    eventName: PropTypes.string.isRequired
  })
}
