import React from "react";
import { Paper, Typography } from "@mui/material";
import "./MetricCard.css";

const MetricCard = ({ title, value }) => {
  return (
    <Paper className="metric-card">
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
};

export default MetricCard;
