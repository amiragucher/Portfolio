
// import "antd/dist/antd.css";
// import { Drawer, Dropdown, Menu, Space } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { AiOutlineMenu } from "react-icons/ai";
// import { useMediaQuery } from 'react-responsive'
// import { useEffect, useState } from "react";



// export default function PhoneMenu(){  
//   const [phone, setPhone] = useState()
// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
// return (
//   <div className="fixed z-[1002]">
//     <div className=" flex justify-between w-[100vw] bg-[#004F54] text-[white] ml-[0px] px-[1em] py-[1em]">
//       <div className="h-10 w-10 sm:h-14 sm:w-14 relative">
//         <Image
//           src="/logo-app.png"
//           alt="Project Clean-up logo"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>

//       <Link href="#home">
//         <a className="text-[white] hidden md:flex items-center text-xl">
//           Home
//         </a>
//       </Link>
//       <Dropdown
//         overlay={menu}
//         className="text-[white] hidden md:flex items-center text-xl"
//       >
//         <a onClick={(e) => e.preventDefault()}>
//           <Space>
//             Get Involved
//             <DownOutlined />
//           </Space>
//         </a>
//       </Dropdown>
//       <Link href="#weather">
//         <a className="text-[white] hidden md:flex items-center text-xl">
//           Check Weather
//         </a>
//       </Link>
    
//       <AiOutlineMenu
//         className="md:hidden absolute inset-y-[2em] right-[2em]"
//         size={25}
//         onClick={showDrawer}
//       />
//     </div>
//     <>
//       <Drawer
//         title="Information"
//         placement="right"
//         onClose={onClose}
//         visible={visible}
//         className="text-[#004F54]"
//       >
//         <ul className="flex flex-col ">
//           <div className="p-4 pt-10">
//             <a
//               onClick={() => setVisible(false)}
//               className="text-[#004F54] text-xl"
//               href="#home"
//             >
//               Home
//             </a>
//           </div>
//           <div className="p-4 ">
//             <a
//               onClick={() => setVisible(false)}
//               className="text-[#004F54] text-xl"
//               href="/#about"
//             >
//               About
//             </a>
//           </div>
//           <div className="p-4">
//             <a
//               onClick={() => setVisible(false)}
//               className="text-[#004F54] text-xl"
//               rel="noopener noreferrer"
//               href="/start-a-clean"
//             >
//               Start a Clean-up
//             </a>
//           </div>
//           <div className="p-4">
//             <a
//               onClick={() => setVisible(false)}
//               className="text-[#004F54] text-xl"
//               href="#map"
//             >
//               Join a Clean-up
//             </a>
//           </div>
//           <div className="p-4">
//             <a
//               onClick={() => setVisible(false)}
//               className="text-[#004F54] text-xl"
//               href="/log-a-clean"
//             >
//               Log a Clean-up
//             </a>
//           </div>
//           <div className="p-4">
//             <a
//               onClick={() => setVisible(false)}
//               className="text-[#004F54] text-xl"
//               href="#weather"
//             >
//               Check Weather
//             </a>
//           </div>
          
//         </ul>
//       </Drawer>
//     </>
//   </div>
// );
// }
