import Container from "../components/container/Container";
import { Row, Col } from "react-simple-flex-grid";

export default () => (
  <div id="aboutUs">
    <Container>
      <div className="about-main">
        <h1>About Us</h1>
        <hr />
        <Row>
          <Col md={7}>
            <p className="about-content">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa illo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.
            </p>
          </Col>
          <Col md={5}>
            <div className="about-bg" />
          </Col>
        </Row>
        <p style={{ textAlign: "justify" }}></p>
      </div>
    </Container>
  </div>
);
