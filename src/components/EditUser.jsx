import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { getUser, editUser } from "../service/api";

const initialValues = {
  name: "",
  username: "",
  status: "",
  email: "",
  phone: "",
  salary: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await editUser(user, id);
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
        padding: "20px",
      }}
    >
      <FormGroup
        sx={{
          width: "50%",
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
          Edit User
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
            value={user.name}
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
            required
            id="username"
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
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
            value={user.status}
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
            required
            id="email"
            type="email"
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
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
            value={user.phone}
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
            value={user.salary}
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
            Edit User
          </Button>
        </FormControl>
      </FormGroup>
    </Box>
  );
};

export default EditUser;
