
import React, { useState,Children } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { connect } from 'react-redux';
import {todoAction} from '../redux/actions/todo-action'
import Header from '../components/Header'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
interface TodoList {
    text: string
}

function TodoList({item,RemoveHandle,UpdateHandle}) {

    const [val, setVal] = useState(item.text);


    function handleInput (val: any) {
    setVal(val);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalOpen(true)}>
        
        <ScrollView>
          <Text style={styles.text}>{item.text}</Text>
        </ScrollView>
        
        <TouchableOpacity style={styles.RemoveButton} onPress={() => RemoveHandle(item.key)}>
        <Icon name="trash-alt" size={30} color="#1277c4" style={{justifyContent:'center',alignItems:'center',}}   />
        </TouchableOpacity>
      </TouchableOpacity>
      
      {/* Modal */}
      {/*Update Section*/}
      <Modal visible={modalOpen}>
        <View>
            <Header title="Edit Section"/>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={handleInput} placeholder="New Task" 
              defaultValue={item.text} />

              <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => {
                  const payload={key:item.key,text:val}
                  UpdateHandle(payload);
                  setModalOpen(false);
                }}>
       
                <Icon  name="save" size={35} color="blue" style={{justifyContent:'center',alignItems:'center',}}   />
              </TouchableOpacity>
            </View>

          <TouchableOpacity style={styles.buttonCancel} onPress={() => setModalOpen(false)}>
          <Icon  name="times" size={35} color="red" style={{justifyContent:'center',alignItems:'center',}}   />
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}


   

export default TodoList;



const styles = StyleSheet.create({
    container: {
        marginTop: 15,
      },
      button: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
      },
      RemoveButton: {
        paddingHorizontal: 15,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textRemove: {
        fontSize: 20,
        color: 'red',
      },
      text: {
        width: 230,
        fontSize: 18,
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        padding: 10
      },
      input: {
        
        flex: 1,
        fontSize: 20,
        height: 50,
        borderBottomWidth: 2,
      },
      updateBtn: {
        width: 100,
       
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2
      },
      addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: 'bold',
      },
      buttonClose: {
        marginTop: 30,
        fontSize: 30,
        width: 120,
        height: 45,
        marginHorizontal: 25,
        color: 'white',
        backgroundColor: 'red',
        borderRadius: 35,
        textAlign: 'center',
        paddingTop:5,
        
      },
      buttonCancel: {
        alignItems: 'center',
        justifyContent:'center'
       
      },
})