import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import ContentCard from '../components/contentCard.js'
import { background_Red } from '../utilities/colors.js'
const IndexPage = () => (
  <Background>
  <Layout>
    <ContentCard>
      <Hello>
        <div style={{ minWidth:'200px', 
                      maxWidth: '300px', 
                      marginBottom: '1.45rem' }}>
          <Image />
        </div> 
        <div class="text">
          <h1>Hello! I'm Zach's Website</h1>
          <p>I'm an <span class="orange">Industrial Designer</span> who also <span class="green">codes sometimes</span>.</p>
          <p>My favorite design principle: "Fall in love with the problem. Don't fall in love with your solution. Solutions are just experiments"</p>
          <Link to="/page-2/">Go to page 2</Link>
          <Link to="/about/">Also,checkout the terrible about page</Link>
        </div>
      </Hello>
    </ContentCard>
  </Layout>
  </Background>
)

const Hello = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  width:100%;
  height:100%;
  padding: 10%;

  .text{
    display:flex;
    flex-direction: column;
    margin-left: 30px;
    width: 500px;
    .orange{
        color: orange;
    }
    .green{
      color: green;
    }
    a{
      color: aliceblue;
      text-decoration: none;
    }
  }
`
const Background = styled.div`
  position: fixed;
  top:0;
  left: 0;  
  width:100vw;
  height: 100vh;
  background: ${background_Red};
`

export default IndexPage
