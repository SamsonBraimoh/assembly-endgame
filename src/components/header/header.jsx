import clsx from "clsx"
import style from "./header.module.css"
import GetFarewellText from "../../utils/gameStatus"

export default function Header({guessedLetter, word, isGameOver, gameWon, gameLost, Languages, wrongGuesseCount }){

       

       const lastGuessedLetter = guessedLetter[guessedLetter.length - 1];
       const islastGuessedLetterCorrect = lastGuessedLetter && !word.includes(lastGuessedLetter);
       console.log(islastGuessedLetterCorrect)

       const renderGameStatus = ()=> {
        if(!isGameOver && islastGuessedLetterCorrect)
            return (<><p>{GetFarewellText(Languages[wrongGuesseCount - 1].name)} 🫡</p></>)
        if(gameWon)
            return(<> 
                <h2>You win!</h2>
                <p>Weldone! 🎉</p>
            </>)
        if(gameLost)
            return (<> 
                <h2>Game over!</h2>
                <p>You lose! Better start learning Assembly 😭</p>
                </>)
       }


       const gameStatusClass = clsx( {
        [style.won]: gameWon,
       [style.lost]: gameLost,
       [style.missed]: !isGameOver && islastGuessedLetterCorrect
    })

    return(
        <>
            <section className={style.heading}>
                <h1 className={style.h1}>Assembly: Endgame</h1>
                <p className={style.p}>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
                <div  className={`${style.progressMessage} ${gameStatusClass}`}>
                   {renderGameStatus()}
                </div>
            </section>
        </>
    )
}