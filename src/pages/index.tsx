// Moduls
import React, { useEffect, useState } from "react"
// Componets
import Layout from "../components/layout"
import SEO from "../components/seo"
import Note from "../components/note"
import MiniBar from "../components/MiniBar"
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

let ArrayNots = []

const IndexPage = () => {

  const [state, setState] = useState({})
  const [colorState, setColorState] = useState<{
    color: string
  }>({
    color: null,
  })
  
  useEffect(() => {
    
    colorState.color !== null && ArrayNots.push(<Note color={colorState.color} />)
    setState({...state});

  }, [ colorState, setColorState ])

  return(
  <Layout colorState={colorState} setColorState={setColorState} >
    <SEO title="Home" />
        <NoteContainer>
         {ArrayNots.map(note => note)}
        </NoteContainer>
        <MiniBar>
          <>
           MiniBar Barra
          </>
        </MiniBar>
  </Layout>
)}

export default IndexPage
