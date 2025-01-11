import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";

const initialValues = {
  name: "",
  username: "",
  status: "",
  email: "",
  phone: "",
  salary: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const isFormFill = Object.values(user).every((field) => field.trim() !== "");

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "#121212",
        padding: { xs: "20px", sm: "40px" },
      }}
    >
      <FormGroup
        sx={{
          width: { xs: "100%", sm: "100%", lg: "50%" },
          backgroundColor: "#1b1b1b",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#00a676",
          }}
        >
          Add User
        </Typography>

        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="name" sx={{ color: "#b3b3b3" }}>
            Name
          </InputLabel>
          <Input
            id="name"
            required
            onChange={(e) => onValueChange(e)}
            name="name"
            sx={{
              color: "#ffffff",
              borderBottom: "2px solid #00a676",
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "#008f5a",
              },
            }}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="username" sx={{ color: "#b3b3b3" }}>
            Username
          </InputLabel>
          <Input
            id="username"
            required
            onChange={(e) => onValueChange(e)}
            name="username"
            sx={{
              color: "#ffffff",
              borderBottom: "2px solid #00a676",
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "#008f5a",
              },
            }}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "20px" }} variant="standard">
          <InputLabel
            htmlFor="username"
            sx={{ color: "#b3b3b3", paddingLeft: "15px" }}
          >
            Status
          </InputLabel>
          <Select
            type="dropdown"
            id="status"
            required
            onChange={(e) => onValueChange(e)}
            name="status"
            sx={{
              color: "#ffffff",
              border: "none",
              borderBottom: "2px solid #00a676",
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "#008f5a",
              },
            }}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="InActive">InActive</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="email" sx={{ color: "#b3b3b3" }}>
            Email
          </InputLabel>
          <Input
            id="email"
            required
            onChange={(e) => onValueChange(e)}
            name="email"
            type="email"
            sx={{
              color: "#ffffff",
              borderBottom: "2px solid #00a676",
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "#008f5a",
              },
            }}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="phone" sx={{ color: "#b3b3b3" }}>
            Phone
          </InputLabel>
          <Input
            required
            id="phone"
            onChange={(e) => onValueChange(e)}
            name="phone"
            type="number"
            sx={{
              color: "#ffffff",
              borderBottom: "2px solid #00a676",
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "#008f5a",
              },
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
            }}
          />
        </FormControl>

        <FormControl sx={{ marginBottom: "20px" }}>
          <InputLabel htmlFor="company" sx={{ color: "#b3b3b3" }}>
            Salary
          </InputLabel>
          <Input
            required
            id="salary"
            onChange={(e) => onValueChange(e)}
            name="salary"
            type="number"
            sx={{
              color: "#ffffff",
              borderBottom: "2px solid #00a676",
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "#008f5a",
              },
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                {
                  display: "none",
                },
            }}
          />
        </FormControl>

        <FormControl>
          <Button
            onClick={() => addUserDetails()}
            variant="contained"
            disabled={!isFormFill}
            sx={{
              backgroundColor: "#00a676",
              "&:hover": {
                backgroundColor: "#008f5a",
              },
              fontSize: "16px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            Add User
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default AddUser;
