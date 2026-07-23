
import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import LanguageContainer from './components/languages/languages'
import Boxes from './components/wordBox/wordBox'
import Keyboard from './components/keyboard/keyboard'

export default function App() {
  
  const [guessedLetter, setGuessedLetter] = useState([])

  return (
    <>
      <main>
          <Header />
          <LanguageContainer />
          <Boxes />
          <Keyboard guessedLetter = {guessedLetter} setGuessedLetter={setGuessedLetter}/>
      </main>
        
    </>
  )
}

 
