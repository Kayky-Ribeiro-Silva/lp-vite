import styles from './card.module.css'

export const Card = ({imgSrc,alt,title,text}) => {
    return(
        <div className={styles.card}>
            <img src={imgSrc} alt={alt}/>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}