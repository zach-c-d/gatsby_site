import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'gatsby';
import {
        background_Red,
        background_Green,
        background_Yellow
      } from '../utilities/colors.js'

export default class NavigationBar extends Component {
  render(props) {
    return (
      <NavBarContainer>
        <ul>
          <Link to="/">
            <PageButton color="Red"></PageButton>
          </Link>
          <Link to="/projects/">
            <PageButton color="Green"></PageButton>
          </Link>
          <Link to="/blog/">
            <PageButton color="Yellow"></PageButton>
          </Link>
        </ul>
      </NavBarContainer>
    );
  }
}

const button_diameter = 33;
const PageButton = styled.div`
  background-color: ${props => props.color};
  width: ${button_diameter}px;
  height: ${button_diameter}px;
  border-radius: 50%;
`
const NavBarContainer = styled.div`
    background: linear-gradient(90deg, rgba(28, 28, 28, 0) -800.5%, #1E1E1E 30%);
    border-radius: 0px 2px 2px 0px;
    min-width:100px;
    width: 100px;
    height: 100vh;
    position: sticky;
    top:0;
    padding-top: ${button_diameter}px;

    display: flex;
    align-items: center;
    flex-direction: column;
    ul{
        display:flex;
        list-style-type: none;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        height: ${button_diameter * 5}px;
        width: ${button_diameter}px;
        }
    }
`
