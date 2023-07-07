import React from 'react'
import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form'

const ContactUs = () => {
    const form = useForm({
        initialValues: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        validate: {
          name: (value) => value.trim().length < 2,
          email: (value) => !/^\S+@\S+$/.test(value),
          subject: (value) => value.trim().length === 0,
        },
      });
  return (
    <div>
        <Container>
        <form onSubmit={form.onSubmit(() => {})}>
      <Title
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
      >
        Get in touch
      </Title>
      <hr className='w-[4rem] m-auto mb-[3rem]' style={{borderWidth:".15rem", border: ".15rem solid rgba(101, 233, 220, 0.99)"}} />

      <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />

      <Group position="center" mt="xl">
        <Button type="submit" size="md" bg="cyan" variant='subtle'>
          Send message
        </Button>
      </Group>
    </form>
        </Container>

    </div>
  )
}

export default ContactUs