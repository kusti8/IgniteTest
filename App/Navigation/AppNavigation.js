import { StackNavigator } from 'react-navigation'
import DownloadScreen from '../Containers/DownloadScreen'
import VideoPlayerScreen from '../Containers/VideoPlayerScreen'
import MainListScreen from '../Containers/MainListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  DownloadScreen: { screen: DownloadScreen },
  VideoPlayerScreen: { screen: VideoPlayerScreen },
  MainListScreen: { screen: MainListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  initialRouteName: 'MainListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
