import React from 'react'
import { Navbar } from '../components/Navbar'
import RastraLivianaTiroSH from '../../../public/assets/rastra_liviana_de_tiro_con_sistema_hidraulico.png'
import RastraLivianaTiro from '../../../public/assets/rastra_liviana_de_tiro.png'
import RastraSemipesadaTiroSH from '../../../public/assets/rastra_semipesada_de_tiro_con_sistema_hidraulico.png'
import RastraSemipesadaTiro from '../../../public/assets/rastra_semipesada_de_tiro.png'
import RastraYona from '../../../public/assets/rastra_yona_batibarro.png'
import { CardRastra } from '../components/CardRastra'

export default function Rastra () {
  return (
    <main>
      <Navbar />
      <h1 className='pt-36 text-red-700 text-5xl text-center italic font-bold'>Rastras</h1>
      <section className='w-full p-10 flex gap-5 flex-wrap pt-20 flex justify-center'>
        {cards.map((card, idx) => <CardRastra key={idx} title={card.title} image={card.image} />)}
      </section>
    </main>
  )
}

const cards = [
  {
    title: 'Rastra Semipesada de tiro con sistema hidraulico',
    image: RastraSemipesadaTiroSH
  },
  {
    title: 'Rastra Liviana de tiro con sistema hidraulico',
    image: RastraLivianaTiroSH
  },
  {
    title: 'Rastra Liviana de tiro',
    image: RastraLivianaTiro
  },
  {
    title: 'Rastra Liviana de tiro',
    image: RastraSemipesadaTiro
  },
  {
    title: 'Rastra Yona Batibarro',
    image: RastraYona
  }
]
