import { Outlet } from "react-router-dom";
import NavbarLayout from "./navbar";

const NavbarWithOutlet = () => {
  return (
    <NavbarLayout>
      <Outlet />
    </NavbarLayout>
  );
};

export default NavbarWithOutlet;