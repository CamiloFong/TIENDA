import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Container = ({children}) => {
  return (
    <div> 
        <Header/> 
        <main>
            {children}
        </main>  
        <Footer/>       
    </div>
  )
}
