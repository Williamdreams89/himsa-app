import React from 'react'
import { Image, createStyles } from '@mantine/core' 



const useStyles = createStyles(theme=>({
    Container: {
        width: "90vw",
        margin: "3rem auto",

    }
}))
const About = () => {
    const {theme, classes} = useStyles()
  return (
    <div className={classes.Container}>
        <Image src="https://images.unsplash.com/photo-1686598993095-fa9d1d56a215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" alt='img' />
        <div>
        <h2>A Brief About HIMSA - UCC</h2>
        <p>HIMSA-UCC is a community of scholars and well-grounded body of lecturers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cum quisquam. Officia ullam neque dolores animi perferendis nulla consequuntur! Quam ratione suscipit ad, a eos inventore nulla doloremque adipisci explicabo.</p>
        <button>Read more</button>
        </div>
    </div>
  )
}

export default About