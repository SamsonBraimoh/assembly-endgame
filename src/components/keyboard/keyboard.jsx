import { use, useState } from "react"
import style from "./keyboard.module.css"



export default function Keyboard( {guessedLetter, setGuessedLetter} ){

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    

    const keyboardElements = alphabet.split("").map(key => <button 
    key={key} 
    onClick={() => addGuessedLetter(key)}
    className={style.key}>{key.toUpperCase()}</button>)
    
    // const buttonClicked = (letter) => {
    //     console.log(letter)
    // }
    

    
    console.log(guessedLetter)
    
    const addGuessedLetter = (letters)=>{
         setGuessedLetter(prevletters => prevletters.includes(letters) ? prevletters : [...prevletters, letters]) 
    }

    return(
        <>
            <section className={style.keyContainer}>
                {keyboardElements}
            </section>
        </>
    )
}