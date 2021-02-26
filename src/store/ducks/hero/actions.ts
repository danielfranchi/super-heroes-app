import { action } from "typesafe-actions"
import { UserTypes, ReducerHero } from "./types"

export const getHeroRequest = (user: any) => action(UserTypes.GET_HERO_REQUEST, user)

export const loadHeroSuccess = (data: ReducerHero[]) => action(UserTypes.GET_HERO_SUCCESS, data)

export const loadHeroFailure = () => action(UserTypes.GET_HERO_FAILURE)
