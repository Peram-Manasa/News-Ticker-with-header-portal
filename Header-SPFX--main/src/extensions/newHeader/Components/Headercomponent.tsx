/* eslint-disable @microsoft/spfx/import-requires-chunk-name */
// /* eslint-disable @typescript-eslint/no-floating-promises */
// import * as React from "react";
// import "./Headercomponent.scss";

// import Marquee from "react-fast-marquee";
// import { AiOutlineSearch } from "react-icons/ai";
// // import { CgMenuGridO } from "react-icons/cg";
// import NewsTicker from "../../newsTicker/components/NewsTicker";
// import SpService from "../../newsTicker/service/SpService";
// import { getSP } from "./pnpConfig";
// import { SPFI } from "@pnp/sp";

// export type News = {
//   title: string;
//   content: string;
//   publishDate: Date;
// };

// export interface INewsTickerProps {
//   items: News[];
//   bgColor: string;
//   textColor: string;
//   spService: SpService;
// }

// const Headercomponent = (props: any) => {
//   const [newstms, setNewsItms] = React.useState<any>();

//   console.log(props.siteabsUrl);
//   const url = props.siteabsUrl.split("/");
//   const mainsite = url[4];
//   console.log(mainsite);



//   const getNewsData = async () => {
//     const sp: SPFI = getSP(props.context);
//     const spService = new SpService(sp);
//     const newsItems = await spService.getNewsItems(
//       "HighlightNews",
//       "Published News"
//     );

//     setNewsItms(newsItems);
//   };

//   const navItems: any[] = [
//     { title: "Home", site: "Zelardemo", realsitename: "Zelardemo" },
//     {
//       title: "Projects & clients",
//       site: "Projects&Clients",
//       realsitename: "projectsandClients",
//     },
//     { title: "Human Resources", site: "HR", realsitename: "hr" },
//     {
//       title: "Administration",
//       site: "Administration",
//       realsitename: "administration",
//     },
//     {
//       title: "Sales and Marketing",
//       site: "Sales&Marketing",
//       realsitename: "salesandMarketing",
//     },
//     { title: "Finanace", site: "Finance", realsitename: "finance" },
//     {
//       title: "Learning Management",
//       site: "LearningManagement",
//       realsitename: "learningmanagement",
//     },

//   ];

//   const renderSwitch = (param: any) => {
//     console.log(param);

//     switch (props.sitename) {
//       case param.site:
//         return param.realsitename === mainsite ? (
//           <a href= {`${props.uri}/sites/${param.realsitename}`} >
//           <div
//             className="navItemActive"
//             // onClick={() =>
//             //   window.open(`${props.uri}/sites/${param.realsitename}`, "_self")
//             // }
//           >
//             <a href= {`${props.uri}/sites/${param.realsitename}`} >{param.title}</a>
            
//             {/* {param.title} */}
//           </div>
//           </a>
//         ) : (
//           <a href= {`${props.uri}/sites/${mainsite}/${param.realsitename}`} >
//           <div
//             className="navItemActive"
//             // onClick={() =>
//             //   window.open(
//             //     `${props.uri}/sites/${mainsite}/${param.realsitename}`,
//             //     "_self"
//             //   )
//             // }
//           >
//             <a href= {`${props.uri}/sites/${mainsite}/${param.realsitename}`} >{param.title}</a>
//             {/* {param.title} */}
//           </div>
//           </a>
//         );

//       default:
//         return param.site === mainsite ? (
//           <a href={`${props.uri}/sites/${param.realsitename}`}>
//             <div
//               className="navItem"
//               // onClick={() =>
//               //   window.open(`${props.uri}/sites/${param.realsitename}`, "_self")
//               // }
//             >
//               {param.title}
//             </div>
//           </a>
//         ) : (
//           <div>
//           <a href= {`${props.uri}/sites/${mainsite}/${param.realsitename}`}  >
//           <div
//             className="navItem"
//             // onClick={() =>
//             //   window.open(
//             //     `${props.uri}/sites/${mainsite}/${param.realsitename}`,
//             //     "_self"
//             //   )
//             // }
//           >
//             {param.title}
//           </div>
//           </a>
//           </div>
//         );
//     }
//   };
//   const [sbState] = React.useState<any>(false);
//   React.useEffect(() => {
//     console.log(props.sitename);
//     if (props.sitename === mainsite) {
//       console.log(props.sitename);
//       console.log(mainsite);
//       console.log(newstms);

//       getNewsData();
//     }
//   }, []);
//   return (
//     <>
//       <div className={sbState ? "menubar" : "menubarclose"}>
//         {props.items &&
//           props.items?.map((x: any) => {
//             return (
//               <a href={x.url}>
//                 <div className="menuitem">
//                   <a href={x.url}>{x.title}</a>
//                 </div>
//               </a>
//             );
//           })}
//       </div>

//       <div
//         className="Navbars"
//         style={{
//           backgroundImage: `url(${props.siteabsUrl}/SiteAssets/New%20Project.png)`,
//         }}
//       >
//         <div className="profile">
//           <img src={props.url} alt="Profilepic" />
//           <div className="profiledetails">
//             <p>{props.greet},</p>
//             <p>{props.user}...</p>
//           </div>
//         </div>
//         <div className="imgscroll">
//           <Marquee>
//             <div className="container">
//               <div className="img2">
//                 <img
//                   src={`${props.siteabsUrl}/SiteAssets/image1-removebg-preview.png`}
//                 />
//               </div>
//               <div className="img2">
//                 <img
//                   src={`${props.siteabsUrl}/SiteAssets/Devops-removebg-preview.png`}
//                 />
//               </div>
//               <div className="img2">
//                 <img
//                   src={`${props.siteabsUrl}/SiteAssets/image3-removebg-preview.png`}
//                 />
//               </div>
//               <div className="img2">
//                 <img
//                   src={`${props.siteabsUrl}/SiteAssets/image4-removebg-preview.png`}
//                 />
//               </div>
//               <div className="img2">
//                 <img
//                   src={`${props.siteabsUrl}/SiteAssets/Data_Integration-removebg-preview.png`}
//                 />
//               </div>
//               <div className="img2">
//                 <img
//                   src={`${props.siteabsUrl}/SiteAssets/projectengineering-removebg-preview-removebg-preview.png`}
//                 />
//               </div>
//               <div className="img2">
//                 <img
//                   src={`${props.siteabsUrl}/SiteAssets/open_policy_agent-removebg-preview.png`}
//                 />
//               </div>
//             </div>
//           </Marquee>
//         </div>

//         <a href="https://zelarsoft.com/" target="_blank">
//           {" "}
//           <img
//             className="img1"
//             src={`${props.siteabsUrl}/SiteAssets/Zelarlogo.png`}
//             alt="Logo"
//           ></img>
//         </a>
//       </div>
//       <div className="topnav">
//         <ul>
//           <li>
//             <div className="navList">
//               {navItems.map((x: any) => {
//                 return renderSwitch(x);
//               })}
//             </div>
//           </li>
//         </ul>
//         <div className="searchBardiv">
//           <form
//             action={`/sites/${mainsite}/_layouts/search.aspx/All`}
//             method="get"
//           >
//             <input type="text" placeholder="Search.." name="q" />
//           </form>
//           <button className="submitbtn" type="submit">
//             <a target="_blank">
//               <AiOutlineSearch size={15} />
//             </a>
//           </button>
//         </div>
//       </div>
//       {newstms && (
//         <div >
//           <NewsTicker
//             items={newstms}
//             bgColor="#ad65f763"
//             textColor="black"
//             spService={props.newsTickerSpService}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Headercomponent;


import React, { Suspense } from 'react'
const MenuBar = React.lazy(()=>import ('./NavBar'))
//import News from './News'
const Banner = React.lazy(()=>import ('./Banner'))
const News = React.lazy(()=>import ('./News'))
const Headercomponent = (props:any) => {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Banner user={props.user}
      greet={props.greet}
      url={props.url}
      uri={props.uri}
      sitename={props.sitename}
      items={props.items}
      siteabsUrl={props.siteabsUrl}/>
      <MenuBar user={props.user}
      greet={props.greet}
      url={props.url}
      uri={props.uri}
      sitename={props.sitename}
      items={props.items}
      siteabsUrl={props.siteabsUrl}/>
      <News/>
      </Suspense>
      
    </div>
  )
}

export default Headercomponent

