import { createStyles } from "@mantine/core"
import {CountUp} from "use-count-up"
import { FaYoutubeSquare, FaGraduationCap, FaAnchor, FaBookMedical } from "react-icons/fa"


const resourcesList = [
    { collection: "YouTube", icon: FaYoutubeSquare, qty:2000 },
    { collection: "Academics", icon: FaGraduationCap, qty:400 },
    { collection: "Skill Development", icon: FaAnchor, qty:3000 },
    { collection: "Case Studies", icon: FaBookMedical, qty:1700 },
]
const useStyles = createStyles(theme => ({
    mainContainer: {
        width: "80vw",
        margin: "4rem auto",
        overflowX: "hidden"
    },
    countUpsContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "3rem",
        width:"100%",
        placeItems: "center"
    },
    counterUp:{
        width: "200px",
        display: "grid",
        placeItems: "center",
    }

}))

const Countups = () => {
    const { theme, classes } = useStyles()
    return (
        <div className={classes.mainContainer}>
            <div className={classes.countUpsContainer}>
                {resourcesList.map(item => <div className={classes.counterUp}>
                    <item.icon size={"70px"} color="rgb(64, 224, 208)" />
                    <h1 className=" font-[410] text-slate-700" style={{letterSpacing:"4px", color: theme.colorScheme==='dark'?'white': "rgb(51, 65, 85)"}}><CountUp isCounting end={item.qty} duration={3.2}></CountUp></h1>
                    <h2 className="font-[500]" style={{letterSpacing:"3px"}}>{item.collection}</h2>
                </div>)}
            </div>
        </div>
    )
}

export default Countups