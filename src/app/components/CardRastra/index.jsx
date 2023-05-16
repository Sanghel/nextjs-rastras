import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const CardRastra = (props) => {
  return (
    <div class="w-1/2 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between">
        <Link href="rastra/rastra-semipesada-tiro-hidraulico" className='h-3/5 flex items-center p-5'>
            <Image class="rounded-t-lg" src={props.image} alt="" width={250} height={250} />
        </Link>
        <div class="p-5 h-2/5">
            <Link href="rastra/rastra-semipesada-tiro-hidraulico">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            </Link>
            {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
            <Link href="rastra/rastra-semipesada-tiro-hidraulico" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Ver más
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
  )
}