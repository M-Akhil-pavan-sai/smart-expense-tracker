import React from 'react'
import styled from 'styled-components'

export const Orb = () => {
    const OrbStyled  = styled.div`
    width:70vh;
    height:70vh;
    position:absolute;
    border-radius:50%;
    margin-left:-37vh;
    margin-top:-37vh;
    background:white;
    filter:blur(300px)
    `
  return (
    <OrbStyled></OrbStyled>
  )
}
