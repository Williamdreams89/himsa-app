import React from 'react'
import { Badge, Button, Group, Image, Text, createStyles } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { academics } from '../../data/LearningResource';
import { Card } from '@mantine/core';
import {IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
const useStyles = createStyles(theme => ({
  mainContainer: {
    width: '80vw',
    margin: "3rem auto",
    height: "600px !important",
  },
  card: {
    width: "85%",
    height: "100%",
    margin: "auto"
  },
  slideItem:{
    marginBottom:'4rem',

    '& h4':{
      fontSize: "28px",
      fontWeight: "bold",
      color: theme.colorScheme==='dark'?"white":"#333",
      marginBottom: "3rem"
    }
  }
}))
const ResourcesCarousel = () => {
  const { theme, classes } = useStyles()
  return (
    <div>
    <div className={classes.slideItem}>
      <div className="w-[95vw] flex flex-col items-center">
        <h4 className=''>Academics</h4>
        {/* <hr className='m-[1rem] w-[70vw]' /> */}
      </div>
      <Carousel
        withIndicators
        height={"max-content"}
        slideSize="33.333333%"
        slideGap="1rem"
        loop
        align="start"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
        nextControlIcon={<IconChevronRight color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
        previousControlIcon={<IconChevronLeft color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
      >
        {academics.map(item => <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
            <Card.Section component="a" href="#">
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Carousel.Slide>)}
      </Carousel>
    </div>  
    <div className={classes.slideItem}>
      <div className="w-[95vw] flex flex-col items-center">
        <h4 className=''>YouTube Courses</h4>
        {/* <hr className='m-[1rem] w-[70vw]' /> */}
      </div>
      <Carousel
        withIndicators
        height={"max-content"}
        slideSize="33.333333%"
        slideGap="1rem"
        loop
        align="start"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
        nextControlIcon={<IconChevronRight color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
        previousControlIcon={<IconChevronLeft color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
      >
        {academics.map(item => <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
            <Card.Section component="a" href="#">
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Carousel.Slide>)}
      </Carousel>
    </div>  
    <div className={classes.slideItem}>
      <div className="w-[95vw] flex flex-col items-center">
        <h4 className=''>Skill Development</h4>
        {/* <hr className='m-[1rem] w-[70vw]' /> */}
      </div>
      <Carousel
        withIndicators
        height={"max-content"}
        slideSize="33.333333%"
        slideGap="1rem"
        loop
        align="start"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
        nextControlIcon={<IconChevronRight color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
        previousControlIcon={<IconChevronLeft color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
      >
        {academics.map(item => <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
            <Card.Section component="a" href="#">
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Carousel.Slide>)}
      </Carousel>
    </div>  
    <div className={classes.slideItem}>
      <div className="w-[95vw] flex flex-col items-center">
        <h4 className=''>Case Studies</h4>
        {/* <hr className='m-[1rem] w-[70vw]' /> */}
      </div>
      <Carousel
        withIndicators
        height={"max-content"}
        slideSize="33.333333%"
        slideGap="1rem"
        loop
        align="start"
        breakpoints={[
          { maxWidth: 'md', slideSize: '50%' },
          { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
        ]}
        nextControlIcon={<IconChevronRight color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
        previousControlIcon={<IconChevronLeft color={theme.colorScheme==='dark'? "white":"black"} size={"40px"} />}
      >
        {academics.map(item => <Carousel.Slide>
          <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
            <Card.Section component="a" href="#">
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
        </Carousel.Slide>)}
      </Carousel>
    </div>  
    </div>  
  )
}

export default ResourcesCarousel