
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {todoAction} from '../redux/actions/todo-action';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

interface InputTodo{}

function InputTodo({Addhandle}) {

  const [text, setText] = useState('');

  function handleInput  (val:any)  {
    setText(val)
  }
  return (
    <View style={styles.Container}>
        
        <TextInput style={styles.textInput} onChangeText={handleInput} placeholder="New task" autoFocus={false}/>

      <TouchableOpacity style={styles.AddButton} onPress={() => Addhandle(text)}>
          <Icon  name="plus" size={35} color="white" style={{justifyContent:'center',alignItems:'center',}}   />
      </TouchableOpacity>
    
    </View>
  );
}


export default InputTodo;

const styles = StyleSheet.create({
  Container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    paddingTop: 12
  },
  textInput:{
   width:"80%",
    fontSize: 20,
    height: 50,
    borderRadius:15,
    backgroundColor:'#ECF4F9',
    borderWidth:2,
    borderColor:'#22a9e3',
    marginLeft:10,
  },
  AddButton:{
 
    width:55,
    height:55,
    borderRadius:55,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:7,
    
    backgroundColor:'#22a9e3',
    shadowColor: "white",
    shadowOffset: {
       width: 10,
       height: 10,
    },
    shadowOpacity: 1.43,
    shadowRadius: 19.51,

    elevation: 25,
  },
  
 
})
