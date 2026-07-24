
import style from "./languages.module.css"

export default function LanguageContainer( {guessedLetter, word } ){

    const wrongGuesses = guessedLetter.filter( (letter) =>  { return !word.includes(letter)})
    console.log(wrongGuesses);
    const wrongGuesseCount = wrongGuesses.length
    console.log(wrongGuesseCount)

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
    const languageElements = Languages.map(lang => <span 
        key={lang.name} 
        className={style.lang} 
        style={{backgroundColor: lang.backgroundColor, color: lang.color}}>{lang.name}</span>)
    return(
        <>
            <section className={style.languagesWrapper}>
                {languageElements}
            </section>
        </>
    )
}