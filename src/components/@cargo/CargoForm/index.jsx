/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import AdditionalFormItems from './FormBadges'
import FormItems from './FormItems'
import formik from './formik'

const style = theme => ({
  root: {
    margin: theme.spacing.size4,
  },
})

class CargoForm extends React.Component {

  state = {
    isSubmited: false,
  }

  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })

    handleSubmit(e)
  }

  hasError = (fieldName) => {
    const { isSubmited } = this.state
    const { errors, touched } = this.props

    return (!!errors[fieldName] && touched[fieldName] && isSubmited)
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props

    return (touched[fieldName] && errors[fieldName])
  }

  render() {
    const { classes, ...form } = this.props

    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <CardContent>
            <FormItems
              form={form}
              hasError={this.hasError}
              showHelperError={this.showHelperError}
            />
            <AdditionalFormItems />
          </CardContent>
        </form>
      </Card>
    )
  }
}

CargoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
}

export default withStyles(style)(withRouter(formik(CargoForm)))
