import { AppBar, MenuItem, Toolbar, styled, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NavBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        color: theme.palette.primary.contrastText, // Ensure text is visible on dark background
    }));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobile) {
            handleDrawerToggle();
        }
    };

    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding onClick={() => scrollToSection(item.id)}>
                        <ListItemText primary={item.label} sx={{ textAlign: 'center', cursor: 'pointer' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="absolute" color="transparent" elevation={0}>
            <StyledToolbar>
                <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push items to center/right or just keep layout clean */}
                
                {isMobile ? (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {navItems.map((item) => (
                            <MenuItem key={item.label} onClick={() => scrollToSection(item.id)} sx={{ color: 'inherit' }}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Box>
                )}
            </StyledToolbar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    )
}

export default NavBar;
