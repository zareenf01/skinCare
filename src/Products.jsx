// import Serums from "./serums";
// import data from "./data.js";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     try {
//       const fetchData = async () => {
//         const response = await axios.get("http://localhost:3000/product/");
//         setProducts(response.data);
//         console.log(response.data);
//         setLoading(false);
//       };
//       fetchData();
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }, []);

//   console.log(data[0].id);
//   // const serums = data.map((data) => {
//   //   return (
//   //     <>
//   //       <Link key={data.id} to={`/${data.id}`}>
//   //         <Serums
//   //           key={data.id}
//   //           name={data.name}
//   //           price={data.price}
//   //           img={data.img}
//   //         />
//   //       </Link>
//   //     </>
//   //   );
//   // });

//   return (
//     <div className="bg-[#f2c48b] " id="Product">
//       <div className="flex flex-col justify-center items-center mt-10 md:flex-row">
//         <div className="flex flex-col justify-center items-center md:flex-row md:mt-24 border-b border-t pt-7 pb-5 border-black">
//           <div className="flex m-3 mx-10 items-center mt-24 md:mt-0">
//             <img src="/images/delivery.png" alt="" />
//             <h2
//               className="text-2xl font-medium min-w-full
//           mx-5"
//             >
//               Fast Delivery
//             </h2>
//           </div>

//           <div className="flex m-3 mx-10 ">
//             <img src="/images/payment.png" alt="" />
//             <h2 className="text-2xl font-medium mx-5">Secure Payments</h2>
//           </div>

//           <div className="flex m-3 mx-10 justify-center">
//             <img src="/images/return.png" alt="" />
//             <h2 className="text-2xl font-medium mx-5">Return Policy</h2>
//           </div>
//         </div>
//       </div>

//       <h1 className="text-4xl mt-24 md:text-7xl text-center uppercase text-black md:max-w-xl italic mx-auto">
//         *choose the serum that
//       </h1>
//       <h1 className="text-6xl md:text-6xl font-bold text-center uppercase text-[#594024]">
//         suits you the best*
//       </h1>

//       <div className="flex justify-center items-center mt-10">
//         <h3 className="p-2  mx-3 md:mx-0 text-lg font-medium">
//           Don't know your skin type?
//         </h3>
//         <Link
//           to="/quiz"
//           className="bg-black text-white text-center w-32 font-semibold px-1 py-3 rounded-lg md:mx-10 cursor-pointer"
//         >
//           Take a Quiz!
//         </Link>
//       </div>
//       {/* <Link
//         to={data.map((data) => {
//           `/${data.id}`;
//         })}
//       > */}
//       <div className="flex gap-4 m-3 p-2 overflow-hidden overflow-x-auto">
//         {products.map((item) => {
//           <Link key={products.id} to={`/${products.id}`}>
//             <Serums
//               key={item.id}
//               name={item.name}
//               price={item.price}
//               description={item.description}
//               image={item.image}
//             />
//             ;
//           </Link>;
//         })}
//         {/* {serums} */}
//       </div>
//       {/* </Link> */}

//       <div className="p-3 m-3">
//         <button className="border border-black text-black w-full font-bold px-1 py-4 mb-20 rounded-full hover:bg-black hover:text-white duration-500">
//           SHOW MORE
//         </button>
//       </div>
//     </div>
//   );
// }

import Serums from "./serums";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { productContext } from "./productContext";

export default function Products() {
  const { products, loading, fetchData } = useContext(productContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#f2c48b]" id="Product">
      <div className="flex flex-col justify-center items-center mt-10 md:flex-row">
        <div className="flex flex-col justify-center items-center md:flex-row md:mt-24 border-b border-t pt-7 pb-5 border-black">
          <div className="flex m-3 mx-10 items-center mt-24 md:mt-0">
            <img src="/images/delivery.png" alt="" />
            <h2 className="text-2xl font-medium min-w-full mx-5">
              Fast Delivery
            </h2>
          </div>

          <div className="flex m-3 mx-10">
            <img src="/images/payment.png" alt="" />
            <h2 className="text-2xl font-medium mx-5">Secure Payments</h2>
          </div>

          <div className="flex m-3 mx-10 justify-center">
            <img src="/images/return.png" alt="" />
            <h2 className="text-2xl font-medium mx-5">Return Policy</h2>
          </div>
        </div>
      </div>

      <h1 className="text-4xl mt-24 md:text-7xl text-center uppercase text-black md:max-w-xl italic mx-auto">
        *choose the serum that
      </h1>
      <h1 className="text-6xl md:text-6xl font-bold text-center uppercase text-[#594024]">
        suits you the best*
      </h1>

      <div className="flex justify-center items-center mt-10">
        <h3 className="p-2 mx-3 md:mx-0 text-lg font-medium">
          Don't know your skin type?
        </h3>
        <Link
          to="/quiz"
          className="bg-black text-white text-center w-32 font-semibold px-1 py-3 rounded-lg md:mx-10 cursor-pointer"
        >
          Take a Quiz!
        </Link>
      </div>

      <div className="flex gap-4 m-3 p-2 overflow-hidden overflow-x-auto">
        {products.map((item) => (
          <Link key={item.id} to={`/${item.id}`}>
            <Serums
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          </Link>
        ))}
      </div>

      <div className="p-3 m-3">
        <button className="border border-black text-black w-full font-bold px-1 py-4 mb-20 rounded-full hover:bg-black hover:text-white duration-500">
          SHOW MORE
        </button>
      </div>
    </div>
  );
}
