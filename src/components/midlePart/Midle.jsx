/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { css } from "@emotion/react";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 80vh;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #f5f5f5;
  gap: 20px;
`;

const topMidleStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const montheStyle = css`
  font-size: 22px;
  color: #333;
`;

const dateStyle = css`
  font-size: 14px;
  color: #777;
`;

const midleMidleStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 250px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  gap: 20px;
  box-sizing: border-box;
`;

const midleCompantStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: #e0e0e0;
  color: #606060;
`;

const midleComponentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const midleComponentH1Style = css`
  font-size: 24px;
  color: #333;
  margin: 10px 0;
`;

const midleComponentSpanStyle = css`
  color: #606060;
`;

const midleComStyle = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const lastOneStyle = css`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const lastOneButtonStyle = css`
  border: none;
  background-color: #e0e0e0;
  color: #606060;
  height: 30px;
  border-radius: 4px;
  padding: 0 12px;
  cursor: pointer;
  font-size: 14px;
`;

const chartWrapStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Midle = () => {
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.user.id);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/owners/ownersStatuse/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Assuming `token` is your JWT token
            },
          }
        );
        // Assuming `res.data.booksPerCategory` is the relevant part of the response
        setStatus(res.data.booksPerCategory || []);
        setTotal(res.data.totalBalance);
      } catch (error) {
        console.log(error);
      }
    };
    getStatus();
  }, [userId, token]);

  if (!token) {
    return <Navigate to="/" replace />;
  }
  console.log(status.categoryName);

  // Convert status data to chart data format
  const chartData = status.map((item) => ({
    name: item.categoryName || "Unknown", // Assuming you have categoryName in your data
    data: item.count || 0, // Assuming you have count in your data
  }));

  const options = {
    chart: {
      type: "donut",
    },
    labels: chartData.map((data) => data.name),
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
    },
  };

  const series = chartData.map((data) => data.data);
  const now = new Date();
  const formattedDate = now.toLocaleString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div css={containerStyle}>
      <div css={topMidleStyle}>
        <span css={montheStyle}>This Month Statistics</span>
        <span css={dateStyle}>{formattedDate}</span>
      </div>
      <div css={midleMidleStyle}>
        <div css={midleCompantStyle}>
          <span>Income</span>
          <div>
            <span>This Month</span>
          </div>
        </div>
        <div css={midleComponentStyle}>
          <h1 css={midleComponentH1Style}>ETB{total}</h1>
          <span css={midleComponentSpanStyle}>
            compared to ETB{total} last month
          </span>
          <div css={midleComStyle}>
            <span>Last Month Income</span>
            <span>ETB {total}</span>
          </div>
        </div>
      </div>
      <div css={chartWrapStyle}>
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={250}
        />
      </div>
    </div>
  );
};

export default Midle;
