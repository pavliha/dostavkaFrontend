import React from 'react'
import Banner from './Banner'
import Marketing from './Marketing'
import PopularRoutes from './PopularRoutes'
import Footer from '../Footer'
import SearchForm from './Banner/SearchForm'

const IndexScene = () =>
  <div>
    <Banner />
    <SearchForm />
    <Marketing />
    <PopularRoutes />
    <Footer />
  </div>

export default IndexScene
