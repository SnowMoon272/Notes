import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import colors from "../utils/colors"
import { Props } from '../pages/index'


interface PropsStyle {
    yellow: boolean
    blue: boolean
    green: boolean

}
const MiniNoteStyle = styled('button')<PropsStyle>`

    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    cursor: pointer;
    border: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    font-size: 0.6rem;

    &:hover {
        box-shadow: 0 4px 18px rgba(0,0,0,0.25), 0 4px 4px rgba(0,0,0,0.22);
    }


    ${(props: {yellow : boolean}) => props.yellow && css`
        background-color: ${colors.yellowT};
    `}

    ${(props: {blue : boolean}) => props.blue && css`
        background-color: ${colors.blueT};
    `}

    ${(props: {green : boolean}) => props.green && css`
        background-color: ${colors.greenT};
    `}
`


export default function MiniNotes({ color, matchState } : {
    color: string,
    matchState: Props,
}) {
    const [state, setstate] = useState({})

    const [MiniTextstate, setMiniTextstate] = useState({ 
        Tittle: "",
        Text: "",
    })
    // setstate({...state})
    // setMiniTextstate({...MiniTextstate, Tittle: matchState.Tittle, Text: matchState.Text })

    return (
        <MiniNoteStyle  
            yellow={color === 'Yellow' ? true : null}
            blue={color === 'Blue' ? true : null}
            green={color === 'Green' ? true : null}
        >
           {matchState.Tittle}
        </MiniNoteStyle>
    )
}
