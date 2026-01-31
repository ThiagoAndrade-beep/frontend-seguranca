import React from 'react'
import "./homePage.css"
import NavBar from '../../components/landing/navBar/NavBar'
import Hero from '../../components/landing/hero/Hero'
import Resource from '../../components/landing/resources/Resource'
import Prices from '../../components/landing/prices/Prices'
import Faq from '../../components/landing/FAQ/Faq'
import Footer from '../../components/landing/footer/Footer'

const HomePage = () => {
  return (
    <>
        <div className='home'>
            <NavBar />
            <Hero />
            <Resource />
            <Prices />
            <Faq />
            <Footer />
        </div>
    </>
  )
}

export default HomePage