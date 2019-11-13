import React from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles';

export default class NamePrompt extends React.Component {
  render() {
    const { isNameModalVisible, onNameChange, onProceed} = this.props
    return (
      <Modal
        visible={isNameModalVisible}
        transparent
      > 
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={name => onNameChange(name)}
              placeholder='Enter your name'
              autoCorrect={false}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={onProceed}>
                <Text>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

NamePrompt.propTypes = {
  isNameModalVisible: PropTypes.bool.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onProceed: PropTypes.func.isRequired
}

