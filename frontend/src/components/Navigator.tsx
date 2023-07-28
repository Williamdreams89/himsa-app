import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {IconChevronDown,IconBrandFacebook} from '@tabler/icons-react';
import LightDarkThemeBtn from './LightDarkThemeBtn';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mockdata_pages, mockdata_shop } from '../data/Navigator';
import { FaUser, FaUserAlt } from 'react-icons/fa';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,


    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',

    },

    ...theme.fn.hover({
      // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  headerStyle: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
    position: "fixed",
    top: 0,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));






export function Navigator() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [linksOpened2, { toggle: toggleLinks2 }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [navbar, setNavbar] = useState(false);
  const [activateDarkMode, setActivateDarkMode] = useState(true);
  useEffect(() => {
    const changeHeaderBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeHeaderBackground);

    return () => {
      window.removeEventListener('scroll', changeHeaderBackground);
    };
  }, []);
  useEffect(() => {
    const changeHeaderBackground2 = () => {
      if (window.scrollY >= 90 && theme.colorScheme === "dark") {
        console.log(theme.colorScheme)
        setActivateDarkMode(true);
      } else {
        setActivateDarkMode(false);
      }
    };

    window.addEventListener('scroll', changeHeaderBackground2);

    return () => {
      window.removeEventListener('scroll', changeHeaderBackground2);
    };
  }, []);

  const links = mockdata_shop.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Link to={item.url} onClick={() => handleMenuClick(item.url)}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </Link>
    </UnstyledButton>
  ));

  const links2 = mockdata_pages.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Link to={item.url} onClick={() => handleMenuClick(item.url)}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </Link>
    </UnstyledButton>
  ));


  // Routing bug 
  const navigate = useNavigate();

  const handleMenuClick = (path: any) => {
    if (window.location.pathname === path) {
      return;
    }

    navigate(path);
  };

  return (
    <Box>
      <Header height={80} px="lg" className={navbar ? "headerStyles active-dark" : "headerStyles"}>
        <Group position="apart" sx={{ height: '100%' }}>
          <Link to='/'>
            <div className=' flex gap-2 items-center justify-center text-white text-2xl font-bold'>
              <img src="/images/logo.webp" width={50} height={50} />
              <h2>HIMSAUCC</h2>
            </div>
          </Link>
          <LightDarkThemeBtn />
          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Pages
                    </Box>
                    <IconChevronDown size={16} color={"white"} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links2}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/blog" className={classes.link} >
              Blog
            </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link to="/shop" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Shop
                    </Box>
                    <IconChevronDown size={16} color={"white"} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Shop Menu</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/about" className={classes.link} onClick={() => handleMenuClick("about")}>
              About Us
            </Link>
            <Link to="/contact" className={classes.link} onClick={() => handleMenuClick("about")}>
              Contact Us
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            {/* <IconBrandFacebook /> */}
            <Link to='shop/account/authentication/'><button className={`font-bold ${theme.colorScheme=== 'dark' ? "text-white": "text-black"}`}><FaUserAlt color={theme.colorScheme === 'dark' ? 'white': 'black'} size={"1.5rem"} /></button></Link>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} color='white' />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Link to="/home" className={classes.link}>
            Home
          </Link>
          <Link to="/blog" className={classes.link}>
            Blog
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Shop
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <UnstyledButton className={classes.link} onClick={toggleLinks2}>
            <Center inline>
              <Box component="span" mr={5}>
                Pages
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened2}>{links2}</Collapse>
          <Link to="/about" className={classes.link}>
            About Us
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact Us
          </Link>
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          <Group position="center" grow pb="xl" px="md">
            <Link to='/shop/account/authentication'> <Button variant="default">Log in</Button></Link>
            <Link to='/shop/account/authentication'> <Button style={{ backgroundColor: theme.colorScheme === 'dark' ? "" : theme.fn.primaryColor() }}>Sign up</Button></Link>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}