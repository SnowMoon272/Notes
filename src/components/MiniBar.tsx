import React from 'react'
import styled from 'styled-components'
import colors from "../utils/colors"
// import MiniNotes from "../components/MiniNotes"


const MiniBarStyle = styled.section`
  background-color: ${colors.miniBar};
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: scroll;

`

export default function MiniBar( {arry}: any ) {
    {console.log({arry})}

    return (
        <MiniBarStyle>
            {arry}
        </MiniBarStyle>
    )
}
