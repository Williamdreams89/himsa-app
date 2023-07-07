import { Carousel } from "@mantine/carousel";
import { Container, Title, createStyles, getStylesRef, rem } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { IconArrowRight } from "@tabler/icons-react";
import { IconQuote } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { studentsExecutives } from "../../data/studentsExecutives";

const useStyles = createStyles((theme) => ({
  container: {
    marginBottom: "4rem",
  },
  image: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  profileContainer: {
    bottom: "-30%",
    position: "absolute",
    left: "30%",

    "@media (min-width: 64em)": {
      bottom: "35%",
    },
  },
  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    zIndex: 99,
    display: "none",
  },

  carouselIndicator: {
    width: "200px",
    height: rem(4),
    display: "none",
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
}));
const WhatOurStudentsSay = () => {
  const { classes, theme } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Container my="xl">
      <Title className="text-center text-4xl mb-[20px]"
      order={2}
      size="h1"
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      weight={900}
      align="center"
      >What Our Students Say?</Title>
      <hr className='w-[5rem] m-auto mb-[3rem]' style={{borderWidth:".15rem", border: ".15rem solid rgba(101, 233, 220, 0.99)"}} />
      <Carousel
        withIndicators={false}
        height={500}
        slideSize="33.333333%"
        slideGap="md"
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        align="start"
        nextControlIcon={
          <IconArrowRight
            color={theme.colorScheme === "dark" ? "white" : "black"}
            size={26}
          />
        }
        previousControlIcon={
          <IconArrowLeft
            color={theme.colorScheme === "dark" ? "white" : "black"}
            size={26}
          />
        }
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {studentsExecutives.map((student) => (
          <Carousel.Slide>
            <div className="relative w-full h-[300px] lg:h-[700px]">
              <p
                className="w-[100%] absolute p-10 "
                style={{
                  border: "1px solid rgba(64, 224, 208)",
                  color: theme.colorScheme === "dark" ? "white" : "black",
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? "rgba(64, 224, 208, .8)"
                      : "rgba(64, 224, 208)",
                }}
              >
                <IconQuote /> Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Pariatur debitis nihil tenetur voluptas totam,
                sapiente neque illo quos veritatis distinctio.
                <IconQuote />
              </p>
              <div className={classes.profileContainer}>
                <img
                  src={`/images/executives/${student.imgSrc}`}
                  className={classes.image}
                />
                <h2>{student.name}</h2>
                <h3>{student.role}</h3>
                <h2>{student.level}</h2>
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default WhatOurStudentsSay;
