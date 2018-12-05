import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'

// class ContentCard extends Component {
//     render(props) {
//         return (
//             <ContentCardContainer>
//             </ContentCardContainer>
//         );
//     }
// }

export const ContentCard = styled.div`
  width: 1000px;
  height: 600px;
  margin-top: 20px;
  display:flex;
  flex-direction: column;
  background: #333;
  box-shadow: rgba(255,255,255,.25) 0 1px 0,
              inset rgba(255,255,255,.25) 0 1px 0,
              inset rgba(0,0,0,.5) 0 0 0,
              inset rgba(255,255,255,.08) 0 150px 0,
              inset rgba(0,0,0,.3) 0 -1.25rem 1.25rem,
              inset rgba(255,255,255,.1) 0 1.25rem 1.25rem;
  border: 1px solid #242424;
  border-radius: 10px;
`

// ContentCard.propTypes = {
    // }
    //   children: PropTypes.node.isRequired,   
export default ContentCard;
