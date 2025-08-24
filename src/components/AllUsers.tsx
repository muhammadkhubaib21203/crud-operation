import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../service/api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  };

  const handleSearch = async (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery)
  );

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        minHeight: "83vh",
        padding: "30px 20px",
        color: "#ffffff",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "bold",
          color: "#00a676",
        }}
      >
        All Users
      </Typography>

      <TextField
        placeholder="Search..."
        variant="outlined"
        value={searchQuery}
        autoComplete="off"
        onChange={handleSearch}
        sx={{
          width: { xs: "100%", sm: "100%", lg: "20%", md: "40%" },
          backgroundColor: "#1b1b1b",
          borderRadius: "5px",
          marginBottom: "20px",
          "& .MuiOutlinedInput-root": {
            color: "#ffffff",
            "& fieldset": {
              borderColor: "#00a676",
            },
            "&:hover fieldset": {
              borderColor: "#008f5a",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#00a676",
            },
          },
        }}
      />

      {!isMobile && (
        <Table
          sx={{
            width: "100%",
            margin: "0 auto",
            backgroundColor: "#1b1b1b",
            borderRadius: "10px",
            overflow: "hidden",
            borderCollapse: "separate",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#00a676" }}>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Id
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Username
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Status
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Phone
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Salary
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "18px" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: "#1e1e1e",
                  },
                  "&:nth-of-type(even)": {
                    backgroundColor: "#2b2b2b",
                  },
                }}
              >
                <TableCell sx={{ color: "#ffffff", fontSize: "16px" }}>
                  {user.id}
                </TableCell>
                <TableCell sx={{ color: "#ffffff", fontSize: "16px" }}>
                  {user.name}
                </TableCell>
                <TableCell sx={{ color: "#ffffff", fontSize: "16px" }}>
                  {user.username}
                </TableCell>
                <TableCell sx={{ color: "#ffffff", fontSize: "16px" }}>
                  {user.status}
                </TableCell>
                <TableCell sx={{ color: "#ffffff", fontSize: "16px" }}>
                  {user.email}
                </TableCell>
                <TableCell sx={{ color: "#ffffff", fontSize: "16px" }}>
                  {user.phone}
                </TableCell>
                <TableCell sx={{ color: "#ffffff", fontSize: "16px" }}>
                  {user.salary}
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: { lg: "10px" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00a676",
                      marginBottom: "10px",
                      "&:hover": {
                        backgroundColor: "#008f5a",
                      },
                      fontSize: "14px",
                      color: "#ffffff",
                    }}
                    component={Link}
                    to={`/edit/${user.id}`}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ fontSize: "14px", marginBottom: "10px" }}
                    onClick={() => deleteUserData(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {isMobile && (
        <Box sx={{ marginTop: "20px" }}>
          {filteredUsers.map((user) => (
            <Box
              key={user.id}
              sx={{
                backgroundColor: "#1b1b1b",
                marginBottom: "10px",
                padding: "15px",
                borderRadius: "5px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#ffffff", fontSize: "16px" }}
              >
                Name: {user.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#ffffff", fontSize: "14px" }}
              >
                Username: {user.username}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#ffffff", fontSize: "14px" }}
              >
                Status: {user.status}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#ffffff", fontSize: "14px" }}
              >
                Email: {user.email}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#ffffff", fontSize: "14px" }}
              >
                Phone: {user.phone}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#ffffff", fontSize: "14px" }}
              >
                Company: {user.company}
              </Typography>
              <Box sx={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00a676",
                    marginRight: "10px",
                    "&:hover": {
                      backgroundColor: "#008f5a",
                    },
                    fontSize: "14px",
                    color: "#ffffff",
                  }}
                  component={Link}
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ fontSize: "14px" }}
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AllUsers;
