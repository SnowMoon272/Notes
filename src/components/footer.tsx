import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'

const FooterStyle = styled.footer`
    height: 3rem;
    width: 100%;
    background-color: ${colors.yellow};
`

export default function footer() {
    return (
        <FooterStyle>
            Hola mundo
        </FooterStyle>
    )
}
