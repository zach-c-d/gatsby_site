import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import NavigationBar from './Navigation.js'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'I\'m just trying to learn some gatsby' },
            { name: 'keywords', content: 'portfolio, industrial design, frontend development, react, javascript' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <LayoutContainer>
          <NavigationBar></NavigationBar>
          <Content>
            {children}
          </Content>
      </LayoutContainer>
      </>
    )}
  />
)

const LayoutContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: white;
  p{
    font-family: 'open-sans', sans-serif;
  }

  display: flex;
  flex-direction: row;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
