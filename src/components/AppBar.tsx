import { MdPerson } from 'react-icons/md'
import styles from '../styles/AppBar.module.css'
import { ButtonCta } from "./ButtonCta"
import { IconWrapper } from './IconWrapper'
import Link from 'next/link'
import { useRouter } from 'next/router'
export const AppBar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const router=useRouter()
    const navigateTologin = () => {
        router.push('/Login')
    }
    return (
        <nav className={styles.appBar}>
            <Link href='/' className={styles.cta}>SkillHive</Link>
            <div className={styles.actions}>
                <ButtonCta onClick={navigateTologin}>{isLoggedIn?"Logout":"Login" }</ButtonCta>
                <IconWrapper>
                    <Link href='/'>
                        <MdPerson />
                    </Link>
                </IconWrapper>
            </div>
        </nav>)
}