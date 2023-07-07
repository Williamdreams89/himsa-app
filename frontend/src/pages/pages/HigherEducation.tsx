import { Navigator } from '../../components/Navigator';
import AnimatedBanner from '../../components/ReusableAnimatedBanner';
import ScrollTopBtn from '../../components/ScrollTop';
import { Footer } from '../../components/Footer';

const HigherEducation = () => {
  return (
    <div>
      <Navigator />
      <AnimatedBanner routeName="Shop/Checkout" />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default HigherEducation