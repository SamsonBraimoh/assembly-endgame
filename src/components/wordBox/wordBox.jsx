import { useState } from "react"
import style from "./wordBox.module.css"
import clsx from "clsx"

export default function Boxes({word, setWord, guessedLetter, lastGuessedLetter, numGuessesLeft, gameLost }){
    
    
    const letters = word.split("").map((letter, index) =>{
        const revealLetter = gameLost || guessedLetter.includes(letter)
        const letterClassName = clsx(
            gameLost && !guessedLetter.includes(letter) && [style.correction])
        return (<span 
        key={index} 
        className={`${style.letterBox} ${letterClassName}`}>{ revealLetter ? letter.toUpperCase() : ""}</span>)})
    // console.log(letters)
    
    return(
        <>
            <div className={style.letterContainer}>{letters}</div>
            
            <section 
                className={style.srOnly} 
                aria-live="polite" 
                role="status"
            >

<p>
                    {word.includes(lastGuessedLetter) ? 
                        `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {numGuessesLeft} attempts left.
                </p>

                <p>Current word: {word.split("").map(letter => 
                guessedLetter.includes(letter) ? letter + "." : "blank.").join(" ")}</p>
            
            </section>
        </>
    )
}