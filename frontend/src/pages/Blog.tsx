import React from 'react'
import { Footer } from '../components/Footer';
import ScrollTopBtn from '../components/ScrollTop';
import AnimatedBanner from '../components/ReusableAnimatedBanner';
import { Navigator } from '../components/Navigator';
import BlogAppShellComponent from '../components/BlogAppShellComponent';
import BlogDrawer from '../BlogDrawer';

const Blog = () => {
  return (
    <div className='relative'>
      <Navigator />
      <AnimatedBanner routeName="Blog" />
      <BlogDrawer />
      <BlogAppShellComponent />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default Blog