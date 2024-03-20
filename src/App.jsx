import { useState } from 'react'
import './App.css'
import {ColorSelector} from '@/components/ColorSelector'
import {Palette} from '@/components/Palette'
import {getColorInfo} from '@/services/colors'
function App() {

  const[mainColor,setMainColor] =useState("#C0E294")
  return (
    <main>
      <h1>THE COOL PALETTE.</h1>
      <ColorSelector mainColor={mainColor} setMainColor={setMainColor}/>
      <Palette/>
    </main> 
  )
}

export default App
