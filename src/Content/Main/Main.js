
import { Grid, Typography } from "@material-ui/core";
import CardItem from "./Card/CardItem";



import c from "./Main.module.css"


function Main(props) {

    return (
        <main className={c.wrapper}>
            <Grid container spacing={1}>
                
                    {props.state.map((everyCard, i) => {
                        return (
                            <Grid key={i} item lg={3} sm={6} >
                                <CardItem  image={everyCard.image} title={everyCard.title} icon={everyCard.icon} typography={everyCard.typography} typographyArray={everyCard.paragraph}/>
                            </Grid>
                        )
                    })}
                

            </Grid>
        </main>
    )
}

export default Main