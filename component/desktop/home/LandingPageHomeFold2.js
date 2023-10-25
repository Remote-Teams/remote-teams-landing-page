// import React from "react";
// import { motion } from "framer-motion";

// const img1 = "/img/desktop/home/agile.png";
// const img2 = "/img/desktop/home/c1.png";
// const img3 = "/img/desktop/home/s1.png";
// const img4 = "/img/desktop/home/connect.png";
// const img5 = "/img/desktop/home/track.png";

// const LandingPageHomeFold2 = () => {
//   const collaburate = () => {
//     return (
//       <div className="column-div pt-137">
//         <h2 className="home-font-36-extrabold home-font-36-extrabold--collaborate">
//           Collaborate
//         </h2>
//         <h5 className="home-font-24-semibold text-center home-font-24-semibold--content">
//           With your team around the world using advance Project Planning
//           Tools-Gantt Chart <br />
//           and Kanban Board
//         </h5>
//         <motion.div animate={{ scale: 2 }} transition={{ duration: 5 }}>
//           <img src={img2} alt="Collaborate" className="collaborate-img-div" />
//         </motion.div>
//       </div>
//     );
//   };

//   const streamline = () => {
//     return (
//       <div className="column-div ">
//         <h2 className="home-font-36-extrabold home-font-36-extrabold-streamline">
//           Streamline
//         </h2>
//         <h5 className="home-font-24-semibold  text-center home-font-24-semibold--streamline-content">
//           Your tasks and processes using our Resource Scheduling and Workflows
//         </h5>
//         <motion.div animate={{ scale: 2 }} transition={{ duration: 5 }}>
//           <img src={img3} alt="Streamline" className="streamline-img-div" />
//         </motion.div>
//       </div>
//     );
//   };

//   const functionConnect = () => {
//     return (
//       <div className="column-div">
//         <h2 className="home-font-36-extrabold home-font-36-extrabold--connect">
//           Connect
//         </h2>
//         <h5 className="home-font-24-semibold home-font-24-semibold--connect text-center">
//           With your team on the platform via our Video Conference tool <br />{" "}
//           and with our Assistants to stay updated
//         </h5>
//         <motion.div animate={{ scale: 2 }} transition={{ duration: 5 }}>
//           <img src={img4} alt="Connect" className="connect-img-div" />
//         </motion.div>
//       </div>
//     );
//   };

//   /**======================================================
//                *    renderBlockTrack
//    ======================================================*/
//   const renderBlockTrack = () => {
//     return (
//       <div className="column-div home-track-content-div">
//         <h2 className="home-font-36-extrabold home-font-36-extrabold--track">
//           Track
//         </h2>
//         <h5 className="home-font-24-semibold home-font-24-semibold--connect text-center">
//           Track all your entire schedule including Tasks, Timesheet, Meetings
//           etc <br />
//           on Dashboard with ease{" "}
//         </h5>
//         <motion.div animate={{ scale: 2 }} transition={{ duration: 5 }}>
//           <img src={img5} alt="Track" className="home-track-img" />
//         </motion.div>
//       </div>
//     );
//   };
//   return (
//     <div className="pt-212">
//       <div className="row mx-0  align-items-center pl-129">
//         <div className="agile-img-div">
//           <img src={img1} alt="Agile compatible" className="img-fluid" />
//         </div>
//         <div className="pl-140">
//           <h5 className="home-font-36-extrabold">Agile compatible.</h5>
//           <h5 className="home-font-24-semibold pt-28">
//             Remote team enables you to divide your Projects into <br />
//             Modules and Sprints and schedule Scrum Meetings
//           </h5>
//           <h5 className="home-font-24-semibold home-font-24-semibold--work">
//             Work Remotely &amp; Smartly.
//           </h5>
//         </div>
//       </div>
//       {collaburate()}
//       {streamline()}
//       {functionConnect()}
//       {renderBlockTrack()}
//     </div>
//   );
// };

// export default LandingPageHomeFold2;
