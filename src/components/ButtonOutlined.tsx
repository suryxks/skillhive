import { ReactElement } from "react"
import styles from '../styles/ButtonCta.module.css'
export const ButtonOutlined = ({ children ,onClick}: { children:string|ReactElement,onClick:()=>void }) => {
    
    return <button className={styles.buttonOutlined} onClick={onClick}>{children}</button>
}