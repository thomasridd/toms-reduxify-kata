import { createStore, combineReducers } from 'redux'

import labelReducer from './scenes/Home/services/LabelText/reducer'

const appReducer = combineReducers({
    label: labelReducer
})

export default createStore(appReducer)
