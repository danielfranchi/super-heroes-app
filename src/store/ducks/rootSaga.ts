import { all, takeLatest } from "redux-saga/effects"
import { UserTypes } from "./hero/types"
import { getHero } from "./hero/sagas"

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserTypes.GET_HERO_REQUEST, getHero),
  ])
}
