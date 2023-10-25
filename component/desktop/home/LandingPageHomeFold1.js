// import React from "react";
// import WriteModal from "../modal/WriteModal";

// const h1 = "/img/desktop/home/h1.png";
// const h2 = "/img/desktop/home/h2.png";
// const h3 = "/img/desktop/home/h3.png";

// const fold1 = [
//   {
//     imgPath: h1,
//     name: "Collaborate",
//   },
//   {
//     imgPath: h2,
//     name: "Coordinate",
//   },
//   {
//     imgPath: h3,
//     name: "Communicate",
//   },
// ];
// const LandingPageHomeFold1 = () => {
//   return (
//     <div>
//       <div className="home-fold1-div">
//         <h1 className="home-64-extrabold-font">Remote Teams</h1>
//         <h5 className="home-30-semiBold-font">
//           Engineering Process Management
//           <br /> for teams that work remotely
//         </h5>
//         <div>
//           <a
//             href={process.env.NEXT_PUBLIC_LOGIN_URL}
//             target="_self"
//             rel="noopener noreferrer"
//           >
//             <div className="pink-gradient-button pink-gradient-button--home">
//               Start Free Trial
//             </div>
//           </a>
//         </div>
//         <WriteModal
//           text="BOOK A DEMO"
//           extraClass="price-grey-button--home price-grey-button"
//         />
//         <div className="row mx-0 align-items-center pt-99">
//           {fold1.map((data, key) => (
//             <div key={key} className="column-div mr-153">
//               <div className="fold1-img-div">
//                 <img src={data.imgPath} className="img-fluid" alt={data.name} />
//               </div>
//               <h5 className="home-14-semibold-font">{data.name}</h5>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPageHomeFold1;
