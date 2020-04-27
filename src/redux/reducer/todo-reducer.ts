import {ADD_TODO, DELETE_TODO, UPDATE_TODO, todoAction} from '../actions/todo-action';
import { act } from 'react-test-renderer';

const inittailState: any = {
  todoList: [{key: '1', text: 'world'}],
};



function todoReducer (state = inittailState, action: any)  {
  
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat({
          key: Math.random(),
          text: action.payload
        })
      };

    case DELETE_TODO:
      return{
        ...state,
        todoList: state.todoList.filter((item:any) =>
          item.key !== action.payload
        )
      };
    case UPDATE_TODO:
      return{
        ...state,
      todoList: state.todoList.map((payload:any)=>{
        console.log("work",action.payload)
          if(payload.key === action.payload.key){
            return{
              ...payload,
              text:action.payload.text
            }
          }
          return payload;
      })
      }
      

    default:
      return state;
  }
}

export default todoReducer;
