const axios = require('axios');
//const url = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=3d97b3b7cc808102c7be63d0abb7ba45`
  
// axios({
//   method : "get",
//   url : "https://finalspaceapi.com/api/v0/character/?limit=2",
//   responseType : "json",
//   }).then((response) => {
//     console.log(response.data);
//   })

// const fs =  require('fs');

// axios({
//   method:"get",
//   url:"https://images.unsplash.com/photo-1642291555390-6a149527b1fa",
//   responseType : "stream"
// })
// .then((response) => {
//   response.data.pipe(fs.createWriteStream('nature.jpg'));
// })

// const getCharacters = async() => {
//   const response = await axios.get(
//     "https://finalspaceapi.com/api/v0/character/?limit=2"
//   );
//   console.log(response.data);
// }
// getCharacters();


// const url = require("url");
// const queryParams = {
//   limit:1,
//   sort: "desc",
// };
// const params = new url. URLSearchParams(queryParams);
// console.log(params);
// axios
//   .get(`https://finalspaceapi.com/api/v0/character/?${params}`)
//   .then(function (response) {
//     console.log(response.data);
//   });


// require('dotenv').config();
// axios
//   .get(
//     `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
//   )
//   .then((response) => {
//     console.log(response.data);
//   })

//With API key and params option

// require('dotenv').config();
// axios({
//   method : "get",
//   url : `https://api.nasa.gov/planetary/apod`,
//   params : {
//     api_key: process.env.NASA_API_KEY,
//   },
// }).then((response) => {
//   console.log(response.data)
// });

// axios({
//   method: "get",
//   url: "<ENDPOINT>",
//   headers: {
//     Authorization: `Bearer ${process.env.TOKEN}`,
//   },
// }).then((response) => {
//   console.log(response.data);
// });

// Axios.all()
// const endpoints = [
//   "https://rickandmortyapi.com/api/character",
//   "https://www.breakingbadapi.com/api/characters",
//   "https://www.breakingbadapi.com/api/episodes",
//   "https://www.breakingbadapi.com/api/quotes",
// ];
// axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((allResponses) => {
//     allResponses.forEach((response) => {
//     console.log(response.data);
//   });
// });

// Error Handling in Axios

// axios
//   .get("https://rickandmortyapi.com/api/character/-1")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     if (error.response) {
//       console.error(error.response.data);
//       console.error(error.response.status);
//       console.error(error.response.headers);
//     } else if (error.request) {
//       console.error(error.request);
//     } else {
//       console.error("Error", error.message);
//     }
//   });

// Error Handling with validateStatus option
// axios
//   .get("https://rickandmortyapi.com/api/character/-1", {
//     validateStatus: function (status) {
//       return status < 500; // Reject only if the status code is less than 500
//     },
//   })
//   .then((response) => {
//     console.log(response.data);
//   });


// Axios Head Request
// axios.head("https://rickandmortyapi.com/api/character/1").then((response) => {
//   console.log(
//     `Status: ${response.status} - Server: ${response.headers.server} - Data: ${response.data}`
//   );
// });



const url = `https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1`;
// require('dotenv').config();
// axios
//   .get(
//     `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
//   )
//   .then((response) => {
//     console.log(response.data);
//   })



//   require('dotenv').config();
// axios({
//   method : "get",
//   url : `https://uat.ordering-farmshop.ekbana.net/api/v4/home?api_key=${process.env.API_KEY}`,
// }).then((response) => {
//   console.log(response.data)
// });


// const fetchQuotes = async () => {
// 	const config = {
// 		headers: {
// 			'x-api-key': process.env.API_KEY
// 		}
// 	};
// 	const res = await axios.get(
// 		url,
// 		config
// 	);
// 	console.log(res.data);
// };

// fetchQuotes()























































































































