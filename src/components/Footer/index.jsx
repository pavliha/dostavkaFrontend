import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginRight: '25px',
    lineHeight: '1.5',
    '&: last-child': {
      marginRight: 0,
    },
  },
  div: {
    display: 'flex',
  },
  markerNone: {
    listStyleType: 'none',
  },
  footerTitle: {
    marginBottom: '30px',
  },
  footerGrid: {
    padding: '50px 50px 0',
    color: 'white',
    backgroundColor: '#09091A',
    width: '100%',
  },
  iconMargin: {
    '& img': {
      marginRight: '30px',
      width: '45px',
      height: '45px',
    },
    '& img: last-child': {
      display: 'block',
      margin: '25px auto',
      width: '135px',
      height: 'auto',
    },
  },
  footerCopyright: {
    padding: '30px 0',
    width: '100%',
    textAlign: 'center',
  },
})

const Footer = ({ classes }) =>
  <div className={classes.footerGrid}>
    <Grid container className={classes.root}>
      <Grid item xs={3} className={classes.div}>
        <Grid>
          <Grid item>
            <div className={classes.footerTitle}>Поездки с Transfer</div>
            <div>Как работает Transfer</div>
            <div>Доверие и безопасность</div>
            <div>Опыт</div>
            <div>Отзывы</div>
            <div>Безопасность в дороге</div>
            <div>Часто задаваемые вопросы</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} className={classes.root}>
        <Grid>
          <Grid item>
            <div className={classes.footerTitle}>О компании</div>
            <div>О нас</div>
            <div>Наш блог</div>
            <div>Пресса</div>
            <div>Партнёрство</div>
            <div>Ищем сотрудников</div>
            <div>Связаться с нами</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} className={classes.root}>
        <Grid>
          <Grid item>
            <div className={classes.footerTitle}>Регламент</div>
            <div>Условия использования</div>
            <div>Конфиденциальность</div>
            <div>Правила использования файлов cookie</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} className={classes.root}>
        <Grid>
          <Grid item>
            <div className={classNames(classes.footerTitle, classes.iconMargin)}>Регламент</div>
            <img src="" alt="Twitter" />
            <img src="" alt="Instagram" />
            <img src="" alt="Facebook" />
            <img src="" alt="Google Play" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} className={classes.root}>
      <Grid>
        <Grid item>
          <div className={classes.footerCopyright}>Transfer 2018 ©</div>
        </Grid>
      </Grid>
    </Grid>
  </div>

Footer.propTypes = {}

export default withStyles(styles)(Footer)
