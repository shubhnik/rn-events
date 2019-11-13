import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from './src/screens/Home'
import EventTrackingScreen from './src/screens/EvenTracking'
import EventDetailScreen from './src/screens/Event'

const HomeTab = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Assignment-BC'
    }
  },
  EventDetailScreen: {
    screen: EventDetailScreen,
    navigationOptions: {
      title: 'Event'
    }
  }
})

const EventTrackingTab = createStackNavigator({
  EventTrackingScreen: {
    screen: EventTrackingScreen,
    navigationOptions: {
      title: 'Assignment-BC'
    }
  },
  EventDetailScreen: {
    screen: EventDetailScreen,
    navigationOptions: {
      title: 'Event'
    }
  }
})

const TabNavigator = createMaterialTopTabNavigator({
  Home: HomeTab,
  EventTracking: { 
    screen: EventTrackingTab,
    navigationOptions: {
      title: 'Event tracking'
    }
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      backgroundColor: '#fff',
    },
    indicatorStyle: {
      backgroundColor: 'rgb(249, 210, 72)'
    },
    labelStyle: {
      color: '#000'
    }
  }
});

export default createAppContainer(TabNavigator);
