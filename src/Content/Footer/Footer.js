import { Box, Grid, Link, Container, Typography } from "@material-ui/core"
const Footer = (props) => {
    return (
        <div className="footer">
            <Box bgcolor="text.secondary" color="white" marginTop={4}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid>
                            <div className="footer-container">
                                <Box borderBottom={1}>Footer</Box>
                                <Box>
                                    <Typography>Контактная информация есть в резюме</Typography>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Footer