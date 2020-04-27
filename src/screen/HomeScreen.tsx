
import React from 'react';
import { View, Text, FlatList, ImageBackground,StyleSheet } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';
import {todoAction} from '../redux/actions/todo-action'
import InputTodo from '../components/InputTodo'
import TodoList from '../components/TodoList'


interface Home {
    text: String;
    index: number;
}

function HomeScreen() {
const todos= useSelector (state=>state.todoReducer.todoList)
const dispatch =useDispatch()
const addTodo=(payload:any)    =>   dispatch(todoAction.AddTodo(payload))
const deleteTodo=(key:any)     =>   dispatch(todoAction.DeleteTodo(key))
const updateTodo=(payload:any) =>   dispatch(todoAction.UpdateTodo(payload))

    return (
        <View >
            <View >
                <View style={styles.TextContainer}>
                    <View style={styles.divider}/>
                        <Text style={{fontSize: 35, fontWeight: 'bold',color:'black'}}>My Tasks</Text>
                    <View style={styles.divider}/>
            </View>
       
        </View>
      
      <InputTodo Addhandle={addTodo}/>
            <View style={{justifyContent: 'center',alignItems:'center'}}>
                <FlatList
                    data={todos}
                    renderItem={({item}) => <TodoList item={item} RemoveHandle={deleteTodo} UpdateHandle={updateTodo}/>}/>
                                                                                                     
            </View>
      </View>
   
  );
}


export default HomeScreen;

const styles=StyleSheet.create({
   
    TextContainer:{
        
        flexDirection:'row',
        justifyContent:'center',
        
        padding:10,
    },
    divider:{
        backgroundColor: '#22a9e3',
        height:5,
        width:15,
        flex:1,
        alignSelf:'center',
        marginLeft:10,
        marginRight:10,
    }
});