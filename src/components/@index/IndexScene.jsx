import React from 'react'
import Banner from './Banner'
import Marketing from './Marketing'
import PopularRoutes from './PopularRoutes'
import SearchForm from './Banner/SearchForm'

const IndexScene = () =>
  <div>
    <Banner />
    <SearchForm />
    <Marketing />
    <PopularRoutes />
  </div>

export default IndexScene
