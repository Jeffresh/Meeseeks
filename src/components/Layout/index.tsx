import React from 'react'
import { RFCC } from '~Types/react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout: RFCC = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)
