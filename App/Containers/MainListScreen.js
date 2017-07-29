import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, FlatList, View } from 'react-native'
import Swipeout from 'react-native-swipeout'
import {List, ListItem, Icon} from 'react-native-elements'
import { connect } from 'react-redux'
import Immutable from 'seamless-immutable'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import MainListActions from '../Redux/MainListRedux'

// Styles
import styles from './Styles/MainListScreenStyle'

class MainListScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'YTDownload',
    headerRight: <Icon name="add" style={{paddingRight: 15}} size={35} onPress={() => navigation.navigate('DownloadScreen')} />
  })

  constructor(props) {
    super(props)
  }

  render () {

    const {navigate} = this.props.navigation
    return (
      <View style={styles.defaultView}>
        <List>
          <FlatList
              data={this.props.list}
              extraData={this.props.list}
              renderItem={(item) => {
                item = item.item
                      swipeoutBtns = [
                          {
                              text: 'Delete',
                              backgroundColor: 'red',
                              onPress: () => {
                                  this.props.deleteVideo(item)
                              }
                          }
                      ]
                  return (
                  <Swipeout right={swipeoutBtns}>
                      <ListItem
                          roundAvatar
                          avatar={{uri:item.thumbnail}}
                          title={item.title}
                          key={item.thumbnail}
                          onPress={() => {
                            this.props.watchVideo(item.path)
                            this.props.navigation.navigate('VideoPlayerScreen')
                          }}
                      />
                  </Swipeout>
              )
              }}
              keyExtractor={(item, index) => index}
          />
      </List>
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: Immutable.getIn(state, ['list', 'list']),
    loading: Immutable.getIn(state, ['list', 'loading'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteVideo: (item) => {dispatch(MainListActions.deleteVideo(item))},
    watchVideo: (uri) => {dispatch(MainListActions.watchVideo(uri))},
    updateList: () => {dispatch(MainListActions.updateList())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListScreen)
