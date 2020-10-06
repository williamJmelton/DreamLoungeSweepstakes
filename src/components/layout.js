import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { fade, makeStyles } from "@material-ui/core/styles"
import BackgroundImage from "gatsby-background-image"
import { withStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"



import Header from "./header"
import "./layout.scss"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  backgroundContainer: {
    width: "100%",
    height: "100%",
    backgroundPosition: `bottom center`,
    backgroundRepeat: `repeat-y`,
    backgroundSize: `cover`,
    backgroundBlendMode: `lighten`,
  },
  title: {
    display: "none",
    fontFamily: "'Lobster', cursive;",
    color: "#f8f8f2",
    webkitTextStrokeWidth: `1px`,
    webkitTextStrokeColor: 'black',
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  contentContainer: {
    display: `flex`,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

const StyledAppBar = withStyles({
  root: {
    background: "#bd93f9",
    zIndex: 10
  },
})(AppBar)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      desktop: file(relativePath: { eq: "starry-night.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const classes = useStyles()
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <>
      <StyledAppBar style={{ marginBottom: "10px" }} position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {data.site.siteMetadata?.title || `Title`}
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            position: `fixed`,
            bottom: 0,
            left: 0,
            padding: `1rem`,
            background: `rgba(255,255,255,0.5)`,
            width: `100%`,
            height: `9px`,
            borderTop: `1px solid #E0E0E0`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> & lot's of{" "}
          <span style={{color: 'red'}}>❤</span> by DivNectar
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
