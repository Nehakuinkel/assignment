
import axios from "axios";
const Data = [
  {
    image: "../Assets/images/29.png",
    name: "Fresh Bananas (1 kg)",
    newPrice: 10,
    oldPrice: 12,
  },
  {
    image: "../Assets/images/14.png",
    name: "Apple",
    newPrice: 20,
    oldPrice: 32,
  },
];
export default Data;



// const allProducts = () => {
  
//   axios({
//     method: "get",
//     url: `https://uat.ordering-farmshop.ekbana.net/api/v4/product`,
//     params: {
//       allProduct: 1,
//     },
//     headers: {
//       "Api-key": process.env.REACT_APP_API_KEY,
//       "Warehouse-Id": 1,
//     },
//   }).then((response) => {
//     console.log("This is products data.")
//     console.log(response.data);
//   });
// }


