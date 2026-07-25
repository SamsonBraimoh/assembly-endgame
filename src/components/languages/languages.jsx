
import style from "./languages.module.css"

export default function LanguageContainer( { wrongGuesseCount, Languages  } ){

    

    
    const languageElements = Languages.map((lang, index) => { 
            const languageLost = index < wrongGuesseCount
            
        return <span 
        key={lang.name} 
        className={`${style.lang} ${languageLost ? style.lost : ""}` } 
        style={{backgroundColor: lang.backgroundColor, color: lang.color}}>
        {lang.name}
            </span>})
    return(
        <>
            <section className={style.languagesWrapper}>
                {languageElements}
            </section>
        </>
    )
}