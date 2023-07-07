import { Input, rem, } from '@mantine/core'
import { createStyles } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import Paginator from './Paginator';
import {Parallax} from "rc-scroll-anim"
import { archives, posts } from '../data/blogstuffs';

const useStyles = createStyles((theme) => ({
    blogNav: {
        '@media (min-width: 48em) and (max-width:64em)': {
            display: "none",
        },

        width: "300px",

        '@media (max-width: 48em)': {
            display: "none"
        },

        '@media (min-width: 64em':{
            flex: 3
        }
    },
    secondContainer: {
        height: "max-content", 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 2fr))",      
        gap: "2rem",
        flex: 5, 
    },

    mainBlogContainer: {
        width: "90vw",
        margin: "3rem auto",
        display: "flex",

        [theme.fn.largerThan("sm")]: {
            justifyContent: "space-around",
            gap: rem(25)
        }

    },

    ArchiveLinks: {
        fontWeight: 500,
        color: theme.colorScheme==="dark"?"white":"black",
        '&:hover':{
            color: "rgb(59 130 246)",
        }
    }, 
    blogItem: {
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        marginBottom: "2rem",

        
        '& img':{
            width: "100%",
            objectFit: "cover",
            height: "100%",
            transition: "transform .3s",
            ":hover":{
                transform: "scale(1.02)"
            },
        },
    },
    blogItemInNav: {
        display: "flex",
        gap: "2rem",

        '& img':{
            width: "100px",
            objectFit: "cover",
            height: "120px"
        }
    },
}));




const BlogAppShellComponent = () => {
    const { theme, classes } = useStyles()
    return (
        <div className={classes.mainBlogContainer}>
            <div className={classes.blogNav}>
                <Input icon={<IconSearch />} placeholder='Search' />
                <br />
                <br />
                <hr />
                <div className="">
                    <h2 className='mt-5 mb-5 text-3xl'>Archives</h2>
                    <div className=' flex flex-col'>{archives.map((item) => <a href={item.url} className={classes.ArchiveLinks}>{item.year}</a>)}</div>
                    <hr />
                </div>
                {/* <Parallax animation={{x:0}} style={{ transform: 'translateX(-100px)', margin: '10px auto' }} className="code-box-shape"> */}

                <div className=' h-max mt-8 w-[90%]'>
                    <h2 className='  text-3xl'>RECENT POST</h2>
                    <div className=' flex flex-col gap-[2rem]'>{posts.map((item)=><div className={classes.blogItemInNav}>
                        <img src={item.imageUrl} />
                        <div>
                            <p>{item.description}</p>
                            <p>{item.author}</p>
                            <p>{item.date}</p>
                        </div>
                    </div>)}</div>
                </div>
                {/* </Parallax> */}
            </div>
            <div className={classes.secondContainer}>
            {posts.map(item=><div className={classes.blogItem}>
                <img src={item.imageUrl} />
                <div>
                    <p className=' text-2xl font-bold'>{item.description}</p>
                    <p className=' font-bold'>{item.date}</p>
                    <p><a href='/'>By {item.author}</a></p>
                    <button style={{border:"2px solid rgb(59, 130, 246)", padding:"5px", fontSize: "12px", borderRadius: "10px", float: "right"}}>Read More</button>
                </div>
            </div>)}
            <Paginator />
            </div>
        </div>
    )
}

export default BlogAppShellComponent