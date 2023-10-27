"use client";

import { Navbar } from "flowbite-react";

export default function DefaultNavbar() {
  return (
    <Navbar fluid rounded >
      <Navbar.Brand>
        <img
          alt="Logo"
          className="mr-3 h-6 sm:h-9"
          src="src\assets\logoac.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-bo dark:text-white">
         Arte y Cultura
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Inicio</p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p>Quienes somos</p>
        </Navbar.Link>
        
        <Navbar.Link href="#">contactanos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
