import { ReactElement } from "react"
import styles from '../styles/ButtonCta.module.css'
export const ButtonCta = ({ children ,onClick}: { children:string|ReactElement,onClick:()=>void }) => {
    
    return <button className={styles.buttonCta} onClick={onClick}>{children}</button>
}