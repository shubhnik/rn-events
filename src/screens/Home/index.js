import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal, Dimensions, TextInput} from 'react-native'

import * as Apis from '../../apis'
import Fetch from '../../Components/Fetch'
import ListItem from '../../Components/ListItem'
import GridItem from '../../Components/GridItem'
import withContext from '../../Components/Connect'
import NamePrompt from '../../Components/NamePrompt'
import styles from './styles'

class Home extends React.Component {
  state={
    displayMode: 'list',
    flatListKey: Math.random(),
    isNameModalVisible: false,
    userName: ''
  }
  componentDidMount() {
    this.setState({isNameModalVisible: true})
  }
  renderItem = ({ item }) => {
    const {displayMode} = this.state
    if(displayMode === 'list') {
      return <ListItem item={item} onPress={this.navigateToEventDetail}/>
    } else {
      return <GridItem item={item}/>
    }
  }
  changeDisplayMode = () => {
    const {displayMode} = this.state
    const newDisplayMode = displayMode === 'list' ? 'grid' : 'list'
    this.setState({ displayMode: newDisplayMode, flatListKey: Math.random() })
  }
  navigateToEventDetail = async (event) => {
    this.props.navigation.navigate('EventDetailScreen', {event})
  }
  setUserDetail = () => {
    const {userName} = this.state
    if(userName === '') {
      alert('Kindly enter a user name.')
      return
    }
    this.props.setUser(userName)
    this.setState({ isNameModalVisible: false })
  }
  setName = (userName) => {
    this.setState({ userName })
  }
  render() {
    const {displayMode, flatListKey, isNameModalVisible} = this.state
    return (
      <View style={styles.container}>
        <Fetch
          api={Apis.getData}
        >
          {({ data }) => 
            <View>
              <NamePrompt
                isNameModalVisible={isNameModalVisible}
                onNameChange={this.setName}
                onProceed={this.setUserDetail}
              />
              <FlatList
                key={flatListKey}
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.id}
                numColumns={displayMode === 'list' ? 1 : 2}
              />
            </View>
          }
        </Fetch>
        <TouchableOpacity
          onPress={this.changeDisplayMode}
          activeOpacity={0.8}
          style={styles.displayModeButton}
        >
          <Text style={{fontWeight: '500'}}>
            {displayMode === 'list' ? 'GRID' : 'LIST'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const HomeWithContext = withContext(Home)
export default HomeWithContext