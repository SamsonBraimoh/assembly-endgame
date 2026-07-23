import { useState } from "react"
import style from "./wordBox.module.css"

export default function Boxes(){
    const [word, setWord] = useState("react")
    
    const letters = word.split("").map(letter => <span key={letter} className={style.letterBox}>{letter.toUpperCase()}</span>)
    console.log(letters)
    
    return(
        <>
            <div className={style.letterContainer}>{letters}</div>
        </>
    )
}