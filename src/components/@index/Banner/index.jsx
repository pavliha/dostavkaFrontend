import React from 'react'
import { Icon } from '@material-ui/core'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import { Link } from 'react-router-dom'
import Background from './Background'
import PrimaryTextInput from './PrimaryTextInput'
import TransparentButton from './TransparentButton'
import Container from '../../Container'
import Button from '@material-ui/core/es/Button/Button'

const Banner = () =>
  <Background>
    <Container>
      <Grid container style={{ paddingTop: '200px' }} alignItems="center" spacing={24} justify="center">
        <Grid item>
          <Link to="/cargo"><Button variant="raised">Найти грузы</Button></Link>
        </Grid>
        <Grid item>
          <Link to="/cargo/create"><Button variant="raised">Добавить груз</Button></Link>
        </Grid>
      </Grid>
      <div style={{ height: 500 }} className="d-flex justify-content-center align-items-center">
        <section className="text-white pt-5 pb-5">
          <ul className="p-0 pl-3 text-center" style={{ listStyleType: 'none' }}>
            <li>Прямая доставка грузов</li>
            <li>Это как Uber - только для грузов</li>
            <li>Доставка туда куда другие не доедут</li>
            <li>Водитель по самым низким ценам забирает ваш груз</li>
          </ul>
        </section>
      </div>

    </Container>
  </Background>

Banner.propTypes = {}

export default Banner
