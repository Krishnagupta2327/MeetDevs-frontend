
import {Navbar} from "./Navbar";
import { Footer } from "./Footer";

import {Outlet} from "react-router-dom";
export function Body() {

    return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
    );
  };
  