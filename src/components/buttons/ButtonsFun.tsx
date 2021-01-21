import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../utils/colors'


interface Props {
    green: boolean
    yellow: boolean
    red: boolean
}

const ButtonsFunStyle = styled('section')<Props> `
    height: 16px;
    width: 16px;
    margin-right: 2px;
    height: 25px;
    border-radius: 50%;
    border: none;

    ${(props: {green : boolean}) => props.green && css`
        background-color: ${colors.greenBTN};
    `}

    ${(props: {yellow : boolean}) => props.yellow && css`
        background-color: ${colors.yellowBTN};
    `}

    ${(props: {red : boolean}) => props.red && css`
        background-color: ${colors.redBTN};
    `}

    &:hover {
        cursor: pointer;
    }
`

export default function ButtonsFun({ color }: {
    color: string,
}) {
    
    
    color==="green" ? console.log( "Hola mami soy verde" ) :null ;
    color==="yellow" ? console.log( "Hola mami soy amarillo" ) :null ;
    color==="red" ? console.log( "Hola mami soy rojo" ) :null ;

    return (
        <ButtonsFunStyle 
            green={color === 'green' ? true : null}
            yellow={color === 'yellow' ? true : null}
            red={color === 'red' ? true : null}
        >
            Icon
        </ButtonsFunStyle>
    )
}
