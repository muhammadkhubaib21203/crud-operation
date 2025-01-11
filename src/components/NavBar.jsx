import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "All Users", path: "/all" },
    { label: "Add User", path: "/add" },
  ];

  const drawerList = (
    <List sx={{ width: 250 }}>
      {navItems.map((item) => (
        <ListItem button key={item.label}>
          <NavLink
            to={item.path}
            style={{
              textDecoration: "none",
              color: "#111111",
              width: "100%",
              fontSize: "18px",
            }}
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary={item.label} />
          </NavLink>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      sx={{
        backgroundColor: "#111111",
        position: "static",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.7)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "bolder",
            color: "#00a676",
          }}
        >
          HKIT
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="success"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              {drawerList}
            </Drawer>
          </>
        ) : (
          <div>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "20px",
                  marginRight: "20px",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
                activeStyle={{ backgroundColor: "#00a676" }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
