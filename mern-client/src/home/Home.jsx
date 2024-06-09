import React from 'react'
import { Banner } from '../components/Banner'
import { FavouriteBooks } from './FavouriteBooks'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <FavouriteBooks/>
    </div>
  )
}

export default Home
