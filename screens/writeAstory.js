import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import db from '../config';
import firebase from 'firebase';


export default class writeAstory extends React.Component {

    constructor() {
        super()
        this.state = {
            author: '',
            title: '',
            story: '',
        }

    }

    submitStory = () => {
        db.collection('stories').add({
            'title': this.state.title,
            'author': this.state.author,
            'date': firebase.firestore.Timestamp.now().toDate(),
            'story': this.state.story,
        })
        this.setState({
            title: '',
            author: '',
            story: ''
        })
        var tsa = "Story Submitted"
      ToastAndroid.show(tsa,ToastAndroid.SHORT)
    }
    render(){
        return(
            <View>
                <KeyboardAvoidingView style = {styles.container}>
                <TextInput style = {styles.inputBox}
                placeholder = "author name"
               
                />

<TextInput style = {styles.inputBox}
                placeholder = "story name"
               
                />

<TextInput style = {styles.inputBox}
                placeholder = "write the story here"
                multiline = {true}
                
                />

<TouchableOpacity style = {styles.submitButton} onPress = {this.submitStory}>
         <Text style = {styles.submitButtonText}> submit the story </Text>       
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>

           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 15,
        textAlign: 'center',
        alignSelf: 'center',

      },

      submitButton:{
        backgroundColor: '#FBC02D',
        height: 50, 
        width: 100,
      },

      submitButtonText:{
        padding: 10, 
        textAlign: 'center',
        fontSize: 20, 
        fontWeight: 'bold',
        color: 'white',
      },

      submitted:{
          fontSize: 50,
          textAlign: 'center',
          fontWeight: 'bold',
      },
})