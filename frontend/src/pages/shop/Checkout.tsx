import { Footer } from '../../components/Footer'
import { Navigator } from '../../components/Navigator';
import AnimatedBanner from '../../components/ReusableAnimatedBanner';
import ScrollTopBtn from '../../components/ScrollTop';

const Checkout = () => {
  return (
    <div>
      <Navigator />
      <AnimatedBanner routeName="Shop/Checkout" />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default Checkout