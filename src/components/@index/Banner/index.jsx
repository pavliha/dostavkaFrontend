import React from 'react'
import { Icon } from '@material-ui/core'
import Grid from '@material-ui/core/es/Grid/Grid'
import Typography from '@material-ui/core/es/Typography/Typography'
import { Link } from 'react-router-dom'
import Background from './Background'
import PrimaryTextInput from './PrimaryTextInput'
import TransparentButton from './TransparentButton'
import Container from '../../Container'

const Banner = () =>
  <Background>
    <Container>
      <div style={{ height: 400 }} className="d-flex align-items-center">
        <section className="text-white pt-5 pb-5">
          <Typography className="text-white" variant="display2" gutterBottom>
            Transfer
          </Typography>
          <ul className="p-0 pl-3">
            <li>Прямая доставка грузов</li>
            <li>Это как Uber - только для грузов</li>
            <li>Доставка туда куда другие не доедут</li>
            <li>Водитель по самым низким ценам забирает ваш груз</li>
          </ul>
        </section>
      </div>
      <Grid container className="pt-5 pb-5" alignItems="center" spacing={24} justify="center">
        <Grid item md={4} lg={3}>
          <PrimaryTextInput
            icon={<Icon>my_location</Icon>}
            placeholder="Откуда забрать ваш груз?"
          />
        </Grid>
        <Grid item md={4} lg={3}>
          <PrimaryTextInput
            icon={<Icon>my_location</Icon>}
            placeholder="Куда отвезти ваш груз?"
          />
        </Grid>
        <Grid item md={3} lg={2}>
          <Link to="/cargo"><TransparentButton>доставить</TransparentButton></Link>
        </Grid>
      </Grid>
    </Container>
  </Background>

Banner.propTypes = {}

export default Banner
