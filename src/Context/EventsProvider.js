import React from 'react'

import AppContext from './AppContext'
import UserData from '../data/userData'

export default class EventsProvider extends React.Component {
  state={
    allTrackedEvents: {},
    selectedUserTrackedEvents: [],
    user: '',
    contextInitialised: false
  }
  async componentDidMount() {
    const data = await this.props.onInit()
    this.initAllSavedEvents(data)
  }
  initAllSavedEvents = (data) => {
    this.setState({ allTrackedEvents: data, contextInitialised: true })
  }
  addEvent = (event) => {
    const {allTrackedEvents, selectedUserTrackedEvents, user} = this.state
    const updatedEvents = [...selectedUserTrackedEvents, event]
    const updatedAllEvents = {...allTrackedEvents, [user]: updatedEvents}
    this.setState({ allTrackedEvents: updatedAllEvents, selectedUserTrackedEvents: updatedEvents })
    UserData.shared.setTrackedEvents(updatedAllEvents)
  }
  removeEvent = (id) => {
    const {allTrackedEvents, selectedUserTrackedEvents, user} = this.state
    const updatedEvents = selectedUserTrackedEvents.filter(event => event.id !== id)
    const updatedAllEvents = {...allTrackedEvents, [user]: updatedEvents}
    this.setState({ allTrackedEvents: updatedAllEvents, selectedUserTrackedEvents: updatedEvents })
    UserData.shared.setTrackedEvents(updatedAllEvents)
  }
  reorderEvents = (data) => {
    const {allTrackedEvents, user} = this.state
    const updatedAllEvents = {...allTrackedEvents, [user]: data}
    this.setState({ selectedUserTrackedEvents: data })
    UserData.shared.setTrackedEvents(updatedAllEvents)
  }
  setUser = (user) => {
    const { allTrackedEvents } = this.state
    const selectedUserTrackedEvents = allTrackedEvents[user] || []
    this.setState({ user, selectedUserTrackedEvents })
  }
  render() {
    const { contextInitialised } = this.state
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          addEvent: this.addEvent,
          allTrackedEvents: this.state.allTrackedEvents,
          selectedUserTrackedEvents: this.state.selectedUserTrackedEvents,
          removeEvent: this.removeEvent,
          setUser: this.setUser,
          reorderEvents: this.reorderEvents
        }}
      >
        {contextInitialised && this.props.children}
      </AppContext.Provider>
    )
  }
}