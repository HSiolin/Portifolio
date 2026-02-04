import { Button, styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const StyledButtonRoot = styled(Button)(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    }
}));

const StyledButton = ({ children, onClick }: StyledButtonProps) => {
    return (
        <StyledButtonRoot onClick={onClick}>
            {children}
        </StyledButtonRoot>
    )
}

export default StyledButton;
