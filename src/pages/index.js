import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'
import Layout from '../components/layout'
// import Image from '../components/image'
// import ContentCard from '../components/contentCard.js'
import { background_Red } from '../utilities/colors.js'

import ProfilePicture from '../images/profile-pic.png'

const IndexPage = ({data}) => (
  <Background>
  <Layout>
    <ContentCard>
      <img src={ProfilePicture} />
      <About>
        <h1>Zach Donsky</h1>
        <div>
          <p>
            The approach I take to most things can be summarized in this principle:
          </p>
          <div>
            <p>
              "It is important to fall in love with the problem, not the solution. Solutions are just your experiments." 
            </p>
          </div>
        <a href="mailto:zachary.donsky@gmail.com"> <spsan>Email Me</spsan></a>
        </div>
      </About>
    </ContentCard>
  </Layout>
  </Background>
)

const ContentCardHeight = 600;
const ContentCard = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #333;
  box-shadow: rgba(255,255,255,.25) 0 1px 0,
              inset rgba(255,255,255,.25) 0 1px 0,
              inset rgba(0,0,0,.5) 0 0 0,
              inset rgba(0,0,0,.3) 0 -1.25rem 1.25rem,
              inset rgba(255,255,255,.1) 0 1.25rem 1.25rem;
  border: 1px solid #242424;
  border-radius: 10px;

  display:flex;
  flex-direction: row;
  justify-content: center;  
  align-items: center;
  img{
    height: ${ContentCardHeight / 2}px;
    width: auto;
  }
  @media screen and (max-width: 700px){
    flex-direction: column;
    width: 70vw;
    img{
      width: 60vw;
      height: auto;
    }
  }
`

const About = styled.div`
  overflow: scroll;
  height: 100%;
  margin-left: 20px; 
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div{
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
      margin-top: 20px;
      padding: 10px;
      background-color: rgba(100,100,100,0.8);
      border-top: 2px solid white;
    }
  }
  @media screen and (max-width: 700px){
    h1{
      margin: 0;
      padding: 10px 0 0 0 ;
    }
    width: 68vw;
      div{
        width: 62vw;
      }
  }
  a{
    margin-top: 20px;
    width: 300px;
    height: 50px;
    @media screen and (max-width: 700px){
      width: 60vw;
    }
    background: rgba(100,100,100,0.2);
    border-radius: 10px;
    border: 2px solid rgba(100,100,100,1);
    transition: background 0.5s, 
                border 0.5s, 
                color 0.5s, 
                font-size 0.3s;
    text-decoration: none;
      color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      text-align: center;
    }
    :hover{
      font-size: 1.1em;
      background: rgba(220,220,220,0.8);
      border: 2px solid rgba(0,0,0, 0.9);
      color: black;
    }
  }
  
`

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;  
  width:100vw;
  height: 100vh;
  background: ${background_Red};
`

export default IndexPage
