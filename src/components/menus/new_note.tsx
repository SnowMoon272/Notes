import React from 'react'
import styled from 'styled-components'

const NewNote = styled.section`
    font-size: 0.8rem;
    position: relative;

    & .new-button {
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    & .new-button:hover {
        box-shadow: 0 4px 18px rgba(0,0,0,0.25), 0 4px 4px rgba(0,0,0,0.22);
    }

    &:hover .new-button{
        border-radius: 2px 2px 0 0;
    }

    & .colors__container {
        display:flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        border-radius: 8px;
        
        & .colors__last-button {
            border-radius: 0 0 8px 8px;
        }

    }

    & button:hover {
        cursor: pointer;
    }

    & button {
        border: 0;
        padding: 0.2rem 0.6rem;
        
    }
`

export default function Basic({ children } : { children: JSX.Element }) {

    return (
        <NewNote>
            <button className='new-button'>
                {children}
            </button>

            <div className='colors__container'>
                <button>Yellow</button>
                <button>Pink</button>
                <button className='colors__last-button'>Green</button>
            </div>
        </NewNote>
    )
}
