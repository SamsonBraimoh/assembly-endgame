
import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import LanguageContainer from './components/languages/languages'
import Boxes from './components/wordBox/wordBox'
import Keyboard from './components/keyboard/keyboard'

export default function App() {

  const Languages = [
    {
        name: "HTML",
        backgroundColor: "#E2680F",
        color: "#F9F4DA",
    },
    {
        name: "CSS",
        backgroundColor: "#328AF1",
        color: "#F9F4DA",
    },
    {
        name: "JavaScript",
        backgroundColor: "#F4EB13",
        color: "#1E1E1E",
    },
    {
        name: "React",
        backgroundColor: "#2ED3E9",
        color: "#1E1E1E",
    },
    {
        name: "TypeScript",
        backgroundColor: "#298EC6",
        color: "#F9F4DA",
    },
    {
        name: "Node.js",
        backgroundColor: "#599137",
        color: "#F9F4DA",
    },
    {
        name: "Python",
        backgroundColor: "#FFD742",
        color: "#1E1E1E",
    },
    {
        name: "Ruby",
        backgroundColor: "#D02B2B",
        color: "#F9F4DA",
    },
    {
        name: "Assembly",
        backgroundColor: "#2D519F",
        color: "#F9F4DA",
    },
]
  
  const [guessedLetter, setGuessedLetter] = useState([])
  const [word, setWord] = useState("react")

  const wrongGuesses = guessedLetter.filter( (letter) =>  { return !word.includes(letter)})
    // console.log(wrongGuesses);
    const wrongGuesseCount = wrongGuesses.length
    // console.log(wrongGuesseCount)

    const gameLost = wrongGuesseCount >= 8;
    // console.log(gameLost)

    const gameWon = word.split("").every(letter => guessedLetter.includes(letter))
    // console.log(gameWon)

    const isGameOver = gameWon || gameLost
    // console.log(isGameOver)

  

  return (
    <>
      <main>
          <Header word = {word} guessedLetter = {guessedLetter} isGameOver={isGameOver} gameWon={gameWon} gameLost={gameLost} Languages={Languages} wrongGuesseCount={wrongGuesseCount} />
          
          <LanguageContainer wrongGuesseCount={wrongGuesseCount} Languages={Languages} />
          
          <Boxes word = {word} setWord={setWord} guessedLetter = {guessedLetter}  />
          
          <Keyboard guessedLetter = {guessedLetter} word={word} setGuessedLetter={setGuessedLetter} isGameOver={isGameOver}/>
      </main>
        
    </>
  )
}

 
