import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Menu = () => (
    <MenuContainer>
      <Link to="/">Home</Link>
      <Link to="/page-2/">Otha Page</Link>
      <Link to="/about/">About</Link>
      <Link to="/blog/">Blog</Link>
    </MenuContainer>
);
export default Menu;

const MenuContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  a{
    width:100%;
    height:50px;
    color: white;
    background: grey;

    display:flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    :visited{
      color:white;
    }
    :hover{
      color:black;
      background: white;
    }
  }
`
