import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ErrorCheckStyle'
import {FormValidationMessage} from 'react-native-elements'

export default class ErrorCheck extends Component {
  // // Prop type warnings
   static propTypes = {
     visible: PropTypes.bool.isRequired,
  }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    if (this.props.visible) {
      return (
        <FormValidationMessage>An error occured...</FormValidationMessage>
      )
    } else {
      return (null)
    }
  }
}
