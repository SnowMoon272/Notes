import React from 'react'
import styled from 'styled-components'
import colors from "../utils/colors"



const MiniBarStyle = styled.section`
  background-color: ${colors.purpleBar};
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function MiniBar( {children} 
    : { 
    children: JSX.Element,
}) {
    return (
        <MiniBarStyle>
            {children} 
        </MiniBarStyle>
    )
}
