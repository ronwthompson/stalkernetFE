import React, { Component } from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import RaisedButton from './RaisedButton'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { FormControl, FormHelperText } from 'material-ui/Form'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  }
})

const style = {
    position: "fixed",
    height: "100px",
    width: "195px",
    top: "40vh",
    right: "calc(50% - 97.5px)"
}

class SearchForm extends Component {

  render() {
    const { classes } = this.props

    return (
      <div style={ style }>
          <FormControl className={ classes.formControl } onSubmit={ this.props.state.submitForm }>
            <InputLabel htmlFor="name-simple">Instagram ID</InputLabel>
            <Input id="name-simple" placeholder="Instagram ID" />
            <RaisedButton id="searchButton" submitForm={ this.props.state.submitForm }/>
          </FormControl>
      </div>
    )
  }
}

SearchForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm)
