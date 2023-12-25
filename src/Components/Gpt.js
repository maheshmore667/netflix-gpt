import React from 'react'
import GptSearchbar from './GptSearchbar'
import {BG_URL} from "../Utils/constants"

const Gpt = () => {
  return (
    <div className="w-full h-full" style={{ backgroundImage: `url('${BG_URL}')` }}>
      <GptSearchbar />
      GPT Component
    </div>
  )
}

export default Gpt
