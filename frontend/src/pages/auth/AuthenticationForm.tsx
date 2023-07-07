import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
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
import { Link } from 'react-router-dom';
import LightDarkThemeBtn from '../../components/LightDarkThemeBtn';

const useStyles = createStyles(theme=>({}))


export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const {theme, classes} = useStyles()
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

        <form onSubmit={form.onSubmit(() => { })}>
          <Stack>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
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
            <Anchor color='dimmed' size='xs' href='/shop/account/requestPasswordReset'>{type === 'login'? 'Forgotten Password?': null}</Anchor >
            <button type="submit" className=' p-3 rounded-lg text-white' style={{backgroundColor:theme.fn.primaryColor()}}>
              {upperFirst(type)}
            </button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}