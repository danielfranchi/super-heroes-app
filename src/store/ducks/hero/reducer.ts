import { Reducer } from "redux"
import { UserTypes } from "./types"

import {Hero} from './types'

const INITIAL_STATE: Hero = {
  dataHero: [],
  loading: false,
  error: false
}

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {

    case UserTypes.GET_HERO_REQUEST:
      return { ...state, loading: true }

    case UserTypes.GET_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        dataHero: action.payload.data.results
      }
      
    case UserTypes.GET_HERO_FAILURE:
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

export default reducer
