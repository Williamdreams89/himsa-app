import { IconArchive } from '@tabler/icons-react';
import { IconPictureInPictureTop } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';
import { IconFileCertificate } from '@tabler/icons-react';
import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  
    IconShoppingCart,
    IconMoneybag,
    IconUserCheck,
    IconCalendarCheck,
    IconPhoto,
    IconBrandFacebook
  } from '@tabler/icons-react';

export const mockdata_shop = [
    {
      icon: IconShoppingCart,
      title: 'My Shopping Cart',
      description: 'List of items you "Add to Cart" from the shop',
      url: "/shop/cart"
    },
    {
      icon: IconMoneybag,
      title: 'Payment/Checkout',
      description: 'Payment channels for Cart items ',
      url: "/shop/checkout"
    },
    {
      icon: IconArchive,
      title: 'HIMSA Shop',
      description: 'Start Buying your goodies from HIMSA shop',
      url: "/shop"
    },
    {
      icon: IconUserCheck,
      title: 'My Account',
      description: 'Manage your account',
      url: "/shop/account"
    }
  ];

export const mockdata_pages = [
    {
      icon: IconBook,
      title: 'Learning Resources',
      description: 'Access all the learing materials per your level of study',
      url: "/pages/learning-resources"
    },
    {
      icon: IconUsersGroup,
      title: 'Community',
      description: 'Meet HIMSA Membership Community (The Alumni, Valecdectorians, Present Executives)',
      url: "/pages/community"
    },
    {
      icon: IconCalendarCheck,
      title: 'Upcoming Events',
      description: 'Stay-up-to-date with programs and pipelined events',
      url: "/pages/events"
    },
    {
      icon: IconPhoto,
      title: 'HIMSA Gallery',
      description: 'Face of HIMSA, Pictures from programs, and so many more!',
      url: "/pages/gallery"
    },
    {
      icon: IconFileCertificate,
      title: 'Higher Education',
      description: 'Learn more on how you can further your education!',
      url: "/pages/higher-education"
    },
  ]