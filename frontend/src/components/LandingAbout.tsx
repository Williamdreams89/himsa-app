import { Button, Grid, SimpleGrid, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  image: {
    width: "50% !important",
    position: "absolute",
    objectFit: "cover",
    borderRadius: "26px",
    height: "80%",
    left: "53%",
    bottom: 0,

    [theme.fn.smallerThan("md")]: {
    },
  },

  image_two: {
    width: "50% !important",
    position: "absolute",
    objectFit: "cover",
    // border: "6px solid blue",
    borderRadius: "26px",
    height: "100%",

    [theme.fn.smallerThan("md")]: {
      // display: "none"
    },
  },
  imageContainer: {
    height: "450px",
    position: "relative",

    [theme.fn.smallerThan("md")]: {
      marginBottom: "2rem",
    },

    [theme.fn.largerThan("md")]: {
      marginRight: "2rem",
    },
  },
}));

const LandingAbout = () => {
  const { theme, classes } = useStyles();
  return (
    <div
      className="pt-5 pb-10"
      style={{
        backgroundColor:
          theme.colorScheme === "light" ? "rgb(241 245 249)" : "",
      }}
    >
      <div className="w-[90vw]   m-auto mt-[10vh]">
        <SimpleGrid
          cols={2}
          spacing="xl"
          breakpoints={[
            { maxWidth: "62rem", cols: 2, spacing: "md" },
            { maxWidth: "48rem", cols: 1, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
            <img src="images/logo.webp" height={"480px"} /> 
          <div className=" ">
            <h2 className=" text-blue-700 text-xl font-semibold">
              About Our Association
            </h2>
            <h1>A Few Words About the HIMSA-UCC</h1>
            <p className=" relative">
            <img className=" absolute top-[30%] opacity-[45%]" src="images/assoc.png" height={"100%"} /> 
              Our community is being called to boldly redefine the future. As
              the only pioneering departmental association where distinguished
              scholars passionately come together with a cutting-edge, top-tier
              competency framework tailored specifically for the rapidly
              evolving 21st-century Health Information Management field, we are
              at the forefront of making learning not only more relevant but
              also profoundly transformative. By harnessing the collective
              expertise of our esteemed scholars and leveraging our
              state-of-the-art framework, we are empowering individuals to
              thrive amidst the dynamic challenges and opportunities in the
              ever-changing landscape of healthcare information management.
              Together, we are shaping the future of this critical discipline,
              driving innovation, and forging a path towards excellence in
              healthcare delivery.
            </p>
            <SimpleGrid
              cols={2}
              spacing="lg"
              breakpoints={[
                { maxWidth: "62rem", cols: 3, spacing: "md" },
                { maxWidth: "48rem", cols: 2, spacing: "sm" },
                { maxWidth: "36rem", cols: 1, spacing: "sm" },
              ]}
              className=" mt-[1rem]"
            >
              <Link to='/'>
              <div className="flex gap-6 md:gap-1">
                <div className="">
                  <h2 className="w-[50px]  h-[50px] rounded-full bg-blue-400  text-white font-semibold text-xl flex items-center justify-center">01</h2>
                </div>
                <div>
                  <h2>Bachelors Degree</h2>
                  <p className="md:w-[25ch]">
                    Lorem ipsum consectetur adipisicing elit. Dolores, repellat?
                  </p>
                </div>
              </div>
              </Link>
              <Link to='/'>
              <div className="flex gap-6 md:gap-1">
                <div className="w-[50px]  h-[50px] rounded-full bg-blue-400 flex items-center justify-center">
                  <h2 className="w-[50px]  h-[50px] rounded-full bg-blue-400  text-white font-semibold text-xl flex items-center justify-center">02</h2>
                </div>
                <div>
                  <h2>Masters Degree</h2>
                  <p className="md:w-[25ch]">
                    Lorem ipsum consectetur adipisicing elit. Dolores, repellat?
                  </p>
                </div>
              </div>
              </Link>
              <Button className="bg-blue-950 w-[150px] h-[50px]">
                Explore
              </Button>
            </SimpleGrid>
          </div>
        </SimpleGrid>
      </div>
    </div>
  );
};

export default LandingAbout;
