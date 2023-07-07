import React from 'react';
import Landing from './pages/Landing';
import { ColorScheme, ColorSchemeProvider, MantineProvider, Paper } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import {Route, Routes, Link} from "react-router-dom"
import HimsaShop from './pages/shop/HimsaShop';
import Checkout from './pages/shop/Checkout';
import MyAccount from './pages/shop/MyAccount';
import ShoppingCart from './pages/shop/ShoppingCart';
import PagesHome from './pages/pages/PagesHome';
import Community from './pages/pages/Community';
import Events from './pages/pages/Events';
import Gallery from './pages/pages/Gallery';
import HigherEducation from './pages/pages/HigherEducation';
import LearningResources from './pages/pages/LearningResources';
import Blog from './pages/Blog';
import Page404 from './pages/404';
import Contact from './pages/Contact';
import About from './pages/About';
import { AuthenticationForm } from './pages/auth/AuthenticationForm';
import PasswordResetForm from './pages/auth/PasswordResetForm';

function App() {
  // Use of the localstorage to store user preferred theme
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <div className='App'>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Paper>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/home' element={<Landing />} />
              <Route path='/blog' element={<Blog />} />
              {/* Shop routes */}
              <Route path='/shop' element={<HimsaShop />} />
              <Route path='/shop/cart' element={<ShoppingCart />} />
              <Route path='/shop/checkout' element={<Checkout />} />
              <Route path='/shop/account' element={<MyAccount />} />
              <Route path='/shop/account/authentication' element={<AuthenticationForm />} />
              <Route path='/shop/account/requestPasswordReset' element={<PasswordResetForm />} />
              {/* Pages routes */}
              <Route path='/' element={<PagesHome />} />
              <Route path='/pages/community' element={<Community />} />
              <Route path='/pages/events' element={<Events />} />
              <Route path='/pages/gallery' element={<Gallery />} />
              <Route path='/pages/higher-education' element={<HigherEducation />} />
              <Route path='/pages/learning-resources' element={<LearningResources />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            {/* Page 404 Not found */}
            <Route path='*' element={<Page404 />} />
            </Routes>
          </Paper>
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
