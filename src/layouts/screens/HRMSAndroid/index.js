import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Axios from "axios";
import { Form } from "react-bootstrap";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function HRMSAndroid() {
  const { sales, tasks } = reportsLineChartData;

  const url = "http://127.0.0.11:5000/MainMenu";
  const [data, setData] = useState({
    name: "",
    date: "",
    iduser: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      date: data.date,
      iduser: data.iduser,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <Link to="/profile">
                <ComplexStatisticsCard color="dark" icon="Google" title="SIB Mirror +" />
              </Link>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon="Apple" title="SIB UPI POS" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="Twitter"
                title="SIB Bharat QR Merchant App"
              />
            </MDBox>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            {/* <MDBox mb={1.5}>
              <ComplexStatisticsCard color="primary" icon="Facebook" title="SIB BHIM Aadhaar Pay" />
            </MDBox> */}
            <Form onsubmit={(e) => submit(e)}>
              <input
                onChange={(e) => handle(e)}
                id="name"
                value={data.name}
                placeholder="name"
                type="text"
              />
              <input
                onChange={(e) => handle(e)}
                id="date"
                value={data.date}
                placeholder="date"
                type="text"
              />
              <input
                onChange={(e) => handle(e)}
                id="iduser"
                value={data.iduser}
                placeholder="iduser"
                type="text"
              />
              <Button>Submit</Button>
            </Form>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            {/* <img src="http://127.0.0.6:5000/fig1.png" alt="icons" />;
            <img src="http://127.0.0.6:5000/fig2.png" alt="icons" />; */}
          </Grid>
        </Grid>
        <MDBox mt={4.5} />
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              {/* <Projects /> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <OrdersOverview /> */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default HRMSAndroid;
