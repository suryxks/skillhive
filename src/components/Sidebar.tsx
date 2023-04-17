import styles from '../styles/Sidebar.module.css'
export const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li className={styles.tab}>Home</li>
                <li className={styles.tab}>Courses</li>
                <li></li>
            </ul>
        </nav>)
}