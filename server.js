const path = require("path");
const express = require("express");
const Axios = require("axios");

const app = express();
// const DIST_DIR = path.join(__dirname, "/dist");
// const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static("./dist"));
app.get("*", (req, res) => {
  res.sendFile("./dist/index.html");
});

const PORT = process.env.PORT || 8080;

// Axios.get(
//   "https://apps.dspim.com/DSPAPPUAT/app_api/index.php/Analysis/activeEmployees",
//   {
//     auth: {
//       username: "DSP0282",
//       password: "1100",
//     },
//     headers: {
//       "x-api-key": "owowg0kkg440wssgoswgwgc4sowgcoskgsksokw8",
//     },
//   }
// )
//   .then(function (response) {
//     // console.log("activeEmployees", response.data);
//   })
//   .catch(function (error) {
//     // console.log(error);
//   });
// Axios.get(
//   "https://apps.dspim.com/DSPAPPUAT/app_api/index.php/Analysis/isBrokerAvailable",
//   {
//     auth: {
//       username: "DSP0282",
//       password: "1100",
//     },
//     headers: {
//       "x-api-key": "owowg0kkg440wssgoswgwgc4sowgcoskgsksokw8",
//     },
//   }
// )
//   .then(function (response) {
//     //BROKER_CODE Available API – Check Availibity API Call & Screenshots.
//     // console.log("BROKER_CODE ", response.data);
//   })
//   .catch(function (error) {
//     // console.log(error);
//   });

// Axios.get(
//   "https://apps.dspim.com/DSPAPPUAT/app_api/index.php/Analysis/analysisData",
//   {
//     auth: {
//       username: "DSP0282",
//       password: "1100",
//     },
//     headers: {
//       "x-api-key": "owowg0kkg440wssgoswgwgc4sowgcoskgsksokw8",
//     },
//   }
// )
//   .then(function (response) {
//     //Arn code
//     // console.log("Arn code", response.data);
//   })
//   .catch(function (error) {
//     // console.log(error);
//   });
app.listen(PORT, () => {
  console.log(PORT, "Server Listen ");
});
