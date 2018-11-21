import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SmallContentCard from '../components/SmallContentCard.js'
import { background_Green } from '../utilities/colors.js'

const Projects = () => (
  <Background>
  <Layout>
    <SmallContentCard></SmallContentCard>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  </Background>
)
const Background = styled.div`
  position: static;
  left: 0;  
  width:100vw;
  height: 100vh;
  background: ${background_Green};
`

export default Projects
