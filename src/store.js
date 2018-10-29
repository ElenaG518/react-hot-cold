import {createStore} from 'redux';
import { HotOrColdReducer } from './reducers';
export default createStore(HotOrColdReducer);