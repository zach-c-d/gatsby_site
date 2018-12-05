import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { background_Green } from '../utilities/colors.js'


// {/* <img alt={post.node.frontmatter.imageAlt} src={post.node.frontmatter.image}></img> */}
const Projects = ({data}) => {
  console.log(data);
  return(
    <div>
    <Background>
    </Background>
      <Layout>
        <Header>
          <h1>Projects</h1>
        </Header>
        <FlexBoxWrap>
        {data.allMarkdownRemark.edges.map(post => (
         <Link to={post.node.frontmatter.path}>
          <ContentCard key={post.node.id}>
            <img src={post.node.frontmatter.image}/>
            <h3>{post.node.frontmatter.title}</h3>
            <small>{post.node.frontmatter.date}</small>
          </ContentCard>
         </Link>
        ))}
        </FlexBoxWrap>
      </Layout>
    </div>
  );
}

const Header = styled.div`

`
const FlexBoxWrap = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const ContentCard = styled.div`
  margin: 20px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333;
  box-shadow: rgba(255,255,255,.25) 0 1px 0,
              inset rgba(255,255,255,.25) 0 1px 0,
              inset rgba(0,0,0,.5) 0 0 0,
              inset rgba(0,0,0,.3) 0 -1.25rem 1.25rem,
              inset rgba(255,255,255,.1) 0 1.25rem 1.25rem;
  border: 1px solid #242424;
  border-radius: 10px;
  transition: .2s;
  :hover{
    box-shadow: rgba(0,0,0,.25) 0 3px 0;
  }
  color: white;
  text-decoration: none;
  padding: 20px;
  h3{
    margin-top: 10px;
  }
  img{
    width: 300px;
    border-radius: 10px;
    box-shadow: inset rgba(255,255,255,.25) 0 1px 0,
              inset rgba(0,0,0,.5) 0 0 0,
              inset rgba(0,0,0,.3) 0 -1.25rem 1.25rem,
              inset rgba(255,255,255,.1) 0 1.25rem 1.25rem;
  }
  @media screen and (max-width: 700px){
    padding: 5px;
    img{
      width: 200px;
      border-radius: 5px;
    }
  }
`
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
    allMarkdownRemark(
      filter: {frontmatter: {type: { eq: "project"}}}
    ){
      edges{
        node{
          id
          frontmatter{
                title
                date
                author
                path
                image
                imageAlt
          }
        }
      }
    }
  } 
    
`
    
    
export default Projects