import {createStore, combineReducers} from 'redux';
import todoReducer from './reducer/todo-reducer';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist'



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['todoReducer']
}

const rootReducer = combineReducers({
  todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
