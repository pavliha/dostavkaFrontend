import React from 'react'
// import PropTypes from 'prop-types'
import Grid from '@material-ui/core/es/Grid/Grid'
import { withStyles } from '@material-ui/core/styles'
import { withFormik } from 'formik'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Geosuggest from '../../Geosuggest'
import TransparentButton from './TransparentButton'
import { search } from '../../../actions/createCargo.action'
import Container from '../../Container'

const styles = {}

class SearchForm extends React.Component {
  render() {
    const {
      setFieldTouched,
      setFieldValue,
      handleSubmit,
    } = this.props
    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={24} justify="center">
            <Grid item md={4} lg={3}>
              <Geosuggest
                id="to"
                name="to"
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                fullWidth
                label="Откуда забрать ваш груз?"
              />
            </Grid>
            <Grid item md={4} lg={3}>
              <Geosuggest
                id="from"
                name="from"
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                fullWidth
                label="Куда отвезти ваш груз?"
              />
            </Grid>
            <Grid item md={3} lg={2}>
              <TransparentButton type="submit">доставить</TransparentButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    )
  }
}

SearchForm.propTypes = {}

export default connect()(withRouter(withFormik({
  mapPropsToValues: () => ({
    from: '',
    to: '',
  }),

  handleSubmit: (values, { props, setSubmitting }) => {
    setTimeout(() => {
      props.dispatch(search(values))
      props.history.push('/cargo/create')
      setSubmitting(false)
    }, 100)
  },
  displayName: 'Search',
})(withStyles(styles)(SearchForm))))
