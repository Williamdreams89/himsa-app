import { Navigator } from '../../components/Navigator';
import AnimatedBanner from '../../components/ReusableAnimatedBanner';
import ScrollTopBtn from '../../components/ScrollTop';
import { Footer } from '../../components/Footer';
import Countups from '../../components/learning/Countups';
import ResourcesCarousel from '../../components/learning/ResourcesCarousel';
const LearningResources = () => {
  return (
    <div>
      <Navigator />
      <AnimatedBanner routeName="Pages/Learning-resources" />
      <Countups />
      <ResourcesCarousel />
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default LearningResources