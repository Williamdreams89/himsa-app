import React from 'react'
import { Footer } from '../../components/Footer';
import ScrollTopBtn from '../../components/ScrollTop';
import AnimatedBanner from '../../components/ReusableAnimatedBanner';
import { Navigator } from '../../components/Navigator';

const MyAccount = () => {
  return (
    <div>
      <Navigator />
      <AnimatedBanner routeName="Shop/Checkout" />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default MyAccount