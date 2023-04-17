import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { Sidebar ,AppBar} from '@/components'
import { useAuth } from '@/contexts/AuthContext'
import { useEffect } from 'react'
import { useUser } from '@/hooks'
import { getUser } from '@/utils/userUtils'
import { CourseCard } from '@/components/CourseCard'
// import sidebarStyles from '@styles/Sidebar.module.css'

const inter = Inter({
  weight: ['300','400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home() {
  const router = useRouter()
  const { auth,setAuth } = useAuth();
  const { user, isAuthenticated, token } = auth;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      const user = getUser();
      if (user) {
        setAuth({
          user: user,
          isAuthenticated: true,
          token:localStorage.getItem('token')
        })
      }
    } else {
      router.push('/Login')
    }
  }, [])
 
  if (!isAuthenticated) {
    return<div>Loading...</div>
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
        <AppBar isLoggedIn={isAuthenticated} />
        <Sidebar />
        {user.courses.map((course) => {
          return <CourseCard course={course.course} key={course.id} />
        })}
      </main>
    </>
  )
}
