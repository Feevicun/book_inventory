import React from 'react'
import { Banner } from '../components/Banner'
import { BestSellerBooks } from './FavouriteBooks'

export const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerBooks/>
    </div>
  )
}

export default Home
