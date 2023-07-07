import { Footer } from '../../components/Footer';
import ScrollTopBtn from '../../components/ScrollTop';
import AnimatedBanner from '../../components/ReusableAnimatedBanner';
import { Navigator } from '../../components/Navigator';
import { ShopSideBarLg } from '../../components/Shop/sidebar/ShopSideBarLg';
import SHOPDrawer from '../../components/Shop/sidebar/SHOPDrawer';
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme)=>({
  sideMenu:{
    position: 'relative',
    display: 'flex',
    [theme.fn.largerThan('sm')]:{
      zIndex: 70,
    }
  }
}))

const HimsaShop = () => {

  const {classes} = useStyles()
  return (
    <div>
      <Navigator />
      <AnimatedBanner routeName="Shop/Checkout" />
      <div className={classes.sideMenu}>
        <div className=" flex">
          <ShopSideBarLg />
          <h1>William</h1>
          <SHOPDrawer />
        </div>
      </div>
      <ScrollTopBtn />
      <Footer />
    </div>
  )
}

export default HimsaShop