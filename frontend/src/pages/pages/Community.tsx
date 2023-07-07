import React from 'react'
import AnimatedBanner from '../../components/ReusableAnimatedBanner'
import { Navigator } from '../../components/Navigator';
import { Footer } from '../../components/Footer';
import ScrollTopBtn from '../../components/ScrollTop';


const Community = () => {
  return (
    <>
      <Navigator />
      <AnimatedBanner routeName="Page/Community" />
      <ScrollTopBtn />
      <Footer />
    </>
  )
}

export default Community