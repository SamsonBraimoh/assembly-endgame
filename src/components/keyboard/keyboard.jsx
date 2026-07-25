import { use, useState } from "react"
import style from "./keyboard.module.css"
import clsx from "clsx"



export default function Keyboard( {guessedLetter, setGuessedLetter, word, isGameOver} ){

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    

    const keyboardElements = alphabet.split("").map(key => {
        const isGuessed = guessedLetter.includes(key)
        const isCorrect = isGuessed && word.includes(key)
        const isWrong = isGuessed && !word.includes(key)
        const className = clsx({
            [style.correct]: isCorrect,
            [style.wrong]: isWrong
        })
        // console.log(className)

        return (
            <button 
            key={key} 
            onClick={() => addGuessedLetter(key)}
            className={`${style.key} ${className}`}> {key.toUpperCase()}
            </button>
        )
    })

    
    
    // const buttonClicked = (letter) => {
    //     console.log(letter)
    // }
    

    
    // console.log(guessedLetter)
    
    const addGuessedLetter = (letters)=>{
         setGuessedLetter(prevletters => prevletters.includes(letters) ? prevletters : [...prevletters, letters]) 
    }

    return(
        <>
            <section className={style.keyContainer}>
                {keyboardElements}
            </section>
            {isGameOver && <button className={style.newGame}>New Game</button>}
        </>
    )
}