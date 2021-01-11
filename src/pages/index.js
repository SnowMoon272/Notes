import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Note from "../components/note"

let Array = []

const IndexPage = () => {

  const [state, setState] = useState([])
  useEffect(() => {

    
    Array.push(<Note/>)

  }, [ state, setState ])

  return(
  <Layout state={state} setState={setState} >
    <SEO title="Home" />
    {Array.map(note => note)}
  </Layout>
)}

export default IndexPage
