import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/AuthForm.module.css'
import { ButtonCta, ButtonOutlined } from './'
import { useLogin, useSignup } from '@/hooks'
export const AuthForm = ({ pageName }: { pageName: string }) => {
    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const [userCredentials, setUserCredentials] = useState(initialFormState)
    const loginMutation = useLogin();
    const signupMutation = useSignup();
    const testCredentials = {
        firstName: "Surya",
        lastName: "K S",
        email: "surya@gmail.com",
        password: "123004250",
    }
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
                {pageName !== 'Login' ? (
                    <>
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
                    </>) : null
                }
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

            <ButtonCta onClick={() => {
                if (pageName === 'Login') {
                    loginMutation.mutate(userCredentials);
                    setUserCredentials(initialFormState)
                } else {
                    signupMutation.mutate(userCredentials);
                    setUserCredentials(initialFormState)
                }
            }}>{pageName === 'Login' ? 'Login' : 'Signup'}</ButtonCta>
            {pageName === 'Login' ? <ButtonOutlined onClick={() => {
                setUserCredentials(testCredentials)
                loginMutation.mutate(userCredentials)
                setUserCredentials(initialFormState)
            }}>Use test credentials</ButtonOutlined> : null}
            <div className={styles.linkWrapper}>
                {pageName === 'Login' ? 'Dont have an account ? ' : 'Already have an account ? '}
                <Link className={styles.link} href={pageName === 'Login' ? '/Signup' : 'Login'}>
                    {pageName === 'Login' ? 'Signup' : 'Login'}
                </Link>
            </div>

        </form>
    )
}