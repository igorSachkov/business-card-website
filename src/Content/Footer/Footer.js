import { Box, Grid, Link, Container} from "@material-ui/core"
const Footer = (props) => {
    return (
        <div className="footer">
            <Box bgcolor="text.secondary" color="white" marginTop={4}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid irem xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/">Some</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Footer