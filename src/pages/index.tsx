// Moduls
import React, { useEffect, useState } from "react"
// Componets
import Layout from "../components/layout"
import SEO from "../components/seo"
import Note from "../components/note"
import MiniBar from "../components/MiniBar"
import MiniNotes from "../components/MiniNotes"

// Utils
import styled from "styled-components"
import colors from "../utils/colors"

const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: calc(100vh - 12.44rem);
  background-color: ${colors.background};
  padding: 1rem;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

let ArrayNots = [];
let ArrayBar = [];

export interface Props {
  Tittle: string;
  Text: string;
}

const IndexPage = () => {

  const [matchState, setmatchState] = useState<Props>({
    Tittle: "",
    Text: "",
  })

  const [state, setState] = useState({})

  const [colorState, setColorState] = useState<{
    color: string
  }>({
    color: null,
  })
  
  useEffect(() => {
    
    colorState.color !== null && ArrayNots.push(<Note 
                                                  ArrayBar={ArrayBar} 
                                                  matchState={matchState} 
                                                  setmatchState={setmatchState} 
                                                  color={colorState.color} 
                                                />)

    setState({...state});

  }, [ colorState, setColorState ])

  return(
  <Layout colorState={colorState} setColorState={setColorState} >
    <SEO title="Home" />
        <NoteContainer>
         {ArrayNots}
        </NoteContainer>
        <MiniBar arry={ArrayBar} />
    {matchState.Tittle}
    {matchState.Text}
  </Layout>
)}

export default IndexPage
