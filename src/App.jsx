
import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import LanguageContainer from './components/languages/languages'
import Boxes from './components/wordBox/wordBox'
import Keyboard from './components/keyboard/keyboard'

export default function App() {
  
  const [guessedLetter, setGuessedLetter] = useState([])
  const [word, setWord] = useState("react")

  

  return (
    <>
      <main>
          <Header />
          <LanguageContainer word = {word} guessedLetter = {guessedLetter}   />
          <Boxes word = {word} setWord={setWord} guessedLetter = {guessedLetter}  />
          <Keyboard guessedLetter = {guessedLetter} word={word} setGuessedLetter={setGuessedLetter}/>
      </main>
        
    </>
  )
}

 
