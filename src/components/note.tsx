import React from 'react'
import styled from 'styled-components'

const Postit = styled.section`
    width: 220px;
    height: 220px;
    background-color: yellow;
    margin: 0 1rem 1rem 0;
`


    export default function Note({color}: {color: string}) {
    
        
    return (
        <Postit>
            {color}
        </Postit>
    )
}
