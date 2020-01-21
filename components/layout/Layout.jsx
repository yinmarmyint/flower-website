import Navbar from "../navbar/Navbar";
import HomePage from "../../pages/HomePage";

export default ({ className, children, active }) => (
  <div>
    <Navbar active={active} />
    {children}
  </div>
);
