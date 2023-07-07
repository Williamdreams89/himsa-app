import { Carouzel } from '../components/Carouzel'
import ScrollTopBtn from '../components/ScrollTop'
import { Navigator } from '../components/Navigator'
import { Footer } from '../components/Footer'
import LandingAbout from '../components/LandingAbout'
import MeetOurStaffs from '../components/Home/MeetOurStaffs'
import WhatOurStudentsSay from '../components/Home/WhatOurStudentsSay'
import ContactUs from '../components/ContactUs'
import FAQ from "../components/Home/FAQ"


const Landing = () => {
  return (
    <div className='landing-page'>
      <Navigator />
      <Carouzel />
      <LandingAbout />
      <MeetOurStaffs />
      <WhatOurStudentsSay />
      <FAQ />
      <ContactUs />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default Landing