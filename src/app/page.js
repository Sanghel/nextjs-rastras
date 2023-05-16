import Image from 'next/image'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'
import portada from '../../public/assets/portada.png'
import abonadora from '../../public/assets/abonadora.png'
import alomadora from '../../public/assets/alomadora.png'
import gandola from '../../public/assets/gandola.png'
import pala from '../../public/assets/pala.png'
import pulpito from '../../public/assets/pulpito.png'
import rastras from '../../public/assets/rastras.png'
import rolo from '../../public/assets/rolo.png'
import rotativa from '../../public/assets/rotativa.png'
import tolva from '../../public/assets/tolva.png'

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <section className='w-full min-h-screen text-white flex items-center justify-center'>
        <Image src={portada} alt='portada' 	style={{objectFit: "contain"}}/>
      </section>
      <h1 className='pt-36 text-red-700 text-5xl text-center italic font-bold'>Implementos</h1>
      <section className='w-full p-10 flex gap-5 flex-wrap '>
        {Cards.map((card, idx) => <Card key={idx} title={card.title} image={card.image} />)}
      </section>
    </main>
  )
}

const Cards = [
  {
    title: 'Rastra',
    image: rastras
  },
  {
    title: 'Abonadora',
    image: abonadora
  },
  {
    title: 'Alomadora',
    image: alomadora
  },
  {
    title: 'Gandola',
    image: gandola
  },
  {
    title: 'Pala',
    image: pala
  },
  {
    title: 'Pulpito',
    image: pulpito
  },
  {
    title: 'Rotativa',
    image: rotativa
  },
  {
    title: 'Rolo',
    image: rolo
  },
  {
    title: 'Tolva',
    image: tolva
  }
]