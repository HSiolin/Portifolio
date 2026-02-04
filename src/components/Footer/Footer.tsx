import { Box, Container, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6 }}>
            <Container maxWidth="lg">
                <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
                    <Link href="#" color="inherit">
                        <GitHubIcon />
                    </Link>
                    <Link href="#" color="inherit">
                        <LinkedInIcon />
                    </Link>
                </Stack>
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} Hillary Cavalcante Siolin. All rights reserved.
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer;
