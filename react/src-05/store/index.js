import { createStore } from 'redux'
import reducer from './reducer'

// const { composeWithDevTools } = require('redux-devtools-extension');
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //引入reducer中的数据,此时store中就有数据了
export default store