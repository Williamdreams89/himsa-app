import { Footer } from '../../components/Footer';
import ScrollTopBtn from '../../components/ScrollTop';
import AnimatedBanner from '../../components/ReusableAnimatedBanner';
import { Navigator } from '../../components/Navigator';

const PagesHome = () => {
  return (
    <div>
      <Navigator />
      <AnimatedBanner routeName="Pages/Home" />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default PagesHome