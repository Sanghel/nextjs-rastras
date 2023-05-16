import React from 'react'
import { Navbar } from '../../components/Navbar'
import Link from 'next/link'

export default function RastraSemipesada () {
  return (
    <main>
      <Navbar />
      <h1 className='pt-36 text-red-700 text-5xl text-center italic font-bold'>Rastra semi pesada de tiro con sistema hidráulico</h1>
      <section className='w-full p-10 flex gap-5 flex-wrap pt-20 flex justify-center'>
        {links.map((link, key) => (
          <Link key={key} href="/rastra/rastra-semipesada-tiro-hidraulico/64d" class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{link.title}</h5>
              {/* <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
          </Link>
        ))}
      </section>
    </main>
  )
}

const links = [
  {
    title: 'RASTRA 64D SEMI PESADA DE TIRO CON SISTEMA HIDRÁULICO'
  },
  {
    title: 'RASTRA 24D SEMI PESADA DE TIRO CON SISTEMA HIDRÁULICO'
  },
  {
    title: 'RASTRA 28D SEMI PESADA DE TIRO CON SISTEMA HIDRÁULICO'
  },
  {
    title: 'RASTRA 32D SEMI PESADA DE TIRO CON SISTEMA HIDRÁULICO'
  },
  {
    title: 'RASTRA 36D SEMI PESADA DE TIRO CON SISTEMA HIDRÁULICO'
  },
  {
    title: 'RASTRA 40D SEMI PESADA DE TIRO CON SISTEMA HIDRÁULICO'
  },
  {
    title: 'RASTRA 44D SEMI PESADA DE TIRO CON SISTEMA HIDRÁULICO'
  },

]