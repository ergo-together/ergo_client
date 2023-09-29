import { NextPage } from 'next'
import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin-ext'],
})

interface Props {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
    return (
        <main
            className={`flex flex-col items-cente text-black justify-center min-h-screen py-2 ${montserrat.className}`}
        >himanshu
            {children}
        </main>
    )
}

export default Layout