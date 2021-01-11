import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Note from "../components/note"
import colors from "../utils/colors"
import styled from 'styled-components'


const PostitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

`

let ArrayNots = []

const IndexPage = () => {

  const [state, setState] = useState({})
  const [colorState, setColorState] = useState({
    color: null,
  })
  
  useEffect(() => {
    
    colorState.color !== null && ArrayNots.push(<Note color={colorState.color} />)
    setState({...state});

  }, [ colorState, setColorState ])

  return(
  <Layout colorState={colorState} setColorState={setColorState} >
    <SEO title="Home" />
      
      <div 
        style={{
          height: 'calc(100vh - 6.44rem)',
          backgroundColor: `${colors.background}`,
          padding: '1rem',
          overflow: 'scroll',
        }}
      >
        <PostitContainer>
         {ArrayNots.map(note => note)}
        </PostitContainer>
      </div>
  </Layout>
)}

export default IndexPage
