import React from 'react'
import { SafeAreaView } from 'react-navigation'
import EventsProvider from './src/Context/EventsProvider'
import Root from './Root'
import UserData from './src/data/userData'

export default class App extends React.Component {
  fireLocalData = async () => {
    try {
      const data = await UserData.shared.getTrackedEvents()
      return data
    } catch (error) {
      return {}
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'never' }}>
        <EventsProvider onInit={this.fireLocalData}>
          <Root />
        </EventsProvider>
      </SafeAreaView>
    )
  }
}