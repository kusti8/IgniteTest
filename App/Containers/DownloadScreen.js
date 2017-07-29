import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, Button } from 'react-native'
import { connect } from 'react-redux'
import {
  Icon,
  FormLabel,
  FormInput
} from 'react-native-elements'
import Spinner from 'react-native-spinkit'
import Immutable from 'seamless-immutable'
import ErrorCheck from '../Components/ErrorCheck'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import DownloadActions from '../Redux/DownloadRedux'

// Styles
import styles from './Styles/DownloadScreenStyle'

class DownloadScreen extends Component {
  render () {
    return (
      <View style={styles.modalView}>
        <FormLabel>Youtube Link</FormLabel>
        <FormInput onChangeText={(text) => {
          this.props.setURL(text)
          }}/>
        <ErrorCheck visible={this.props.error} />
        <Button title="Download" onPress={() => {this.props.download(this.props.url)}}/>
        <Spinner type={"ThreeBounce"} size={40} isVisible={this.props.fetching} color={'black'}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: Immutable.getIn(state, ['download', 'fetching']),
    url: Immutable.getIn(state, ['download', 'url']),
    error: Immutable.getIn(state, ['download', 'error'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    download: (url) => dispatch(DownloadActions.downloadRequest(url)),
    setURL: (url) => {
      dispatch(DownloadActions.setUrl(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadScreen)
