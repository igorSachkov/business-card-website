
import { Grid, Typography } from "@material-ui/core";
import CardItem from "./Card/CardItem";

function Main() {
    return (
        <main>
            <Grid container spacing={1}>
                <Grid item lg={3} sm={6} >
                    <CardItem />
                </Grid>
                <Grid item lg={3} sm={6}>
                <CardItem />
                </Grid>
                <Grid item lg={3} sm={6}>
                <CardItem />
                </Grid>
                <Grid item lg={3} sm={6}>
                <CardItem />
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item lg={3} sm={6}>
                <CardItem />
                </Grid>
                <Grid item lg={3} sm={6}>
                <CardItem />
                </Grid>
                <Grid item lg={3} sm={6}>
                <CardItem />
                </Grid>
                <Grid item lg={3} sm={6}>
                <CardItem />
                </Grid>
            </Grid>
        </main>
    )
}

export default Main