import React from 'react'
import '../App.css'

export default function Translator() {
  return (
    <div>
      
    <div id='input-container'>
      <h3>Type Here to Translate:</h3>
      <textarea placeholder='Type Here to Translate in Valyrian' id="text-area" cols="100" rows="10"></textarea>
      
      <button id='translate-btn'>Translate</button>
    </div>

    <div id='output-container'>
    <h3>Output Will Be Shown Below:</h3>
    <div id='output-area'></div>
    </div>

    </div>
  )
}
