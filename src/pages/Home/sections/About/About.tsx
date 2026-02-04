import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const About = () => {
    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                         <Box>
                            <Typography variant="h3" gutterBottom color="primary">
                                About Me
                            </Typography>
                            <Typography variant="body1" paragraph lineHeight={1.8}>
                                Hello! I'm Hillary Cavalcante Siolin, a passionate developer who loves turning ideas into reality through code. 
                                My journey in technology is driven by curiosity and the desire to build meaningful solutions.
                            </Typography>
                            <Typography variant="body1" paragraph lineHeight={1.8}>
                                When I'm not coding, you can find me exploring new technologies, gaming, or learning about the latest trends in the tech world.
                            </Typography>
                         </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 2 }}>
                            <Typography variant="h4" gutterBottom color="secondary">
                                Professional Life
                            </Typography>
                            <Typography variant="body1" paragraph lineHeight={1.8}>
                                As a Full Stack Developer, I have experience working with a variety of technologies including React, Python (Django), PHP (Laravel), and JavaScript.
                            </Typography>
                            <Typography variant="body1" paragraph lineHeight={1.8}>
                                I've worked on diverse projects ranging from web games to management systems like pharmacy stock control and car wash dashboards. 
                                My goal is to create efficient, scalable, and user-friendly applications that solve real-world problems.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default About;
