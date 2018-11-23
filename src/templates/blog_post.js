import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout.js'
import styled from 'styled-components'

export default function Template({data}){
  const post = data.markdownRemark;

  return(
    <Background>
    <Layout>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
    </Layout>
    </Background>
  )
}
const Background = styled.div`
  position: static;
  left: 0;  
  width:100vw;
  height: 100vh;
  background: black;
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
