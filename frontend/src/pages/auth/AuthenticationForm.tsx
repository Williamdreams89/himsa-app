import { useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
  createStyles
} from '@mantine/core';
import { GoogleButton, TwitterButton } from './socialButtons/SocialButtons';
import { IconArrowBack } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import LightDarkThemeBtn from '../../components/LightDarkThemeBtn';
import { useLoginUserMutation } from '../../app/api/ApiSlice';
import { useState } from 'react';

const useStyles = createStyles(theme => ({}))


export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const { theme, classes } = useStyles()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const navigate = useNavigate()

  const [loginUser, {isLoading, isSuccess, isError}] = useLoginUserMutation()
  const handleLoginSubmit = async (event: any) => {
    event.preventDefault()
    if(email&&pwd){
      await loginUser({email: email, password: pwd})
      console.log('loginuser', loginUser)
      navigate('/')
    }

  }

  const handleRegisterSubmit = async (event: any) => {
    event.preventDefault()
    if(firstName && lastName && email && pwd){
      await loginUser({email:email, first_name:firstName, last_name:lastName})
      navigate('/')
      console.log('login user', loginUser)
    }

  

  }
  return (
    <Container className=' w-[95vw] md:w-[60vw] lg:w-[35vw]' mt={'2rem'}>
      <div className=' flex justify-around mb-[3rem]'><Link to='/' className='flex'><IconArrowBack /><button>Back</button></Link><LightDarkThemeBtn /></div>
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" align='center' weight={500}>
          Welcome to HIMSAUCC
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          <TwitterButton radius="xl">Twitter</TwitterButton>
        </Group>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />

        <form onSubmit={type === 'login' ? handleLoginSubmit : handleRegisterSubmit}>
          <Stack>
            {type === 'register' && (<>

              <TextInput
                required
                label="First Name"
                placeholder="Your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                radius="md"
              />
              <TextInput
                required
                label="Last Name"
                placeholder="Your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                radius="md"
              />
            </>
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={email}
              onChange={e => setEmail(e.target.value)}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Anchor color='dimmed' size='xs' href='/shop/account/requestPasswordReset'>{type === 'login' ? 'Forgotten Password?' : null}</Anchor >
            <button type="submit" className=' p-3 rounded-lg text-white' style={{ backgroundColor: theme.fn.primaryColor() }}>
              {upperFirst(type)}
            </button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}