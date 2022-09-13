import Grid from "@mui/material/Grid";

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

function UPIPOSAndroid() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              {/* <Link to="/profile">
                <ComplexStatisticsCard color="dark" icon="Google" title="SIB Mirror +" />
              </Link> */}
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon="Apple" title="SIB UPI POS" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="Twitter"
                title="SIB Bharat QR Merchant App"
              />
            </MDBox> */}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* <MDBox mb={1.5}>
              <ComplexStatisticsCard color="primary" icon="Facebook" title="SIB BHIM Aadhaar Pay" />
            </MDBox> */}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="AddLocationAlt"
                title="Google Map reviews for each branch"
              />
            </MDBox> */}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="InsertEmoticon"
                title="TRIAL Sentiment Analysis"
              />
            </MDBox> */}
            <img src="http://127.0.0.6:5000/fig1.png" alt="icons" />;
            <img src="http://127.0.0.6:5000/fig2.png" alt="icons" />;
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid> */}
        </MDBox>
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

export default UPIPOSAndroid;
