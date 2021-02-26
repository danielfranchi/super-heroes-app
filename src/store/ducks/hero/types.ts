/**
 * Action Types
 */
export enum UserTypes {
  GET_HERO_REQUEST = '@user/GET_HERO_REQUEST',
  GET_HERO_SUCCESS = '@user/GET_HERO_SUCCESS',
  GET_HERO_FAILURE = '@user/GET_HERO_FAILURE'
}

/**
 * Data Types
 */
export interface ItemHero {
  id: number
  name: string
  image: Img
}

export interface Img{
  url: string
}

export interface Hero{
  dataHero: ItemHero[]
  loading: boolean
  error: boolean
}

export interface ReducerHero {
  user: Hero
}