/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CurtainsClosedOutlinedIcon from "@mui/icons-material/CurtainsClosedOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Tables() {
  const [books, setBooks] = useState([]);
  const token = useSelector((state) => state.user.token);
  const [serchText, setSerchText] = useState("");
  const userId = useSelector((state) => state.user.user.id);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/book/getOwnersBook",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getBooks();
  }, [token]);

  const handleDelate = async (bookId) => {
    try {
      await axios.delete(
        `http://localhost:3001/api/book/deleteBook/${bookId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Refresh books after deletion
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/book/searchBooks`,
        {
          params: {
            title: serchText || "", // Ensure params are strings or empty if not provided
            category: serchText || "",
            author: serchText || "",
          },
        }
      );
      console.log(res.data); // Debug response data
      setBooks(res.data);
    } catch (error) {
      console.error("Error searching for books:", error);
    }
  };

  return (
    <div css={tableContainerStyle}>
      <div css={tableFirstStyle}>
        <input
          type="text"
          onChange={(e) => setSerchText(e.target.value)}
          css={inputStyle}
          placeholder="Search..."
        />
        <div>
          <button onClick={handleSearch}>
            <SearchOutlinedIcon aria-label="Search" />
          </button>
          <SpaceDashboardIcon aria-label="Dashboard" />
          <CurtainsClosedOutlinedIcon aria-label="Close" />
        </div>
      </div>
      <div>
        <h2>Live Book Status</h2>
      </div>
      <div css={tableWrapperStyle}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="books table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Book Name</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="center">{item.author}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="center">{item.amount}</TableCell>
                  <TableCell align="center">
                    {item.isRented ? (
                      <div css={flexRowStyle}>
                        <div
                          css={rentedIndicatorStyle}
                          aria-label="Rented"
                        ></div>
                        <span css={rentedTextStyle}>Rented</span>
                      </div>
                    ) : (
                      <div css={flexRowStyle}>
                        <div
                          css={availableIndicatorStyle}
                          aria-label="Not Rented"
                        ></div>
                        <span css={availableTextStyle}>Not Rented</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <RemoveRedEyeIcon
                      style={{ cursor: "pointer" }}
                      aria-label="View"
                    />
                    <button
                      onClick={() => handleDelate(item.id)}
                      aria-label="Delete"
                    >
                      <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

const tableContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const tableFirstStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const inputStyle = css`
  height: 30px;
  width: 200px; /* Adjusted width for better fit */
  border: none;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(156, 156, 156);

  &:focus {
    border: none;
    background-color: rgb(211, 211, 211);
  }
`;

const tableWrapperStyle = css`
  margin-top: 10px;
`;

const flexRowStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const rentedIndicatorStyle = css`
  height: 16px;
  width: 16px;
  background-color: #ff0000;
  border-radius: 50%;
  border: 2px solid #8b0000;
`;

const rentedTextStyle = css`
  color: #8b0000;
  font-weight: 500;
`;

const availableIndicatorStyle = css`
  height: 16px;
  width: 16px;
  background-color: #0000ff;
  border-radius: 50%;
  border: 1px solid #00008b;
`;

const availableTextStyle = css`
  color: #00008b;
  font-weight: 600;
`;
