import React from 'react'
import { Title, createStyles } from '@mantine/core'
import { lecturers } from '../../data/lecturers'
import { IconArrowBadgeRight } from '@tabler/icons-react'
const useStyles = createStyles(theme=>({
    container:{
        width: "90vw", 
        margin: "5rem auto",
    }, 
    subContainer:{
        display:"grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "1rem",
        placeItems: "center",

        '& img':{
            objectFit:"cover",
            borderRadius: "50%", 
            width: "200px",
            height: "200px",

            [theme.fn.smallerThan('md')]:{
                width: '150px',
                height: '150px'
            }
        }

        

    }
}))


const MeetOurStaffs = () => {
    const {theme, classes} = useStyles()
  return (
    <div className={classes.container}>
        <div className='w-[100%]'>
        <Title className=' text-center text-4xl mb-[10px]'
        order={2}
        size="h1"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={900}
        align="center"
        >Meet Our Lecturers</Title>
        <hr className='w-[4rem] m-auto mb-[5rem]' style={{borderWidth:".15rem", border: ".15rem solid rgba(101, 233, 220, 0.99)"}} />
        <div className={classes.subContainer}>
            {lecturers.map(lecturer=><div className=' flex flex-col justify-center'>
            <div className=' h-[80%]'>
            <img src={`/images/lecturers/${lecturer.imgSrc}`} height="500px" alt="" />
            </div>
            <div className="text-center grid place-items-center">
                <h2 style={{fontWeight:600}}>{lecturer.name}</h2>
                <h3 className='text-blue-400'>{lecturer.role}</h3>
                <button className='flex items-center'>View Profile <IconArrowBadgeRight /></button>
            </div>
            </div>)}
        </div>
        </div>
    </div>
  )
}

export default MeetOurStaffs