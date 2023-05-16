import { Card } from './components/Card'
import { Navbar } from './components/Navbar'
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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <section className='min-h-screen text-white flex items-center justify-center'>
        <h1>HERO</h1>
      </section>
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