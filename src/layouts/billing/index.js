/* eslint-disable no-nested-ternary */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";

import "./style.css";
import Sentiment from "sentiment";
import DashboardNavbar from "../../examples/Navbars/DashboardNavbar";
import Positiveimg from "../../assets/images/emoji_1.gif";
import Negativeimg from "../../assets/images/sad_emoji.gif";
import Neutralimg from "../../assets/images/no_express.gif";

const sentiment = new Sentiment();

function Billing() { 
  const [phrase, setphrase] = useState("");
  const [score, setscore] = useState(null);

  useEffect(() => {
    setscore(sentiment.analyze(phrase));
  }, [phrase]);
  return (
    <div className="main">
    <DashboardNavbar />

      <div className="main-container">
        <h3 className="heading">Sentiment Analysis</h3>
        <input value={phrase} className="inputbox" onChange={(e) => setphrase(e.target.value)} />
        <div className="scorecard">
          {score !== null ? <p>Sentiment Score: {score.score}</p> : ""}
        </div>
        <div className='img-container'>
            {
              score ? 
                  score.score===0? <img src={Neutralimg} className='image' alt='neutral'></img> :
                     score.score >0? <img src={Positiveimg} className='image' alt='positive'></img> :
                     <img src={Negativeimg} className='image' alt='negative'></img>
              :""
            }
            </div>
      </div>
    </div>
  );
}

export default Billing;




































// /**
// =========================================================
// * Material Dashboard 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // @mui material components
// import Grid from "@mui/material/Grid";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// // Material Dashboard 2 React examples
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// // Billing page components
// import PaymentMethod from "layouts/billing/components/PaymentMethod";
// import Invoices from "layouts/billing/components/Invoices";
// import BillingInformation from "layouts/billing/components/BillingInformation";
// import Transactions from "layouts/billing/components/Transactions";

// function Billing() {
//   return (
//     <DashboardLayout>
//       <DashboardNavbar absolute isMini />
//       <MDBox mt={8}>
//         <MDBox mb={3}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} lg={8}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} xl={6}>
//                   <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
//                 </Grid>
//                 <Grid item xs={12} md={6} xl={3}>
//                   <DefaultInfoCard
//                     icon="account_balance"
//                     title="salary"
//                     description="Belong Interactive"
//                     value="+$2000"
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6} xl={3}>
//                   <DefaultInfoCard
//                     icon="paypal"
//                     title="paypal"
//                     description="Freelance Payment"
//                     value="$455.00"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <PaymentMethod />
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item xs={12} lg={4}>
//               <Invoices />
//             </Grid>
//           </Grid>
//         </MDBox>
//         <MDBox mb={3}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={7}>
//               <BillingInformation />
//             </Grid>
//             <Grid item xs={12} md={5}>
//               <Transactions />
//             </Grid>
//           </Grid>
//         </MDBox>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Billing;
