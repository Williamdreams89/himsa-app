import { Button, Drawer, Group, Input, RangeSlider, Slider, Title, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { createStyles } from '@mantine/core';
import { AiOutlineBars } from "react-icons/ai"
import { categories } from '../../../data/shopCategories';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IconHeart } from '@tabler/icons-react';
import { IconHeartBroken } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    drawer: {
        '@media (min-width:64em)': {
            display: "none",
        },

        position: 'fixed',
        zIndex: 99,
        overflowY: 'visible'
    },
    drawerButton: {
        '@media (min-width:64em)': {
            display: "none",
        },

        position: "fixed",
        top: "70%",
        left: 0,
        backgroundColor: "rgba(0, 0, 0, .7)",
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
        color: theme.colorScheme === "dark" ? "white" : "black",
        '&:hover': {
            color: "rgb(59 130 246)"
        }
    },
    blogItem: {
        display: "flex",
        gap: "2rem",

        '& img': {
            width: "100px",
            objectFit: "cover",
            height: "120px"
        }
    },

    categoryList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem'
    },

    slider: {
        position: 'absolute',
        width: '100%',
        bottom: rem(-1),
      },
    
      thumb: {
        width: rem(16),
        height: rem(16),
      },
    
      track: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
      },

}))

const styles = { thumb: { borderWidth: 2, height: 26, width: 26, padding: 3 } };


const SHOPDrawer = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { classes } = useStyles();
    const [sliderValue, setSliderValue] = useState<number | ''>(40);
    return (
        <>
            <Drawer opened={opened} onClose={close} className={classes.drawer}>
                <div>
                    <Title className=' text-center text-2xl mb-[10px]'
                        order={2}
                        size="h6"
                        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
                        weight={600}
                        style={{ textAlign: 'left' }}
                    >CATEGORIES</Title>
                    <ul className={classes.categoryList}>
                        {categories.map(category => <li><Link to='/'>{category.name} ({category.qty})</Link></li>)}
                    </ul>
                </div>
                <div>
                    <Slider
                        max={8000}
                        step={50}
                        min={0}
                        label={null}
                        value={sliderValue === '' ? 0 : sliderValue}
                        onChange={setSliderValue}
                        size={2}
                        radius={0}
                        className={classes.slider}
                        classNames={{ thumb: classes.thumb, track: classes.track }}
                    />
                    <RangeSlider
        mt="xl"
        styles={styles}
        color="lightblue"
        label={null}
        defaultValue={[20, 60]}
        thumbChildren={[
          <IconHeart size="1rem" stroke={1.5} key="1" />,
          <IconHeartBroken size="1rem" stroke={1.5} key="2" />,
        ]}
      />
                </div>
            </Drawer>

            <Group position="center">
                <button onClick={open} className={classes.drawerButton}><AiOutlineBars className='text-white text-4xl font-semibold' /></button>
            </Group>
        </>

    )
}

export default SHOPDrawer