import { Box, Container, Grid, Typography, TextField, Button, Paper } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return (
        <Box sx={{ py: 10, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Contact Me
                </Typography>
                <Grid container spacing={5} justifyContent="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Typography variant="h5" gutterBottom>
                            Connect with me
                        </Typography>
                        <Typography variant="body1" paragraph>
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </Typography>
                        <Box display="flex" gap={2} mt={2}>
                            <Button startIcon={<MailOutlineIcon />} variant="contained" color="secondary" href="mailto:email@example.com">
                                Email
                            </Button>
                            <Button startIcon={<LinkedInIcon />} variant="contained" color="secondary" href="https://linkedin.com" target="_blank">
                                LinkedIn
                            </Button>
                            <Button startIcon={<GitHubIcon />} variant="contained" color="secondary" href="https://github.com/HSiolin" target="_blank">
                                GitHub
                            </Button>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.paper' }}>
                             <Typography variant="h5" gutterBottom color="text.primary">
                                Send a Message
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12 }}>
                                    <TextField label="Name" fullWidth variant="outlined" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField label="Email" fullWidth variant="outlined" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextField label="Message" fullWidth multiline rows={4} variant="outlined" />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Contact;
