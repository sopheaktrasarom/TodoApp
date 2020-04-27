export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO'


export const todoAction = {
  AddTodo:(text: any) => {
    return {
      type: ADD_TODO,
      payload: text,
    };
  },

  DeleteTodo: (key: any) => {
    return {type: DELETE_TODO,
      payload: key
    };
  },

  UpdateTodo: (payload:{key:string,text:string}) => {
    return {
      type: UPDATE_TODO,
      payload
      
      
    };
  },
  
};




