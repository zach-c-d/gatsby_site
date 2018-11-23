import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SmallContentCard from '../components/SmallContentCard.js'
import { background_Green } from '../utilities/colors.js'


const Projects = ({data}) => {
  return(
    <div>
    <Background>
    </Background>
      <Layout>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}> Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </Layout>
    </div>
  );
}


const Background = styled.div`
  position: fixed;
  z-index: -1;
  top:0;
  left: 0;  
  width:100vw;
  height: 100vh;
  background: ${background_Green};
`
export const pageQuery = graphql`
  query projectIndexQuery{
    allMarkdownRemark{
      edges{
        node{
          id
          frontmatter{
                path
                title
                date
                author
              }
            }
          }
        }
      }
    
`
    
    
export default Projects