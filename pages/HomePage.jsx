import Container from "../components/container/Container";
import { Row, Col } from "react-simple-flex-grid";
import className from "classnames";

export default () => (
  <div className="home-bg">
    <div className="home-content">
      <h1>Your Life Easier</h1>
      <div className="div-bg" />
      <h3>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some.
      </h3>
      <div className="arrow bounce">
        <a href="#aboutUs">
          <i className="fa fa-angle-down"></i>
        </a>
      </div>
    </div>
  </div>
);
