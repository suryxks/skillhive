import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components'
// import sidebarStyles from '@styles/Sidebar.module.css'

const inter = Inter({
  weight: ['300','400', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>SkillHive</title>
        <meta name="description" content="Learning management System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Sidebar />
      </main>
    </>
  )
}
