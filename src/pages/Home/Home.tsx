import React from 'react'

import { useSelector } from 'react-redux'
import {ReducerHero, ItemHero} from '../../store/ducks/hero/types'

import Form from '../../components/Form/Form'

const Home = () => {

  const hero = useSelector((state: ReducerHero) => state.user.dataHero)

  return (
    <div> 
      <Form />

      {hero !== undefined && hero.map((item:ItemHero) => (
        <div key={item.id}>
        <p>{item.name}</p>
        <img src={item.image.url} alt=""/>
        </div>
      ))}
      
    </div>  
  )
}

export default Home