import React from 'react'
import Background from './Background'
import Container from '../../Container'

const Banner = () =>
  <Background>
    <Container>
      <div style={{ height: 1200 }} className="d-flex align-items-center justify-content-center">
        <section className="text-white pt-5 pb-5">
          <ul style={{ listStyleType: 'none', textAlign: 'center' }} className="p-0 pl-3">
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
