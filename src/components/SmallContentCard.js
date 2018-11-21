import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'

class SmallContentCard extends Component {
    render(props) {
        return (
            <CardContainer>
                <CardShine></CardShine>
            </CardContainer>
        );
    }
}

export const CardContainer = styled.div`
    position: fixed;
    width: 246px;
    height: 242px;
    left: 133px;
    top: 101px;
    background: #000000;
    border-radius: 13px;
`
const CardShine = styled.div`
    position: fixed;
    width: 183px;
    height: 242px;
    left: 133px;
    top: 101px;

    background: linear-gradient(206.66deg, #7E7E7E 1.95%, rgba(84, 84, 84, 0.61) 40.4%, rgba(0, 0, 0, 0) 92.71%);
    border-radius: 13px;
`

// ContentCard.propTypes = {
//   children: PropTypes.node.isRequired,
// }
export default SmallContentCard;
