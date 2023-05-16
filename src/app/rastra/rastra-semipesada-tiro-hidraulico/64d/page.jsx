import React from 'react'
import { Navbar } from '../../../components/Navbar'
import Image from 'next/image'
import rastra2 from '../../../../../public/assets/rastra62_2.png'
import rastra3 from '../../../../../public/assets/rastra62_3.png'
import rastra4 from '../../../../../public/assets/rastra62_4.png'
import rastra5 from '../../../../../public/assets/rastra62_5.png'
import usuario from '../../../../../public/assets/manual_usuario.png'
import ensamblaje from '../../../../../public/assets/manual_ensamblaje.png'
import planos from '../../../../../public/assets/planos.png'
import Link from 'next/link'

export default function Rastra64D () {
  return (
    <main>
      <Navbar />
      <h1 className='pt-36 text-red-700 text-5xl text-center italic font-bold'>Rastra 64D semi pesada de tiro con sistema hidráulico</h1>
      <section className='min-h-screen w-full p-10 flex gap-5 flex-wrap pt-20 flex justify-center items-center'>
        <div class=" grid grid-cols-2 gap-10">
            <div>
                <Image class="h-auto max-w-full rounded-lg" src={rastra2} alt="" width={300} height={300}/>
            </div>
            <div>
                <Image class="h-auto max-w-full rounded-lg" src={rastra3} alt="" width={300} height={300}/>
            </div>
            <div>
                <Image class="h-auto max-w-full rounded-lg" src={rastra4} alt="" width={300} height={300}/>
            </div>
            <div>
                <Image class="h-auto max-w-full rounded-lg" src={rastra5} alt="" width={300} height={300}/>
            </div>
        </div>
        <div className='mt-5 mb-5 w-full flex flex-col justify-center items-center'>
          <h5 className='mb-5 w-3/5 text-2xl text-center font-bold'>La rastra de 64 discos semipesada de tiro con sistema hidráulico consta de seis subconjuntos: </h5>
          <p className='w-4/5 text-xl text-justify'>Un sistema de tiro a través del cual se acopla al tractor; dos graduadores con los cuales se evita que la rastra se incline hacia adelante o hacia atrás; un sistema de transporte conformado por dos pares de ruedas, las cuales se controlan por medio de un sistema hidráulico; un marco, donde van sujetos todos los elementos; un bastidor delantero y un bastidor trasero, dispuestos de manera excéntrica, formando entre ellos un ángulo determinado según la aplicación que se requiera de la rastra; por último, ocho kit de discos conformados por ocho discos cada uno, los cuales son cóncavos y van ensamblados en un eje central mixto rosca y rosca, separados por chumaceras R-52 y separadores de 9 pulgadas para mantener una distancia constante entre cada disco, estando la mitad de estos alojados en el bastidor delantero, trabajando hacia la derecha y la otra mitad en el bastidor trasero haciéndolo a la inversa.</p>
        </div>
      </section>
      <section className='w-full min-h-screen flex flex-col justify-center items-center'>
        <Link href='#' className='h-screen flex flex-col items-center justify-center'>
          <h2 className='mb-5 text-red-700 text-3xl text-center italic font-bold'>Manual de Ensamblaje</h2>
          <Image className='h-4/5' src={ensamblaje} alt='ensamblaje' width={600} height={500} />
        </Link>
        <Link href='#' className='h-screen flex flex-col items-center justify-center'>
          <h2 className='mb-5 text-red-700 text-3xl text-center italic font-bold'>Manual de Usuario</h2>
          <Image className='h-4/5' src={usuario} alt='usuario' width={600} height={500} />
        </Link>
        <Link href='#' className='h-screen flex flex-col items-center justify-center'>
          <h2 className='mb-5 text-red-700 text-3xl text-center italic font-bold'>Planos</h2>
          <Image className='h-4/5' src={planos} alt='ensamblaje' width={1000} height={500} />
        </Link>
      </section>
      <section className='p-10 flex flex-col'>
        <Link href='#' className='text-red-700 underline' >Especificaciones Técnicas</Link>
        <Link href='#' className='text-red-700 underline' >Composición del producto</Link>
        <Link href='#' className='text-red-700 underline' >Diseño en SolidWork</Link>
      </section>
    </main>
  )
}