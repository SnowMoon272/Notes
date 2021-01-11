import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Note from "../components/note"

let ArrayNots = []

const IndexPage = () => {

  const [state, setState] = useState([])
  useEffect(() => {

    
    ArrayNots.push(<Note/>)

  }, [ state, setState ])

  return(
  <Layout state={state} setState={setState} >
    <SEO title="Home" />
    {ArrayNots.map(note => note)}
  </Layout>
)}

export default IndexPage
