import React, { useRef } from 'react'

import { useDispatch } from 'react-redux'
import {getHeroRequest} from '../../store/ducks/hero/actions'


const Form = () => {

  const dispatch = useDispatch();

  const name = useRef<HTMLInputElement>(null)

  const heroSearch = () => {
    dispatch(getHeroRequest(name?.current?.value))
  }
  
  return (
    <div>
      <h1>Super-Heroes</h1>

      <label>Qual seu Super-heróis Favorito ?</label><br/><br/>
      <input type="text" placeholder='digite aqui' ref={name} /><br/>

      <button onClick={heroSearch}>Pesquisar</button>
    </div>
  )
}

export default Form 
