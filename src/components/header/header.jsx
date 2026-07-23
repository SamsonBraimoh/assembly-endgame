import style from "./header.module.css"

export default function Header(){
    return(
        <>
            <section className={style.heading}>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
                <div className={style.progressMessage}>Farewell to the dead langs</div>
            </section>
        </>
    )
}