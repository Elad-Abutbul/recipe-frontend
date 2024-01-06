import { Navbar } from "../..";

export const Layout = ({ children, margin = true }) => (
  <div>
    <Navbar />
    <div className={margin ? "m-4" : ""}>{children}</div>
  </div>
);
