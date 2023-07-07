import { Button, Drawer, Group, Input, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { createStyles } from '@mantine/core';
import { IconChevronRight, IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import {AiOutlineBars} from "react-icons/ai"

const useStyles = createStyles((theme) => ({
    drawer: {
        '@media (min-width:64em)': {
            display: "none",
        },

        position: 'fixed',
        zIndex: 99,
    },
    drawerButton: {
        '@media (min-width:64em)': {
            display: "none",
        },

        position: "fixed",
        top: "70%",
        left: 0,
        backgroundColor: "rgba(0, 0, 0, .7)",
        // backgroundColor: "rgb(96 165 250)",
        height: "60px",
        width: "50px",
        borderRadius: "0 20px 20px 0",
        zIndex: 9,

    },
    blogNav: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },

        width: "300px",
        [theme.fn.largerThan("sm")]: {
            flex: .9
        }
    },
    

    ArchiveLinks: {
        fontWeight: 500,
        color: theme.colorScheme === "dark"?"white":"black",
        '&:hover': {
            color: "rgb(59 130 246)"
        }
    },
    blogItem: {
        display: "flex",
        gap: "2rem",

        '& img':{
            width: "100px",
            objectFit: "cover",
            height: "120px"
        }
    },

}))

const archives = [
    { year: "May 2023", url: "/" },
    { year: "June 2023", url: "/" },
    { year: "July 2023", url: "/" },
    { year: "August 2023", url: "/" },
]

const posts = [
    {
        imageUrl: "https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
        description: "Henry is planting more trees for Akkufo Addo",
        author: "William",
        date: "12th May, 2023"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
        description: "Prince bought a new Jaguar",
        author: "Henry ",
        date: "12th May, 2023"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
        description: "Henry is planting more trees for Akkufo Addo",
        author: "William",
        date: "12th May, 2023"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
        description: "Prince bought a new Jaguar",
        author: "Henry ",
        date: "12th May, 2023"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
        description: "Henry is planting more trees for Akkufo Addo",
        author: "William",
        date: "12th May, 2023"
    },

]
const BlogDrawer = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { theme, classes } = useStyles()
    return (
        <>
            <Drawer opened={opened} onClose={close} className={classes.drawer}>
                    <Input icon={<IconSearch />} placeholder='Search' />
                    <br />
                    <hr />
                    <div className="">
                        <h2 className='mt-5 mb-5 text-3xl'>Archives</h2>
                        <div className=' flex flex-col'>{archives.map((item) => <a href={item.url} className={classes.ArchiveLinks}>{item.year}</a>)}</div>
                        <hr />
                    </div>
                    <div className=' h-max mt-8'>
                        <h2 className='  text-3xl mb-4'>Recent Posts</h2>
                        <Link to="/">
                        <div className=' flex flex-col gap-[2rem]'>{posts.map((item) => <div className={classes.blogItem}>
                            <img src={item.imageUrl} />
                            <div>
                                <p>{item.description}</p>
                                <p>{item.author}</p>
                                <p>{item.date}</p>
                            </div>
                        </div>)}
                        </div>
                        </Link>
                    </div>
                    <div className="h-[5rem]"></div>
            </Drawer>

            <Group position="center">
                <button onClick={open} className={classes.drawerButton}><AiOutlineBars className='text-white text-4xl font-semibold' /></button>
            </Group>
        </>

    )
}

export default BlogDrawer