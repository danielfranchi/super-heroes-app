import user from "./hero/reducer"
import { combineReducers } from "redux"

const createRootReducer = () => combineReducers({
  user
})

export default createRootReducer
