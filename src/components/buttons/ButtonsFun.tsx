import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../../utils/colors'
// import save from "../../assets/svgs/salvar.svg"


interface Props {
    green: boolean
    yellow: boolean
    red: boolean
}

const ButtonsFunStyle = styled('button')<Props> `
    height: 1.3rem;
    width: 1.3rem;
    margin-left: 0.2rem;
    border-radius: 100px;
    border: 1px solid black;

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

    /* & .Hola {
        display: none ;
        width: 100%;
        height: 100%;

        &:hover {
            display: block ;   
        }
    } */
`



export default function ButtonsFun({ color, handleFunction , OnOff }: {
    color: string,
    handleFunction: Function,
    OnOff?: boolean,
}) {
    

    return (
        <ButtonsFunStyle 
            green={color === 'green' ? true : null}
            yellow={color === 'yellow' ? true : null}
            red={color === 'red' ? true : null}
            onClick={() => handleFunction(color)}
        >
            {/* <div className="Hola">
                Ho
            </div> */}
        </ButtonsFunStyle>
    )
}
