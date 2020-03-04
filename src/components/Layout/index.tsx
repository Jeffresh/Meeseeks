import React from 'react'
import styled from 'styled-components'
import { RFCC } from '~Types/react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const SBody = styled.body`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const Layout: RFCC = ({ children }) => (
  <SBody>
    <Navbar />
    {children}
    <Footer />
  </SBody>
)
