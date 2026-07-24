import { useState } from "react"
import style from "./wordBox.module.css"

export default function Boxes({word, setWord, guessedLetter}){
    
    
    const letters = word.split("").map(letter => <span 
        key={letter} 
        className={style.letterBox}>{guessedLetter.includes(letter) ? letter.toUpperCase() : ""}</span>)
    console.log(letters)
    
    return(
        <>
            <div className={style.letterContainer}>{letters}</div>
        </>
    )
}