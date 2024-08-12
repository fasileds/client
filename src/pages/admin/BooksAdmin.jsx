/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SideBar from "../../components/sidBar/SideBar";
import NavBar from "../../components/NavBar";
import { useSelector } from "react-redux";
import axios from "axios";
import { Navigate } from "react-router-dom";

// Flex container styles
const homeContainerStyles = css`
  display: flex;
  height: 100vh;
`;

const homeComponentsStyles = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const customSwitchStyles = css`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align the switch to the right */
  width: 150px;
  height: 25px;
  padding: 10px 14px 9px 15px;
  background: rgba(0, 128, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  gap: 0px;
  color: black;
  transition: background-color 0.3s ease;

  &.active {
    background: rgba(0, 128, 0, 0.7); /* Green background when active */
  }
`;

const customSwitchButtonStyles = css`
  width: 30px;
  height: 35px;
  background-color: #008000; /* Green color for the button */
  border-radius: 50%;
  position: absolute;
  color: black;
  top: 1px;
  right: 1px; /* Align the button to the right */
  transition: transform 0.3s ease, background-color 0.3s ease;

  .active & {
    transform: translateX(
      calc(100% - 140px)
    ); /* Translate the button to the left */
    background-color: white; /* White button when active */
  }
`;

const labelStyles = css`
  color: black;
  font-size: 16px;
  margin-right: auto;
  margin-left: 10px; /* Add some space between label and button */
`;

const avatarStyles = css`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ddd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export default function BooksAdmin() {
  const [books, setBooks] = useState([]);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/book", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getBooks();
  }, [token]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  const handleOnclick = async (id, currentIsApproved) => {
    try {
      // Toggle the isApproved status
      const updatedIsApproved = !currentIsApproved;
      // Determine the new isAvailable status based on the updated isApproved status

      await axios.put(`http://localhost:3001/api/book/chaked/${id}`, {
        isAproved: updatedIsApproved,
      });

      // Update the local state to reflect the changes
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id
            ? {
                ...book,
                isApproved: updatedIsApproved,
              }
            : book
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div css={homeContainerStyles}>
      <SideBar />
      <div css={homeComponentsStyles}>
        <NavBar />
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell align="right">Author</TableCell>
                  <TableCell align="right">Owner</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Book Name</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.author}</TableCell>
                    <TableCell align="right">
                      <img
                        css={avatarStyles}
                        src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                      {row.owner.name}
                    </TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="center">
                      <div
                        css={customSwitchStyles}
                        className={row.isApproved ? "active" : ""}
                        onClick={() => handleOnclick(row.id, row.isApproved)}
                      >
                        <span css={labelStyles}>Active</span>
                        <div css={customSwitchButtonStyles} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
