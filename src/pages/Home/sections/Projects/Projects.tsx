import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeMasterImg from "../../../../assets/images/codemaster.png";
import AdminJogoImg from "../../../../assets/images/administracao.png";
import QrCodeImg from "../../../../assets/images/qrcode.png";


const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "CodeMaster",
            description: "A web game developed as a Capstone Project (TCC) using JavaScript. An interactive and engaging experience.",
            image: CodeMasterImg,
            link: "https://github.com/HSiolin/codemaster"
        },
        {
            id: 2,
            title: "Admin Jogo",
            description: "Administration panel for game management. Allows control of users, settings and game data.",
            image: AdminJogoImg,
            link: "https://github.com/HSiolin/admin-jogo"
        },
        {
            id: 3,
            title: "Farmacia",
            description: "Pharmacy management system developed with Laravel (PHP). Includes stock control and sales.",
            image: "https://placehold.co/600x400?text=Farmacia",
            link: "https://github.com/HSiolin/farmacia"
        },
        {
            id: 4,
            title: "LavaJato Django",
            description: "Management dashboard for Car Wash built with Python and Django. Modern interface and complete management features.",
            image: "https://placehold.co/600x400?text=LavaJato+Django",
            link: "https://github.com/HSiolin/LavaJato_Django"
        },
        {
            id: 5,
            title: "Animação com Keyframes",
            description: "CSS animation project demonstrating the power of Keyframes for creating engaging visual effects.",
            image: "https://placehold.co/600x400?text=Keyframes+Animation",
            link: "https://github.com/HSiolin/Anima-o-com-keyframes"
        },
        {
            id: 6,
            title: "QRCODE Generator",
            description: "Simple tool to generate QR Codes instantly. Useful for sharing links and information quickly.",
            image: QrCodeImg,
            link: "https://github.com/HSiolin/QRCODE"
        }
    ];

    return (
        <Box sx={{ py: 8, bgcolor: 'background.default' }}>
             <Container maxWidth="lg">
                <Typography variant="h3" textAlign="center" gutterBottom>
                    Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small" 
                                        startIcon={<GitHubIcon />} 
                                        href={project.link} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
             </Container>
        </Box>
    )
}

export default Projects;
