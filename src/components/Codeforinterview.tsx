import React from "react";
import { Box, Typography } from "@mui/material";

const Codeforinterview = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "86vh",
        backgroundColor: "#121212",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
        '@media (max-width: 600px)': { 
          minHeight: '86vh',
          padding: '10px',
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#00a676",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          letterSpacing: "2px",
          fontSize: {
            xs: "2.5rem", 
            sm: "3rem", 
            md: "3.5rem",
          },
        }}
      >
        Welcome to HKIT
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: "30px",
          color: "#b3b3b3",
          lineHeight: "1.8",
          maxWidth: "850px",
          fontSize: {
            xs: "1rem",  
            sm: "1.2rem", 
            md: "1.5rem", 
          },
        }}
      >
        Transform the way you manage user information with our intuitive and
        feature-rich platform. Seamlessly add, edit, and view user details with
        just a few clicks. Let's make user management smarter and more
        efficient together!
      </Typography>
    </Box>
  );
};

export default Codeforinterview;
