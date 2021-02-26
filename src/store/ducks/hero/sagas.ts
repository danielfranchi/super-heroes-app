import { call, put } from "redux-saga/effects"

import { loadHeroSuccess, loadHeroFailure } from "./actions"
import UserService from "../../../services/service"
import { ReducerHero } from "../../ducks/hero/types"

export function* getHero(action: any) {
  try {
    const response: ReducerHero[] = yield call(UserService.getHero, action.payload)
    yield put(loadHeroSuccess(response))
  } catch (err) {
  
    console.log(err)
    yield put(loadHeroFailure())
  }
}
