import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View } from 'react-native'
import { connect } from 'react-redux'
import Immutable from 'seamless-immutable'
import VideoPlayer from 'react-native-video-controls'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/VideoPlayerScreenStyle'

class VideoPlayerScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  render () {
    return (
      <View style={{flex: 1}}>
          <VideoPlayer source={{uri: this.props.uri}}   // Can be a URL or a local file.                                   // Store reference
              resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
              playInBackground={false}                // Audio continues to play when app entering background.
              navigator={this.props.navigation}
              style={styles.backgroundVideo} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    uri: Immutable.getIn(state, ['list', 'uri'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerScreen)
