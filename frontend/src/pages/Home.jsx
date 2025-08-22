import React, { useState } from 'react'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import AppDownload from '../components/AppDownload'
import FoodDisplay from '../components/FoodDisplay'

function Home() {
  const [category,setCategory]=useState("All")
  return (
    <>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload category={category} />
    </>
  )
}

export default Home