import Head          from 'next/head'
import Verdana       from 'next/font/local'
import { ReactNode } from 'react'

const verdana = Verdana({
  src: '../../../../src/assets/font/Verdana.ttf', variable: '--font-verdana',
})

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="../../../../public/favicon-32x32.png"/>
        <title>
          Realty Zone
        </title>
      </Head>
      <main
        className={`${verdana.variable} font-main bg-neutral-l4 text-center `}
      >
        {children}
      </main>
    </>
  )
}
