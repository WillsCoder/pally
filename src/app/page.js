"use client"
import { Categories } from '@/components/Categories'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Media } from '@/components/Media'
import { MobileApp } from '@/components/MobileApp'
import { MobileProducts } from '@/components/MobileProducts'
import { Products } from '@/components/Products'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <main className='bg-white text-dark'>
      <Header/>
      <Hero/>
      <Categories/>
      <Products/>
      <MobileProducts/>
      <Media/>
      <MobileApp/>
      <Footer/>
    </main>
  )
}
