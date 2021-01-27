import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import colors from '../utils/colors'
import ButtonsFun from '../components/buttons/ButtonsFun'
import { Props } from '../pages/index'
import MiniNotes from "../components/MiniNotes"
// import { any } from 'prop-types'


interface PropsStyle {
    yellow: boolean
    blue: boolean
    green: boolean

}

const Postit = styled('section')<PropsStyle> `
    background-color: #f3f3f3;
    width: 220px;
    height: 220px;
    margin: 0 1rem 1rem 0;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    font-size: 0.8rem;

    
    

    & .Title {
        border-bottom: 1px solid #111010;
        padding: 0.2rem;
        display:flex;
        justify-content:space-between;
        
        & input {
            border: none;
            width: 74%;

            ${(props: {yellow : boolean}) => props.yellow && css`
                background-color: ${colors.yellowT};
            `}

            ${(props: {blue : boolean}) => props.blue && css`
                background-color: ${colors.blueT};
            `}

            ${(props: {green : boolean}) => props.green && css`
                background-color: ${colors.greenT};
            `}
        }

        & .buttonsContainer {
            padding: 0.1rem;
            display: flex; 
        }
    }

    & .Content {
        padding: 0.2rem;
        height: 100%;

        & textarea {
            
            ${(props: {yellow : boolean}) => props.yellow && css`
                background-color: ${colors.yellowT};
            `}

            ${(props: {blue : boolean}) => props.blue && css`
                background-color: ${colors.blueT};
            `}

            ${(props: {green : boolean}) => props.green && css`
                background-color: ${colors.greenT};
            `}

            border: none;
            width: 100%;
            height: 100%;
            text-align: justify;
        }
    }
`



export default function Note({color, matchState, setmatchState, ArrayBar} : {
    color: string,
    setmatchState: React.Dispatch<React.SetStateAction<Props>>,
    matchState: Props,
    ArrayBar: any,
}) {
    
    const [Textstate, setTextstate] = useState({ 
        Tittle: "",
        Text: "",
    })

    const [noteStateAction, setNoteStateAction] = useState({ 
        blockTitle: false,
        blockBody: false,
        minimize: false,
        delete: false
    })

    const handleBlockInput = (noteActions: string) => {
        if (noteActions === "green") setNoteStateAction({...noteStateAction,
                                                            blockTitle: noteStateAction.blockTitle ? false : true ,
                                                            blockBody: noteStateAction.blockBody ? false : true 
                                                        })
                                    
         else if (noteActions === "yellow") {
            setmatchState({...matchState, Tittle: Textstate.Tittle, Text: Textstate.Text})
            ArrayBar.push(<MiniNotes 
                            matchState={matchState} 
                            color={color} 
                        />)
            // Eliminar elemento del array
        } else if (noteActions === "red") {

        }
    }

    return (
        <Postit 
            yellow={color === 'Yellow' ? true : null}
            blue={color === 'Blue' ? true : null}
            green={color === 'Green' ? true : null}
        >
            <div className="Title">
        
                <input 
                    type="text" 
                    readOnly={ noteStateAction.blockTitle && true }
                    placeholder="Tittle" 
                    onChange={(event) => {setTextstate({...Textstate, Tittle: event.target.value})}}
                />
                <div className="buttonsContainer">
                    <ButtonsFun handleFunction={handleBlockInput} color="green" OnOff={noteStateAction.blockTitle} />
                    <ButtonsFun handleFunction={handleBlockInput} color="yellow" />
                    <ButtonsFun handleFunction={handleBlockInput} color="red" />
                </div>
            </div>
            <div className="Content">
                <textarea
                    onChange={(event) => {setTextstate({...Textstate, Text: event.target.value})}}
                    placeholder="Text"
                    readOnly={ noteStateAction.blockBody && true }
                    
                />
            </div>
        </Postit>
    )
}
