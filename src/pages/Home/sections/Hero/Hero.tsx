import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "#eaeaea",
    height: "100vh",
  }));

  const StyledImage = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={4}>
              <StyledImage src={Avatar} />
            </Grid>
            <Grid size={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Hillary Cavalcante Siolin
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Desenvolvedora FullStack
              </Typography>
            </Grid>

              <Grid size={10} xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <DownloadIcon />
                  Download CV
                </Button>
              </Grid>

              <Grid size={2} xs={12} md={4} display="flex" justifyContent="center">
                <Button>
                  <MailOutlineIcon />
                  Contato
                </Button>
              </Grid>

            </Grid>
          
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
