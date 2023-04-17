import { ReactElement } from "react"
import styles from '../styles/IconWrapper.module.css'
export const IconWrapper = ({ children }: { children: ReactElement }) => {
    return <i className={styles.icon} role="img">{ children}</i>
}