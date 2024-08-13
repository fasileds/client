/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ComputerIcon from "@mui/icons-material/Computer";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/user";

export default function SideBar({ type }) {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const handleOnClick = async (event) => {
    event.preventDefault();
    dispatch(logOut());
    setSuccess(true);
    console.log("clicked");
  };

  if (success) {
    return <Navigate to="/" replace />;
  }

  return (
    <div css={sideBarStyle}>
      <div css={sideBarTopStyle}>
        <span css={topIconStyle}>
          <DehazeIcon />
        </span>
        <img src="/logo.png" css={imageStyle} alt="the image is not here" />
        <span css={{ color: "#00ABFF" }}>Book Rent</span>
      </div>

      <div css={lineStyle}></div>

      <div css={sliderMiddleComponentStyle}>
        {type === "owner" ? (
          <Link to="/owner">
            <div css={sliderButtonStyle}>
              <span css={{ marginRight: 15 }}>
                <SpaceDashboardIcon />
              </span>
              <span>Dashboard</span>
            </div>
          </Link>
        ) : (
          <Link to="/admin">
            <div css={sliderButtonStyle}>
              <span css={{ marginRight: 15 }}>
                <SpaceDashboardIcon />
              </span>
              <span>Dashboard</span>
            </div>
          </Link>
        )}
        <div>
          <ul css={listContainerStyle}>
            {type === "owner" ? (
              <div>
                <Link to="/owner/upload">
                  <li css={middleListStyle} style={{ marginBottom: 10 }}>
                    <ComputerIcon />
                    <span>Book Uploaded</span>
                  </li>
                </Link>
                <li css={middleListStyle}>
                  <AddCircleOutlineIcon />
                  <span>Others</span>
                </li>
              </div>
            ) : (
              <div>
                <Link to="/admin/books">
                  <li css={middleListStyle} style={{ marginBottom: 10 }}>
                    <ComputerIcon />
                    <span>Books</span>
                  </li>
                </Link>
                <Link to="/admin/owners">
                  <li css={middleListStyle}>
                    <AddCircleOutlineIcon />
                    <span>Owners</span>
                  </li>
                </Link>
              </div>
            )}
            <li css={middleListStyle}>
              <AddCircleOutlineIcon />
              <span>Others</span>
            </li>
            <li css={middleListStyle}>
              <AddCircleOutlineIcon />
              <span>Others</span>
            </li>
          </ul>
        </div>
        <div css={lineStyle}></div>
        <div>
          <ul css={listContainerStyle}>
            <li css={middleListStyle}>
              <ComputerIcon />
              <span>Notification</span>
            </li>
            <li css={middleListStyle}>
              <SettingsIcon />
              <span>Settings</span>
            </li>
            <li css={middleListStyle}>
              {type === "owner" ? (
                <Link to="/admin/login">
                  <span css={{ marginRight: 15 }}>
                    <AccountCircleOutlinedIcon />
                  </span>
                  <span>LogIn as admin</span>
                </Link>
              ) : (
                <span></span>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div css={logOutButtonStyle}>
        <LoginIcon />
        <button onClick={handleOnClick} css={logoutButtonStyle}>
          Logout
        </button>
      </div>
    </div>
  );
}

// Emotion CSS styles
const sideBarStyle = css`
  margin: 10px 10px 20px 10px;
  display: flex;
  height: 100vh;
  background-color: #1b213b;
  width: 300px;

  flex-direction: column;
  align-items: flex-start;
  color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const sideBarTopStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

const topIconStyle = css`
  cursor: pointer;
`;

const imageStyle = css`
  margin-left: 20px;
  margin-right: 10px;
  width: 40px;
  height: auto;
`;

const lineStyle = css`
  width: 100%;
  height: 0.2px;
  background-color: silver;
  margin: 20px 0;
`;

const sliderMiddleComponentStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const sliderButtonStyle = css`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #00aaff;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0099cc;
  }
`;

const listContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const middleListStyle = css`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  color: silver;
  text-decoration: none;
  transition: background-color 0.3s ease;
  padding: 10px 20px;

  &:hover {
    background-color: #0099cc;
    border-radius: 5px;
    padding: 10px;
    color: #ffffff;
  }
`;

const logOutButtonStyle = css`
  width: 94%;
  align-items: center;
  padding: 10px 50px;
  margin: auto;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const logoutButtonStyle = css`
  border: none;
  background: none;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
`;
