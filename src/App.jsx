
import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import LanguageContainer from './components/languages/languages'
import Boxes from './components/wordBox/wordBox'
import Keyboard from './components/keyboard/keyboard'
import {words} from './utils/word'
import Confetti from "react-confetti"

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

function getRandomWord(){
  const randomIndex =  Math.floor(Math.random() * words.length - 1) 
  return words[randomIndex]
}
// console.log(getRandomWord())

const numGuessesLeft = Languages.length - 1
  
  const [guessedLetter, setGuessedLetter] = useState([])
  const [word, setWord] = useState(() => getRandomWord())

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
    const lastGuessedLetter = guessedLetter[guessedLetter.length - 1];

  

  return (
    <>
      <main>
         {gameWon && <Confetti recycle={false} numberOfPieces={1000} />}
          
          <Header word = {word} guessedLetter = {guessedLetter} isGameOver={isGameOver} gameWon={gameWon} gameLost={gameLost} Languages={Languages} wrongGuesseCount={wrongGuesseCount} lastGuessedLetter={lastGuessedLetter} />
          
          <LanguageContainer wrongGuesseCount={wrongGuesseCount} Languages={Languages} />
          
          <Boxes word = {word} setWord={setWord} guessedLetter = {guessedLetter} lastGuessedLetter={lastGuessedLetter} numGuessesLeft ={numGuessesLeft } gameLost={gameLost}  />
          
          <Keyboard guessedLetter = {guessedLetter} word={word} setGuessedLetter={setGuessedLetter} isGameOver={isGameOver} setWord={setWord} getRandomWord={getRandomWord}/>
      </main>
        
    </>
  )
}

 
