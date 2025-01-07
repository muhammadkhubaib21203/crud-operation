import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
        <div>
          <NavLink
            to="/"
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
            Home
          </NavLink>
          <NavLink
            to="/all"
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
            All Users
          </NavLink>
          <NavLink
            to="/add"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "20px",
              color: "#ffffff",
              textDecoration: "none",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
            activeStyle={{ backgroundColor: "#00a676" }}
          >
            Add User
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
