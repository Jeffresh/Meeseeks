import React from 'react'
import { Footer } from '~Components/Footer'
import { Hello } from '~Components/Hello'
import { Navbar } from '~Components/Navbar'

export const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Hello />
      <Footer />
    </>
  )
}
