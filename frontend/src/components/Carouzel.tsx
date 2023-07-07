import { createStyles, Image, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import TypewriterComponent from './TypeWriterComponent';
import { IconArrowForward } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const useStyles = createStyles((theme) => ({
    price: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    carousel: {
        '&:hover': {
            [`& .${getStylesRef('carouselControls')}`]: {
                opacity: 1,
            },
        },
        width: "100%"
    },

    carouselControls: {
        ref: getStylesRef('carouselControls'),
        transition: 'opacity 150ms ease',
        // opacity: 0,
        zIndex: 99,
    },

    carouselIndicator: {
        width: rem(4),
        height: rem(4),
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: rem(16),
        },
    },
    carouselSlideSmall: {
        height: rem(400),
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(to top, rgba(64, 224, 208) 0%,
                    rgba(64, 224, 208) 0%, 
                    rgba(64, 224, 208, 0.7) 50%, 
                    rgba(64, 224, 208, 0.2) 90%, 
                    rgba(64, 224, 208, 0.1) 100%
                )`,
    },
    carouselSlide: {
        [theme.fn.largerThan('md')]: {
            height: "100vh"
        },

        [theme.fn.smallerThan('md')]: {
            height: "60vh",
            marginRight: 0,
            width: "100vw",

            '& img':{
                height: "600px !important",
                width:"100vw !important"
            }
        }, 
        width: "100vw"
    },

    carouselParagragh: {
        [theme.fn.largerThan('md')]: {

            '& p': {
                fontSize: "1.6rem"
            },

            '& .hero_welcome': {
                width: "60vw",
                top: "30%",
                left: "10%",

                '& p': {
                    width: "100%",

                    '&::first-letter': {
                        display: "none"
                    }
                }
            }
        }
    }

}));

const images = [
    '/images/banner/1.webp',
    '/images/banner/2.webp',
    '/images/banner/3.webp',
    '/images/banner/4.webp',
    '/images/banner/5.webp',
    '/images/banner/6.webp',
    '/images/banner/7.webp',
];

export function Carouzel() {
    const { classes } = useStyles();

    const slides = images.map((image) => (
        <>
            <Carousel.Slide key={image} className={classes.carouselSlide}>
                <Image src={image} height={"900px"} style={{objectFit:'cover'}} />
                <div className={classes.overlay} />
            </Carousel.Slide>
        </>
    ));


    const autoplay = useRef(Autoplay({ delay: 10000 }));
    return (
        <>
            <div className={classes.carouselParagragh}>
                <div className='hero_welcome absolute z-10 top-32 pb-8 text-white left-12 font-extrabold w-[90vw]'>
                    <div>
                        <h3 className=' hero-heading text-lg' style={{ textTransform: "uppercase", textShadow: "2px 2px 2px #000" }}>Welcome to HIMSA - UCC</h3>
                    </div>
                    <hr className=' w-[80%]' />
                    <div className=" w-[80%] h-[15rem]">
                        <TypewriterComponent />
                        <div className="">
                            <button className=" bg-blue-500 text-sm p-2 mt-3 rounded-md flex items-center">Explore More <IconArrowForward /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                withIndicators
                loop
                classNames={{
                    root: classes.carousel,
                    controls: classes.carouselControls,
                    indicator: classes.carouselIndicator,
                }}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {slides}
            </Carousel>
        </>
    )
}