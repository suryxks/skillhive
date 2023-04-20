import styles from '../styles/Pagewrapper.module.css'

export const PageWrapper = ({children}) => {
    return <div className={styles.pageWrapper}>{children }</div>
}