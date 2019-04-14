import React from 'react'
import { Grid } from '@material-ui/core'

function Footer() {
  return (
    <footer>
      <Grid container direction="row" justify="center">
        <Grid item>item 1</Grid>
        <Grid item>item 2</Grid>
        <Grid item>item 3</Grid>
      </Grid>
    </footer>
  )
}

export default Footer
