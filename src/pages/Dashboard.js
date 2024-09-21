// src/pages/Dashboard.js

import React from "react";
import { Grid } from "@mui/material";
import Layout from "../components/Layout/Layout"; // Adjust path
import LoanStatsChart from "../components/LoanStatsChart/LoanStatsChart"; // Adjust path
import RecentTransactions from "../components/RecentTransactions/RecentTransactions"; // Adjust path
import MetricCard from "../components/MetricCard/MetricCard"; // Adjust path
import PieChart from "../components/PieChart/PieChart"; // Adjust path
import BarChart from "../components/BarChart/BarChart"; // Adjust path
import DateRangeSelector from "../components/DateRangePicker/DateRangePicker"; // Adjust path

const Dashboard = () => {
  return (
    <Layout>
      <Grid container spacing={3}>
        {/* Metric Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard title="Active Members" value="120" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <MetricCard title="Pending Loans" value="45" />
        </Grid>

        {/* Loan Stats Chart */}
        <Grid item xs={12} md={8}>
          <DateRangeSelector />
          <LoanStatsChart />
        </Grid>

        {/* Recent Transactions */}
        <Grid item xs={12} md={4}>
          <RecentTransactions />
        </Grid>

        {/* Charts */}
        <Grid item xs={12} md={6}>
          <PieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BarChart />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Dashboard;
