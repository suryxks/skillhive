import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { Sidebar, AppBar, ButtonCta } from '@/components'
import { useAuth } from '@/contexts/AuthContext'
import { useEffect, useState } from 'react'
import { useUser } from '@/hooks'
import { getUser } from '@/utils/userUtils'
import { CourseCard } from '@/components/CourseCard'
import { PageWrapper } from '@/components'
import styles from '../styles/Home.module.css'
import * as Dialog from '@radix-ui/react-dialog';
// import sidebarStyles from '@styles/Sidebar.module.css'

const inter = Inter({
  weight: ['300', '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home() {
  const router = useRouter()
  const { auth, setAuth } = useAuth();
  const { user, isAuthenticated, token } = auth;
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      const user = getUser();
      if (user) {
        setAuth({
          user: user,
          isAuthenticated: true,
          token: localStorage.getItem('token')
        })
      }
    } else {
      router.push('/Login')
    }
  }, [])

  if (!isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>SkillHive</title>
        <meta name="description" content="Learning management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className} suppressHydrationWarning={true}>
        <PageWrapper>
          <AppBar isLoggedIn={isAuthenticated} />
          <Sidebar />
          <div className={styles.courseContent}>
            <div className={styles.courseContentHeader}>
              <h1>Your courses</h1>
           <ButtonCta onClick={()=>{}}>Create/join Course</ButtonCta>
            </div>
            <div>
              {user.courses.map((course) => {
                return <CourseCard course={course.course} key={course.id} />
              })}
            </div>
          </div>
        </PageWrapper>
      </main>
    </>
  )
}
