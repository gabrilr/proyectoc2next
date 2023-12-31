"use client"

import React from "react";
import Link from 'next/link';
import {
  Navbar, Typography,
} from "@material-tailwind/react";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" style={{background: "rgb(233,255,254)"}}>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href = "/" className="flex items-center hover:text-blue-500 transition-colors">
            Tareas
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link href = "/historial" className="flex items-center hover:text-blue-500 transition-colors">
            Historial
        </Link>
      </Typography>
    </ul>
  );
}
export function Navb() {
  // const [openNav, setOpenNav] = React.useState(false);
 
  // const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);
 
  // React.useEffect(() => {
  //   window.addEventListener("resize", handleWindowResize);
 
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);
 
  return (
    <Navbar className="fullWidth mx-auto mb-2">
      <div className="flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Task Management
        </Typography>
        <div className="lg:block">
          <NavList />
        </div>
      </div>
    </Navbar>
  );
}