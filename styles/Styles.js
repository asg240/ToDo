import { StyleSheet} from 'react-native';

export default  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    backgroundCover: {
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      padding: 18,
      opacity:.75
    },
    lightText:{
        color:'white'
    },
    header:{
        fontSize: 20
    },
    textInput:{
        alignSelf: 'stretch',
        padding: 8,
        borderBottomWidth: 2,
        marginVertical:8,
    },
    lightTextInput:{
        borderBottomColor:'white'
    }
  });