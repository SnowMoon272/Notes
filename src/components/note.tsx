import React from 'react'
import styled, { css } from 'styled-components'
import colors from '../utils/colors'

interface Props {
    yellow: boolean
    blue: boolean
    green: boolean

}

const Postit = styled('section')<Props> `
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
            max-width: 74%;

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

        & div {
            padding: 0.1rem;
            display: flex;
            
            & button {
                height: 16px;
                width: 16px;
                margin-right: 2px;
                height: 25px;
                border-radius: 50%;
                border: none;
            }

            & .ButtonMC1 {
                background-color: ${colors.greenBTN};
                
            }
            & .ButtonMC2 {
                background-color: ${colors.yellowBTN};

            }
            & .ButtonMC3 {
                background-color: ${colors.redBTN};

            }
            &:hover button {
                cursor: pointer;

            }
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



export default function Note({color}: {
    color: string

}) {

    return (
        <Postit 
            yellow={color === 'Yellow' ? true : null}
            blue={color === 'Blue' ? true : null}
            green={color === 'Green' ? true : null}
        >
            <div className="Title">
                <input type="text" placeholder="Tittle"/>
                <div>
                    <button className="ButtonMC1"></button>
                    <button className="ButtonMC2"></button>
                    <button className="ButtonMC3"></button>
                </div>
            </div>
            <div className="Content">
                <textarea
                    placeholder="Text"
                />
            </div>
        </Postit>
    )
}
