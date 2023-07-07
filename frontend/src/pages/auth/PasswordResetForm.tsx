import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
  Anchor,
  Center,
  Box,
  rem,
} from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(26),
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

const PasswordResetForm=()=> {
  const { classes, theme } = useStyles();

  return (
<Container className=' w-[95vw] md:w-[60vw] lg:w-[35vw]' mt={'2rem'}>      <Title className={classes.title} align="center">
        Forgot your password?
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your email to get a reset link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput label="Your email" placeholder="me@example.com" required />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Anchor href='/shop/account/authentication' color="dimmed" size="sm" className={classes.control}>
            <Center inline>
              <IconArrowLeft size={rem(12)} stroke={1.5} />
              <Box ml={5}>Back to login page</Box>
            </Center>
          </Anchor>
          <Anchor className={classes.control} bg={theme.fn.primaryColor()} color='white' p='3px' style={{textDecoration:'none'}}>Send Password Reset Link</Anchor>
        </Group>
      </Paper>
    </Container>
  );
}

export default PasswordResetForm