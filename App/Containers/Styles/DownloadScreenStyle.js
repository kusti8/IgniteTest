import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  modalView: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
})
