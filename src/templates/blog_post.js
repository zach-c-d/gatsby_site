import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout.js'
import styled from 'styled-components'
import { background_Green } from '../utilities/colors.js'
export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <div>
      <Background>
      </Background>
      <Layout>
        <PostCard>
          <h1>{post.frontmatter.title}</h1>
          <h4>{post.frontmatter.date}</h4>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </PostCard>
      </Layout>
    </div>
  )
}


const ContainerWidth = (window.innerWidth - 100) / 2.3;
const ContainerPadding = 30;
const PostCard = styled.div`
  background: #333;
  box-shadow: rgba(255,255,255,.25) 0 1px 0,
            inset rgba(255,255,255,.25) 0 1px 0,
            inset rgba(0,0,0,.5) 0 0 0,
            inset rgba(0,0,0,.3) 0 -1.25rem 1.25rem,
            inset rgba(255,255,255,.1) 0 1.25rem 1.25rem;
  border: 1px solid #242424;
  border-radius: 10px;
  padding: ${ContainerPadding}px;
  margin: 50px;
  @media screen and (min-width: 1000px){
    width: ${ContainerWidth}px; 
  }
  @media screen and (max-width: 999px){
    width: ${window.innerWidth - 200};
    padding: 5px;
    margin: 0;  
    border-radius: 0;
    img{
                /* window width - nav bar width - container width */
      width: ${window.innerWidth - 200 - (ContainerPadding)}px;
    }
  }
  @media screen and (max-width: 700px){
    font-size: 1em; 
    img{
      width: ${window.innerWidth - 100 - ContainerPadding}px;
    }
  } 
  
  display:flex;
  flex-direction: column;
  font-size: 1.1em;
  line-height: 1.4;
  img{
    width: ${ContainerWidth - (ContainerPadding * 4)}px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  a{
    color: orange;
  }
  p{
    margin: ${ContainerPadding / 2}px 0 ${ContainerPadding / 2}px 0;
  }
  ul{
    li{
      margin-left: ${ContainerPadding * 2}px;
    }
  }
  table{
    border-collapse: collapse;
    td{ padding: 3px;}
  }
  table, th, td{
    border: 1px solid white;
  }
`
const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;  
  width:100vw;
  height: 100vh;
  background: ${background_Green};
`
export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path} }){
      html
      frontmatter{
        path
        title
        author
        date
      }
    }
  }
`
