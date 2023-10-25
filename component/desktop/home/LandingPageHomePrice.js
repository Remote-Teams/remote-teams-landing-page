// import React from "react";
// import WriteModal from "../modal/WriteModal";

// const p1 = "/img/desktop/price/p1.png";
// const p2 = "/img/desktop/price/p2.png";
// const p3 = "/img/desktop/price/p3.png";
// const p4 = "/img/desktop/price/p4.png";
// const p5 = "/img/desktop/price/p5.png";

// const price = [
//   {
//     imgPath: p1,
//     imgClass: "home-price1-img",
//     name: "ASTRONAUT",
//     user: "2-5",
//     money: "$ 20/Mo",
//   },
//   {
//     imgPath: p2,
//     imgClass: "home-price2-img",
//     name: "ROVER",
//     user: "6-10",
//     money: "$ 80/Mo",
//   },
//   {
//     imgPath: p3,
//     imgClass: "home-price3-img",
//     name: "SPACESHIP",
//     user: "11-15",
//     money: "$ 160/Mo",
//   },
//   {
//     imgPath: p4,
//     imgClass: "home-price4-img",
//     name: "SPACESTATION",
//     user: "16-20",
//     money: "$ 240/Mo",
//   },
// ];

// const LandingPageHomePrice = () => {
//   return (
//     <div className="column-div pt-94">
//       <h2 className="home-font-36-extrabold home-font-36-extrabold-streamline pt-0">
//         Our Plans
//       </h2>
//       <div className="row mx-0 pt-62">
//         {price.map((data, key) => (
//           <div key={key} className="column-div">
//             {key === 3 ? (
//               <div className="web-price-card-div">
//                 <div className="web-price-img-block--home">
//                   <img
//                     src={data.imgPath}
//                     alt={data.name}
//                     className={data.imgClass}
//                   />
//                 </div>
//                 <h5 className="price-font-24-extrabold price-font-24-extrabold-home">
//                   {data.name}
//                 </h5>
//                 <h5 className="price-font-14-semibold price-font-14-semibold-home">
//                   {data.user} Users
//                 </h5>
//                 <h5 className="price-font-18-semibold ">{data.money}</h5>
//               </div>
//             ) : (
//               <div className="mr-150 web-price-card-div">
//                 <div className="web-price-img-block--home">
//                   <img
//                     src={data.imgPath}
//                     alt={data.name}
//                     className={data.imgClass}
//                   />
//                 </div>
//                 <h5 className="price-font-24-extrabold price-font-24-extrabold-home">
//                   {data.name}
//                 </h5>
//                 <h5 className="price-font-14-semibold price-font-14-semibold-home">
//                   {data.user} Users
//                 </h5>
//                 <h5 className="price-font-18-semibold ">{data.money}</h5>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="row mx-0 justify-content-center pt-100">
//         <a
//           href={process.env.NEXT_PUBLIC_LOGIN_URL}
//           target="_self"
//           rel="noopener noreferrer"
//         >
//           <div className="pink-gradient-button">Start Free Trial</div>
//         </a>
//       </div>
//       <div className="row mx-0 align-items-center justify-content-center pt-60">
//         <div className="home-price5-img-div">
//           <img src={p5} alt="For enterprise solutions" className="img-fluid" />
//         </div>
//         <div className="pl-34">
//           <h5 className="price-font-24-semibold-home">
//             For enterprise solutions
//           </h5>
//           <h5 className="home-font-14">
//             if your team size is above 20 and you
//             <br /> plan on growing fast, we have bespoke
//             <br /> plans for you
//           </h5>
//         </div>
//         <div className="pl-74">
//           <WriteModal extraClass="price-grey-button" text="CONTACT US" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPageHomePrice;
