import React from "react"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"


import VegasImage from "../../public/static/vegas.svg"
import VegasImage2 from "../../public/static/vegas2.svg"

const StyledButton = withStyles({
  root: {
    background: "#bd93f9",
    borderRadius: 3,
    border: 0,
    color: "#f8f8f2",
    height: 48,
    padding: "0 30px",
    transition: `all 0.5s`,
    "&:hover": {
      background: "#50fa7b",
      color: 'black',
      transition: `all 0.5s`
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button)



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <img src={VegasImage}></img>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
    </Grid>
    <h1>Welcome to Dream Lounge!</h1>
    <p>
      Dream Lounge is your premium online sweepstakes! Stay safe at home and
      play skill games!
    </p>
    <StyledButton variant="contained" color="primary" href="https://playgd.mobi">
      Play Now!!!
    </StyledButton>
    <Grid container spacing={3}>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
        <img src={VegasImage2}></img>
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
