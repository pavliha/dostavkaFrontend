import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/es/Card/Card'
import TextField from '@material-ui/core/es/TextField/TextField'
import CardActions from '@material-ui/core/es/CardActions/CardActions'
import CardContent from '@material-ui/core/es/CardContent/CardContent'
import Button from '@material-ui/core/es/Button/Button'
import Typography from '@material-ui/core/es/Typography/Typography'
import registerFormik from './registerFormik'
import connector from '../../connector'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: 400,
  },
  input: {
    marginBottom: theme.spacing.size4,
  },
  inputGroup: {
    marginTop: theme.spacing.size3,
  },
})

class RegisterCard extends React.Component {

  state = {
    isSubmited: false,
  }
  handleSubmit = (e) => {
    const { handleSubmit } = this.props
    this.setState({ isSubmited: true })

    handleSubmit(e)
  }

  componentDidUpdate() {
    if (this.props.auth.user) {
      this.props.history.push('/cargo')
    }
  }

  serverError = (fieldName) => {
    const { auth } = this.props
    const serverErrors = {}
    auth.errors.forEach(error => {
      serverErrors[error.field] = error.message
    })

    return serverErrors[fieldName]
  }

  hasError = (fieldName) => {
    const { isSubmited } = this.state
    const { errors, touched } = this.props

    return (!!errors[fieldName] && touched[fieldName] && isSubmited) || this.serverError(fieldName)
  }

  showHelperError = (fieldName) => {
    const { errors, touched } = this.props

    return (touched[fieldName] && errors[fieldName]) || this.serverError(fieldName)
  }

  render() {
    const { classes, values, handleChange, handleBlur, isSubmitting } = this.props
    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <CardContent className={classes.inputGroup}>
            <div className={classes.input}>
              <Typography variant="subheading">Введите ваше имя и фамилию:</Typography>
              <TextField
                fullWidth
                error={this.hasError('name')}
                helperText={this.showHelperError('name')}
                type="text"
                name="name"
                label="Имя и фамилия"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={classes.input}>
              <Typography variant="subheading">Введите email:</Typography>
              <TextField
                fullWidth
                error={this.hasError('email')}
                helperText={this.showHelperError('email')}
                type="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={classes.input}>
              <Typography variant="subheading">Введите ваш номер телефона:</Typography>
              <TextField
                fullWidth
                name="phone"
                error={this.hasError('phone')}
                helperText={this.showHelperError('phone')}
                type="tel"
                label="Номер телефона"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={classes.input}>
              <Typography variant="subheading">Придумайте пароль:</Typography>
              <TextField
                fullWidth
                name="password"
                error={this.hasError('password')}
                helperText={this.showHelperError('password')}
                type="password"
                label="Пароль"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              fullWidth
              variant="raised"
              type="submit"
              color="primary"
              disabled={isSubmitting}
            >
              Зарегистрироваться
            </Button>
          </CardActions>
        </form>
      </Card>
    )
  }
}

RegisterCard.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
}

export default withStyles(styles)(registerFormik(connector(withRouter(RegisterCard))))
