import Link from 'next/link'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import styles from '../styles/AuthForm.module.css'
import { ButtonCta } from './ButtonCta'

export const AuthForm = ({ pageName }: { pageName: string }) => {
    const [userCredentials, setUserCredentials] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const onFirstNameChange = (event) => {
        setUserCredentials(prev => ({ ...prev, firstName: event.target.value }))
    }
    const onLastNameChange = (event) => {
        setUserCredentials(prev => ({ ...prev, lastName: event.target.value }))
    }
    const onEmailChange = (event) => {
        setUserCredentials(prev => ({ ...prev, email: event.target.value }))
    }
    const onPasswordChange = (event) => {
        setUserCredentials(prev => ({ ...prev, password: event.target.value }))
    }
    return (
        <form className={styles.form} onSubmit={(e) => { e.preventDefault() }}>
            <div className={styles.inputs}>
                <label htmlFor='firstname'>Firstname</label>
                <input
                    type="text"
                    id='firstname'
                    onChange={onFirstNameChange}
                    value={userCredentials.firstName}
                />
                <label htmlFor='lastname'>lastname</label>
                <input
                    type="text"
                    id='lastname'
                    value={userCredentials.lastName}
                    onChange={onLastNameChange}
                />
                <label htmlFor='email'>Email</label>
                <input
                    type="email"
                    id='email'
                    value={userCredentials.email}
                    onChange={onEmailChange}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type="password"
                    id='password'
                    value={userCredentials.password}
                    onChange={onPasswordChange}
                />
            </div>
            <ButtonCta onClick={() => { }}>{pageName === 'Login' ? 'Login' : 'Signup'}</ButtonCta>
            <div className={styles.linkWrapper}>
                {pageName === 'Login' ? 'Dont have an account ? ' : 'Already have an account ? '}
                <Link className={styles.link} href={pageName === 'Login' ? '/Signup' : 'Login'}>
                    {pageName === 'Login' ? 'Signup' : 'Login'}
                </Link>
            </div>

        </form>
    )
}