/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '../Container'
import connector from './connector'
import UserMenu from './UserMenu'

const styles = theme => ({
  root: {
    background: theme.palette.primary.main,
    flexGrow: 1,
  },

  flex: {
    flex: 1,
  },
})

const Header = ({ classes, auth, actions }) =>
  <div className={classes.root}>
    <Container>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to="/">Transfer</Link>
          </Typography>
          <Link to="/cargo"><Button color="inherit">Поиск грузов</Button></Link>
          <Link to="/cargo/create"><Button color="inherit">Добавить Груз</Button></Link>
          {auth.user ?
            <React.Fragment>
              <UserMenu user={auth.user} onLogout={() => actions.auth.logout()} />

            </React.Fragment> :
            <React.Fragment>
              <Link to="/login"><Button color="inherit">Войти</Button></Link>
              <Link to="/register"><Button color="inherit">Зарегистрироваться</Button></Link>
            </React.Fragment>
          }
        </Toolbar>
      </AppBar>
    </Container>
  </div>

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

export default withStyles(styles)(connector(Header))
