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

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox
              mb={1.5}
              component={Link}
              to="/screens/SIBMirrorPlusAndroid"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              <ComplexStatisticsCard color="dark" icon="Google" title="SIB Mirror + Android" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox
              mb={1.5}
              component={Link}
              to="/screens/UPIPOSAndroid"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              <ComplexStatisticsCard icon="Google" title="SIB UPI POS" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox
              mb={1.5}
              component={Link}
              to="/screens/BharatQRMerchantAppAndroid"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              <ComplexStatisticsCard
                color="success"
                icon="Google"
                title="SIB Bharat QR Merchant App"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox
              mb={1.5}
              component={Link}
              to="/screens/BHIMAadhaarPayAndroid"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              <ComplexStatisticsCard color="primary" icon="Google" title="SIB BHIM Aadhaar Pay" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox
              mb={1.5}
              component={Link}
              to="/screens/HRMSAndroid"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              <ComplexStatisticsCard color="primary" icon="Google" title="HRMS" />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} />
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="website views"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid> */}
            <Grid item xs={12} md={6} lg={4}>
              {/* <MDBox mb={3}>
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
              </MDBox> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox> */}
            </Grid>
          </Grid>
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

export default Dashboard;
