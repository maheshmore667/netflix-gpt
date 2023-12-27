import React from 'react'
import GptSearchbar from './GptSearchbar'
import {BG_URL} from "../Utils/constants"
import GptResults from './GptResults'

const Gpt = () => {
  return (
    <div className="w-full h-full fixed overflow-y-scroll" style={{ backgroundImage: `url('${BG_URL}')` }}>
      <GptSearchbar />
      <GptResults />
    </div>
  )
}

export default Gpt
