import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Results from './Results'

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: 50,
    margin: 50,
  }),
})

class PaperSheet extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { classes } = this.props
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Results state={this.props.state} />
        </Paper>
      </div>
    )
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PaperSheet)