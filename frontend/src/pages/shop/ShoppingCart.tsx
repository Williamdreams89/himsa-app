import { Footer } from '../../components/Footer';
import ScrollTopBtn from '../../components/ScrollTop';
import AnimatedBanner from '../../components/ReusableAnimatedBanner';
import { Navigator } from '../../components/Navigator';

const ShoppingCart = () => {
  return (
    <div>
      <Navigator />
      <AnimatedBanner routeName="Shop/Cart" />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default ShoppingCart