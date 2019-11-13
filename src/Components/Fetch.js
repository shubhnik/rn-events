import React from 'react'
import { View, Modal, ActivityIndicator } from 'react-native'
export default class Fetch extends React.Component {
  state = {
    isLoading: true,
    data: {}
  }
  async componentDidMount() {
    const { api } = this.props
    const data = await api()
    this.setState({ data, isLoading: false })
  }
  render() {
    const { children } = this.props
    const { data, isLoading } = this.state
    return(
      isLoading ?
      <Modal
        visible
        transparent
      >
        <View style={{flex: 1, backgroundColor: '#rgba(90, 90, 90, 0.5)', justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator
            size='large'
            color='rgb(249, 210, 72)'
          />
        </View>
      </Modal> 
      : children({...this.props, data})
    )
  }
}